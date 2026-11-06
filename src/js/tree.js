(function () {
	function forEachMatch(root, selector, callback) {
		root.querySelectorAll(selector).forEach(callback);
	}

	function markBranch(root, className, branchId) {
		forEachMatch(root, '.' + className, (element) => element.classList.remove(className));
		if (branchId !== null) {
			forEachMatch(root, `[data-b="${branchId}"]`, (element) => element.classList.add(className));
		}
	}

	function setHighlightedBranch(skillTree, branchId) {
		if (branchId === skillTree.highlightedBranchId) return;
		skillTree.highlightedBranchId = branchId;
		skillTree.root.classList.toggle('has-hl', branchId !== null);
		markBranch(skillTree.root, 'is-hl', branchId);
	}

	function setSharedSkill(root, skillId) {
		forEachMatch(root, '.is-twin', (chip) => chip.classList.remove('is-twin'));
		if (skillId) {
			forEachMatch(root, `.tr-ov [data-s="${skillId}"]`, (chip) => chip.classList.add('is-twin'));
		}
	}

	function setFocusedBranch(skillTree, branchId) {
		let root = skillTree.root;
		skillTree.focusedBranchId = branchId;
		setHighlightedBranch(skillTree, null);
		setSharedSkill(root, null);
		root.classList.toggle('has-focus', branchId !== null);
		markBranch(root, 'is-f', branchId);
		forEachMatch(root, '.tr-pill', (pill) => {
			pill.setAttribute('aria-expanded', String(pill.dataset.b === String(branchId)));
		});
		forEachMatch(root, '.tr-fx', (detailGroup) => {
			detailGroup.setAttribute('aria-hidden', String(detailGroup.dataset.b !== String(branchId)));
		});
	}

	function handleMouseOver(skillTree, e) {
		let branchElement = e.target.closest('.tr-pill, .tr-ov');
		setHighlightedBranch(skillTree, branchElement ? branchElement.dataset.b : null);
		let skillChip = e.target.closest('.tr-ov [data-s]');
		let isBranchFocused = skillTree.focusedBranchId !== null;
		setSharedSkill(skillTree.root, skillChip && !isBranchFocused ? skillChip.dataset.s : null);
	}

	function handleMouseLeave(skillTree) {
		setHighlightedBranch(skillTree, null);
		setSharedSkill(skillTree.root, null);
	}

	function handleFocusIn(skillTree, e) {
		let pill = e.target.closest('.tr-pill');
		setHighlightedBranch(skillTree, pill ? pill.dataset.b : null);
	}

	function handleClick(skillTree, e) {
		let pill = e.target.closest('.tr-pill');
		if (pill) {
			let isAlreadyOpen = skillTree.focusedBranchId === pill.dataset.b;
			setFocusedBranch(skillTree, isAlreadyOpen ? null : pill.dataset.b);
			return;
		}
		let overviewRow = e.target.closest('.tr-ov');
		if (overviewRow) {
			setFocusedBranch(skillTree, overviewRow.dataset.b);
			return;
		}
		if (e.target.closest('.tr-root, .tr-back')) setFocusedBranch(skillTree, null);
	}

	function handleKeyDown(skillTree, e) {
		let currentSlide = Reveal.getCurrentSlide();
		if (!currentSlide || !currentSlide.contains(skillTree.root)) return;
		if (e.key === 'Escape' && skillTree.focusedBranchId !== null) {
			e.preventDefault();
			e.stopPropagation();
			setFocusedBranch(skillTree, null);
			return;
		}
		let activeElement = document.activeElement;
		let isTreeButton = Boolean(activeElement) && activeElement.tagName === 'BUTTON' && skillTree.root.contains(activeElement);
		if ((e.key === ' ' || e.key === 'Enter') && isTreeButton) e.stopPropagation();
	}

	function handleSlideChanged(skillTree, e) {
		if (!e.currentSlide.contains(skillTree.root)) setFocusedBranch(skillTree, null);
	}

	function initSkillTree(treeElement) {
		let skillTree = { root: treeElement, focusedBranchId: null, highlightedBranchId: null };
		treeElement.addEventListener('mouseover', (e) => handleMouseOver(skillTree, e));
		treeElement.addEventListener('mouseleave', () => handleMouseLeave(skillTree));
		treeElement.addEventListener('focusin', (e) => handleFocusIn(skillTree, e));
		treeElement.addEventListener('click', (e) => handleClick(skillTree, e));
		window.addEventListener('keydown', (e) => handleKeyDown(skillTree, e), true);
		Reveal.on('slidechanged', (e) => handleSlideChanged(skillTree, e));
	}

	document.querySelectorAll('[data-tree]').forEach((treeElement) => initSkillTree(treeElement));
})();