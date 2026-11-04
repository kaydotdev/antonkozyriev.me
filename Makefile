PRETTIER ?= prettier
PYTHON   ?= python3

.PHONY: format serve

serve:
	cd src/ && $(PYTHON) -m http.server

format:
	$(PRETTIER) --print-width 128 --html-whitespace-sensitivity ignore --write "src/**/*.{html,css}"