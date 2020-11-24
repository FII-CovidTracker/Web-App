import styled from 'styled-components'

export default styled.header`
& > .header,
& > .nav {
	& .container {
		width: 100%;
		max-width: var(--ctk-container-width);
		margin: 0 auto;
		padding: 0 var(--ctk-general-gap);
	}
}

& > .header {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: grid;
	align-items: center;
	height: var(--ctk-header-height);
	background-color: var(--ctk-primary-color);
	z-index: var(--ctk-header-z-index);

	& .container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& .logo-container .logo {
			display: flex;

			& .icon {
				display: flex;
				margin-right: var(--ctk-general-gap);
				background-color: var(--ctk-primary-text-color-border);
                border-radius: 50%;
                width: 51px;
                place-items: center;
                place-content: center;

				img {
				    margin-top: 2px;
					height: var(--ctk-header-logo-height);
					width: 37px;
					object-fit: contain;
				}
			}

			& .title {
				display: grid;
				align-items: center;
				text-transform: uppercase;
				color: var(--ctk-primary-text-color);
				font-family: var(--ctk-secondary-font);

				& > span:first-child {
					font-size: 1.3em;
					letter-spacing: 4.5px;
					font-weight: 800;
				}
				& > span:last-child {
					font-size: 1.2em;
					margin-top: -2px;
				}
			}
		}

		& .header-options {
			display: grid;
			grid-auto-flow: column;
			column-gap: var(--ctk-general-gap);
			
			.connect-container {
				button {
					display: flex;
					align-items: center;
					gap: var(--ctk-general-gap-sm);
					padding: 8px 12px;
					background-color: var(--ctk-secondary-color);
					border: 0;
					transition: background-color 200ms ease-in-out;

					svg {
						height: 22px;
						font-size: 1.6em;
					}

					&:hover {
						background-color: var(--ctk-primary-text-color-border);
					}
				}
			}
		}
	}
}

& > .nav {
	left: 0;
	right: 0;
	background-color: var(--ctk-primary-color-transparent);
	border-top: 1px solid var(--ctk-primary-text-color-border);
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
	z-index: var(--ctk-nav-z-index);
	font-family: var(--ctk-secondary-font);

	& > .container {
		font-weight: 600;
		letter-spacing: 0.5px;
		display: grid;

		nav {
			display: flex;
			margin-left: calc(-1 * var(--ctk-general-gap));

			.link .icon {
				// &.icon--about { font-size: 0.8em; }
			}
		}

		.link,
		.more,
		.search {
			display: flex;

			button {
				background-color: transparent;
				border: none;
				font-weight: 600;
			}
		}

		.link {
			align-items: center;
			font-size: 0.95em;
			color: var(--ctk-primary-text-color);
			padding-left: var(--ctk-general-gap);
			padding-right: var(--ctk-general-gap);
			border-bottom: 3px solid transparent;
			transition: background-color 200ms ease-in-out,
				border-color 300ms ease-in-out;

			&.active {
				border-color: var(--ctk-primary-text-color);

				&:hover {
					border-color: transparent;
				}
			}

			&:hover {
			    color: var(--ctk-secondary-color-semitransparent);
				background-color: var(--ctk-accent-color);
			}

			.icon {
				margin-right: var(--ctk-general-gap-hf);
			}
		}

		.more {
			button {
				.text {
					margin-right: var(--ctk-general-gap-hf);
				}

				.burger {
					margin-left: var(--ctk-general-gap-hf);

					&,
					&::before,
					&::after {
						background-color: var(--ctk-secondary-color);
					}

					&.active {
						background-color: transparent;
					}
				}
			}
		}

		.search {
			button {
				font-size: 1.1em;
			}
		}

		.more,
		.search {
			button {
				border-radius: 0;
			}
		}
	}

	&.nav--absolute {
		position: absolute;
		top: var(--ctk-header-height);

		& > .container {
			grid-template-columns: 1fr auto auto;

			.link {
				height: var(--ctk-nav-height);
			}
		}
	}

	&.nav--fixed {
		position: fixed;
		top: 0;

		& > .container {
			grid-template-columns: auto 1fr auto auto;

			nav {
				margin-left: 0;
			}

			.link {
				height: var(--ctk-nav-fixed-height);
			}

			& .logo-container {
				display: flex;
				align-items: center;
				margin-right: var(--ctk-general-gap-md);

				.logo {
					display: flex;

					& .icon {
						display: flex;
						place-items: center;
						border-radius: 50%;
						height: var(--ctk-nav-logo-height);
						width: var(--ctk-nav-logo-height);
						background-color: var(--ctk-primary-color);

						img {
							height: 70%;
							width: auto;
							margin: 0 auto;
							object-fit: contain;
						}
					}
				}
			}
		}
	}
}
`