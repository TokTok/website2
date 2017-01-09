WEB_NAME := toktok.github.io

ifneq ($(GITHUB_TOKEN),)
WEB_REPO := https://$(GITHUB_TOKEN)@github.com/TokTok/$(WEB_NAME)
else
WEB_REPO := git@github.com:TokTok/$(WEB_NAME)
endif

toktok-site: $(shell which jekyll) $(shell find toktok -type f)
	rm -rf $@
	cd toktok && jekyll build && mv _site ../$@

upload: toktok-site
	@test -d $(WEB_NAME) || git clone --depth=1 $(WEB_REPO)
	rm -rf $(WEB_NAME)/*
	mv toktok-site/* $(WEB_NAME)/
	rmdir toktok-site
	cd $(WEB_NAME) && git add -A .
	cd $(WEB_NAME) && git commit --amend --reset-author -m'Updated website'
	cd $(WEB_NAME) && git push --force --quiet

# copy emoijs used on the site to images
emoij:
	mkdir -p toktok/static/img/emoij/16x16
	for codepoint in $$(grep -Prhio '&#x[\da-f]+;' toktok/ | grep -ioP '[\da-f]+'); do \
		echo $$codepoint; \
		wget https://raw.githubusercontent.com/twitter/twemoji/gh-pages/16x16/$$codepoint.png -O toktok/static/img/emoij/16x16/$${codepoint}.png ; \
	done

clean-emoij:
	rm -r toktok/static/img/emoij/16x16

