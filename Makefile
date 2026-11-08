PRETTIER ?= "node_modules/prettier/bin/prettier.cjs"
PYTHON   ?= python3

.PHONY: format serve download-vendor

serve:
	cd src/ && $(PYTHON) -m http.server

format:
	$(PRETTIER) --print-width 128 --html-whitespace-sensitivity ignore --write "src/**/*.{html,css}"

download-vendor:
	@wget -O src/js/reveal.js https://cdnjs.cloudflare.com/ajax/libs/reveal.js/6.0.2/reveal.min.js
	@wget -O src/css/reset.css https://cdnjs.cloudflare.com/ajax/libs/reveal.js/6.0.2/reset.min.css
	@wget -O src/css/reveal.css https://cdnjs.cloudflare.com/ajax/libs/reveal.js/6.0.2/reveal.min.css
