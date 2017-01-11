WEB_NAME := toktok.github.io

ifneq ($(GITHUB_TOKEN),)
WEB_REPO := https://$(GITHUB_TOKEN)@github.com/TokTok/$(WEB_NAME)
else
WEB_REPO := git@github.com:TokTok/$(WEB_NAME)
endif

all: changelog roadmap spec toktok-site

#
# build the website with jekyll
#
toktok-site: $(shell which jekyll) $(shell find toktok -type f) emoij
	rm -rf $@
	cd toktok && jekyll build && mv _site ../$@

#
# single pages, generated from external content
#
changelog: toktok/changelog/c-toxcore.md
roadmap: toktok/roadmap/c-toxcore.md
toktok/%/c-toxcore.md: toktok/%/c-toxcore.md.dist
	cp $< $@
	curl https://git-critique.herokuapp.com/hello/$* >> $@

spec: toktok/spec.md
toktok/spec.md: hs-toxcore
	cp $@.dist $@
	cp -a hs-toxcore/res toktok/
	cd hs-toxcore && \
		pandoc -f latex+lhs -t native src/tox/Network/Tox.lhs \
		| grep -v '^,CodeBlock ' \
		| pandoc -f native -t markdown_github \
		>> ../toktok/spec.md

hs-toxcore:
	if [ -d $@ ] ; then \
		cd $@ && git pull ;\
	else \
		git clone --depth=1 https://github.com/TokTok/hs-toxcore $@ ;\
	fi

#
# deployment tasks
#
lint:
	mdl -w -s .md-style.rb toktok

check:
	linkchecker --ignore-url "https://travis-ci.org.*" --ignore-url "irc://.*" toktok-site

upload: toktok-site
	@test -d $(WEB_NAME) || git clone --depth=1 $(WEB_REPO)
	rm -rf $(WEB_NAME)/*
	mv toktok-site/* $(WEB_NAME)/
	rmdir toktok-site
	cd $(WEB_NAME) && git add -A .
	cd $(WEB_NAME) && git commit --amend --reset-author -m'Updated website'
	cd $(WEB_NAME) && git push --force --quiet

#
# emoij generator
#
toktok/static/img/emoij/16x16/%.png:
	mkdir -p toktok/static/img/emoij/16x16
	wget https://raw.githubusercontent.com/twitter/twemoji/gh-pages/16x16/$*.png -O $@

# copy emoijs used on the site to images
emoij: $(addsuffix .png,$(addprefix toktok/static/img/emoij/16x16/,$(shell grep -Prhio '&#x[\da-f]+;' toktok/ | grep -ioP '[\da-f]+')))

clean-emoij:
	rm -r toktok/static/img/emoij/16x16

