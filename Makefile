PRETTIER ?= prettier
PYTHON   ?= python3

.PHONY: format serve download-vendor

serve:
	cd src/ && $(PYTHON) -m http.server

format:
	$(PRETTIER) --print-width 128 --html-whitespace-sensitivity ignore --write "src/**/*.{html,css}"

download-vendor:
	@wget -O src/js/reveal.js https://cdnjs.cloudflare.com/ajax/libs/reveal.js/6.0.2/reveal.min.js
