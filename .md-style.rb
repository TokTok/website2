all
# The first-level heading is prepended during generation of .html files.
rule 'MD002', :level => 2
# Rustdoc and some other markdown parsers don't like 2-space list indent.
rule 'MD007', :indent => 4
# Pandoc generates numbered ordered lists.
rule 'MD029', :style => 'ordered'
# Pandoc generates lists with the following configured spacing after the list
# marker.
rule 'MD030', :ul_single => 3, :ol_single => 2, :ul_multi => 3, :ol_multi => 2
# The kramdown table of contents generation needs a bullet point directly before
# the {:toc} directive.
exclude_rule 'MD032'
# We use inline HTML for some things that aren't easily expressed in markdown.
exclude_rule 'MD033'
# We use Jekyll front matter for web page metadata. This includes the title,
# which is used as the first heading.
exclude_rule 'MD041'
