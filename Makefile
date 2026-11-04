PRETTIER ?= prettier

.PHONY: format

format:
	$(PRETTIER) --print-width 128 --html-whitespace-sensitivity ignore --write "src/**/*.{html,css}"