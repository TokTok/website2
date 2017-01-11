# website

The new website with something better than Yst (also, change the title)

## Development

To work on the website you need the following things:

- Jekyll and mdl via ruby gems: `gem install jekyll mdl` (mdl is optional, for linting the markdown)
- pandoc, e.g. via `apt-get install pandoc` or `cabal install pandoc` or <http://pandoc.org/installing.html>
  (optional for building the spec)
- linkchecker via `apt-get install linkchecker`
  (optional for link checking)

The follwing make targets are available:

- `make all`: build the complete website including external content.
- `make changelog`: download changelogs (included in `all`)
- `make roadmap`: download roadmaps (included in `all`)
- `make spec`: download and parse the spec with pandoc (included in `all`)
- `make lint`: run markdown linter `mdl`
- `make check`: run linkchecker

