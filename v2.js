
class Layout {

	static get inputProperties () {
		return ['--height', '--padding'];
	}

	*intrinsicSizes () {}

	*layout (children, edges, constraints, styles) {

		const childFragments = yield children.map(child => {

			return child.layoutNextFragment();

		});

		const autoBlockSize = parseInt(styles.get('--height').toString()) || 50;
		const padding = parseInt(styles.get('--padding').toString()) || 50;

		childFragments.map(child => {

			child.inlineOffset = padding;
			child.blockOffset = padding;

		});

		return {
			childFragments,
			autoBlockSize
		};

	}

}

registerLayout('bananas', Layout);
