import { PhoneNumber, TextArea, Label, RadioSwitch, RadioButtonInputGroup, RadioBlock, RadioButton, Tooltip, ErrorFieldMessage, InputGroup, Input, Checkbox, SuccessFieldMessage, InfoFieldMessage } from '../../_snowpack/pkg/@sb1/ffe-form-react.js';
import { ButtonGroup, PrimaryButton, SecondaryButton, TertiaryButton, ShortcutButton, ExpandButton, InlineExpandButton, ActionButton, TaskButton, BackButton } from '../../_snowpack/pkg/@sb1/ffe-buttons-react.js';
import { useState } from '../../_snowpack/pkg/react.js';
import Datepicker, { Calendar } from '../../_snowpack/pkg/@sb1/ffe-datepicker-react.js';
import Dropdown from '../../_snowpack/pkg/@sb1/ffe-dropdown-react.js';
import { Paragraph, DividerLine, LinkText, EmphasizedText, StrongText, SmallText, MicroText, PreformattedText, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../../_snowpack/pkg/@sb1/ffe-core-react.js';
import Collapse from '../../_snowpack/pkg/@sb1/ffe-collapse-react.js';
import { DetailList, Detail, DetailContent } from '../../_snowpack/pkg/@sb1/ffe-details-list-react.js';
import Table from '../../_snowpack/pkg/@sb1/ffe-tables-react.js';
import { HakeIkon, KryssIkon, KryssSirkelIkon, GrafOppIkon, SparegrisIkon, InfoIkon, UtropstegnIkon, LyspareIkon, BindersIkon, PlussIkon, SnakkebobleIkon, HandlevognIkon, HusIkon, BilIkon } from '../../_snowpack/pkg/@sb1/ffe-icons-react.js';
import { Accordion, AccordionItem } from '../../_snowpack/pkg/@sb1/ffe-accordion-react.js';
import { IconCard, CardBase, TextCard, ImageCard } from '../../_snowpack/pkg/@sb1/ffe-cards-react.js';
import FileUpload from '../../_snowpack/pkg/@sb1/ffe-file-upload-react.js';
import { ContextErrorMessage, ContextSuccessMessage, ContextInfoMessage, ContextTipMessage } from '../../_snowpack/pkg/@sb1/ffe-context-message-react.js';
import ChartDonut from '../../_snowpack/pkg/@sb1/ffe-chart-donut-react.js';
import { CheckList, CheckListItem, DescriptionList, DescriptionListTerm, DescriptionListDescription, BulletList, BulletListItem, DescriptionListMultiCol, NumberedList, NumberedListItem, StylizedNumberedList, StylizedNumberedListItem } from '../../_snowpack/pkg/@sb1/ffe-lists-react.js';
import Spinner from '../../_snowpack/pkg/@sb1/ffe-spinner-react.js';
import { Grid, GridRow, GridCol, InlineGrid } from '../../_snowpack/pkg/@sb1/ffe-grid-react.js';
import { InfoMessage, ErrorMessage, InfoMessageList, InfoMessageListItem, TipsMessage, SuccessMessage } from '../../_snowpack/pkg/@sb1/ffe-message-box-react.js';
import { Tab, TabGroup, TabButton, TabButtonGroup } from '../../_snowpack/pkg/@sb1/ffe-tabs-react.js';
import { AccountSelectorMulti, AccountSelector } from '../../_snowpack/pkg/@sb1/ffe-account-selector-react.js';
import { SystemErrorMessage, SystemNewsMessage, SystemSuccessMessage, SystemInfoMessage } from '../../_snowpack/pkg/@sb1/ffe-system-message-react.js';

var packageList = [
	{
		name: "@sb1/ffe-accordion-react",
		version: "9.2.3",
		"private": false,
		location: "/packages/ffe-accordion-react"
	},
	{
		name: "@sb1/ffe-accordion",
		version: "7.0.11",
		"private": false,
		location: "/packages/ffe-accordion"
	},
	{
		name: "@sb1/ffe-account-selector-react",
		version: "16.2.0",
		"private": false,
		location: "/packages/ffe-account-selector-react"
	},
	{
		name: "@sb1/ffe-buttons-react",
		version: "12.2.11",
		"private": false,
		location: "/packages/ffe-buttons-react"
	},
	{
		name: "@sb1/ffe-buttons",
		version: "11.1.0",
		"private": false,
		location: "/packages/ffe-buttons"
	},
	{
		name: "@sb1/ffe-cards-react",
		version: "4.0.7",
		"private": false,
		location: "/packages/ffe-cards-react"
	},
	{
		name: "@sb1/ffe-cards",
		version: "10.1.0",
		"private": false,
		location: "/packages/ffe-cards"
	},
	{
		name: "@sb1/ffe-chart-donut-react",
		version: "3.0.5",
		"private": false,
		location: "/packages/ffe-chart-donut-react"
	},
	{
		name: "@sb1/ffe-checkbox-react",
		version: "7.0.6",
		"private": false,
		location: "/packages/ffe-checkbox-react"
	},
	{
		name: "@sb1/ffe-collapse-react",
		version: "1.1.6",
		"private": false,
		location: "/packages/ffe-collapse-react"
	},
	{
		name: "@sb1/ffe-context-message-react",
		version: "5.2.3",
		"private": false,
		location: "/packages/ffe-context-message-react"
	},
	{
		name: "@sb1/ffe-context-message",
		version: "4.0.22",
		"private": false,
		location: "/packages/ffe-context-message"
	},
	{
		name: "@sb1/ffe-core-react",
		version: "4.2.5",
		"private": false,
		location: "/packages/ffe-core-react"
	},
	{
		name: "@sb1/ffe-core",
		version: "18.2.0",
		"private": false,
		location: "/packages/ffe-core"
	},
	{
		name: "@sb1/ffe-datepicker-react",
		version: "5.0.14",
		"private": false,
		location: "/packages/ffe-datepicker-react"
	},
	{
		name: "@sb1/ffe-datepicker",
		version: "8.0.9",
		"private": false,
		location: "/packages/ffe-datepicker"
	},
	{
		name: "@sb1/ffe-decorators-react",
		version: "3.0.3",
		"private": false,
		location: "/packages/ffe-decorators-react"
	},
	{
		name: "@sb1/ffe-details-list-react",
		version: "3.0.32",
		"private": false,
		location: "/packages/ffe-details-list-react"
	},
	{
		name: "@sb1/ffe-details-list",
		version: "9.1.20",
		"private": false,
		location: "/packages/ffe-details-list"
	},
	{
		name: "@sb1/ffe-dropdown-react",
		version: "5.1.5",
		"private": false,
		location: "/packages/ffe-dropdown-react"
	},
	{
		name: "@sb1/ffe-file-upload-react",
		version: "5.0.4",
		"private": false,
		location: "/packages/ffe-file-upload-react"
	},
	{
		name: "@sb1/ffe-file-upload",
		version: "4.0.9",
		"private": false,
		location: "/packages/ffe-file-upload"
	},
	{
		name: "@sb1/ffe-form-react",
		version: "7.2.10",
		"private": false,
		location: "/packages/ffe-form-react"
	},
	{
		name: "@sb1/ffe-form",
		version: "16.1.0",
		"private": false,
		location: "/packages/ffe-form"
	},
	{
		name: "@sb1/ffe-formatters",
		version: "4.0.0",
		"private": false,
		location: "/packages/ffe-formatters"
	},
	{
		name: "@sb1/ffe-grid-react",
		version: "10.1.5",
		"private": false,
		location: "/packages/ffe-grid-react"
	},
	{
		name: "@sb1/ffe-grid",
		version: "11.0.21",
		"private": false,
		location: "/packages/ffe-grid"
	},
	{
		name: "@sb1/ffe-header",
		version: "15.1.0",
		"private": false,
		location: "/packages/ffe-header"
	},
	{
		name: "@sb1/ffe-icons-react",
		version: "7.2.18",
		"private": false,
		location: "/packages/ffe-icons-react"
	},
	{
		name: "@sb1/ffe-icons",
		version: "12.15.2",
		"private": false,
		location: "/packages/ffe-icons"
	},
	{
		name: "@sb1/ffe-layout-legacy",
		version: "1.0.5",
		"private": false,
		location: "/packages/ffe-layout-legacy"
	},
	{
		name: "@sb1/ffe-lists-react",
		version: "5.0.3",
		"private": false,
		location: "/packages/ffe-lists-react"
	},
	{
		name: "@sb1/ffe-lists",
		version: "9.0.7",
		"private": false,
		location: "/packages/ffe-lists"
	},
	{
		name: "@sb1/ffe-message-box-react",
		version: "6.1.6",
		"private": false,
		location: "/packages/ffe-message-box-react"
	},
	{
		name: "@sb1/ffe-message-box",
		version: "8.1.0",
		"private": false,
		location: "/packages/ffe-message-box"
	},
	{
		name: "@sb1/ffe-radio-button-react",
		version: "5.0.31",
		"private": false,
		location: "/packages/ffe-radio-button-react"
	},
	{
		name: "@sb1/ffe-sb1-logos",
		version: "1.1.3",
		"private": false,
		location: "/packages/ffe-sb1-logos"
	},
	{
		name: "@sb1/ffe-searchable-dropdown-react",
		version: "11.2.0",
		"private": false,
		location: "/packages/ffe-searchable-dropdown-react"
	},
	{
		name: "@sb1/ffe-spinner-react",
		version: "5.0.3",
		"private": false,
		location: "/packages/ffe-spinner-react"
	},
	{
		name: "@sb1/ffe-spinner",
		version: "3.1.20",
		"private": false,
		location: "/packages/ffe-spinner"
	},
	{
		name: "@sb1/ffe-system-message-react",
		version: "6.2.7",
		"private": false,
		location: "/packages/ffe-system-message-react"
	},
	{
		name: "@sb1/ffe-system-message",
		version: "5.0.9",
		"private": false,
		location: "/packages/ffe-system-message"
	},
	{
		name: "@sb1/ffe-tables-react",
		version: "6.0.26",
		"private": false,
		location: "/packages/ffe-tables-react"
	},
	{
		name: "@sb1/ffe-tables",
		version: "11.0.9",
		"private": false,
		location: "/packages/ffe-tables"
	},
	{
		name: "@sb1/ffe-tabs-react",
		version: "5.0.4",
		"private": false,
		location: "/packages/ffe-tabs-react"
	},
	{
		name: "@sb1/ffe-tabs",
		version: "9.1.0",
		"private": false,
		location: "/packages/ffe-tabs"
	},
	{
		name: "@sb1/ffe-webfonts",
		version: "3.0.0",
		"private": false,
		location: "/packages/ffe-webfonts"
	}
];

var reactdoc = {
	"ffe-accordion-react/src/Accordion.js": {
	description: "",
	displayName: "Accordion",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "Accordion items"
		},
		headingLevel: {
			type: {
				name: "enum",
				value: [
					{
						value: "1",
						computed: false
					},
					{
						value: "2",
						computed: false
					},
					{
						value: "3",
						computed: false
					},
					{
						value: "4",
						computed: false
					},
					{
						value: "5",
						computed: false
					},
					{
						value: "6",
						computed: false
					}
				]
			},
			required: true,
			description: "The level of headings in the AccordionItems"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Class assigned the container"
		}
	}
},
	"ffe-accordion-react/src/AccordionItem.js": {
	description: "",
	methods: [
	]
},
	"ffe-account-selector-react/src/components/base-selector/BaseSelector.js": {
	description: "",
	displayName: "BaseSelector",
	methods: [
		{
			name: "_onSuggestionListChange",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "getSuggestionListHeight",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setFocus",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "getInputHeight",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onInputChange",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "val",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onFocus",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onBlur",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onClick",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onInputReset",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "showOrHideSuggestions",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "show",
					type: null
				},
				{
					name: "cb",
					type: null
				}
			],
			returns: null
		},
		{
			name: "setNextHighlighted",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setPreviousHighlighted",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setFirstHighlighted",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setLastHighlighted",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onInputKeyDown",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		suggestions: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		suggestionFilter: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onSelect: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		value: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "''",
				computed: false
			}
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		},
		shouldHideSuggestionsOnSelect: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		shouldSelectHighlightedOnTab: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		shouldHideSuggestionsOnBlur: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		shouldHideSuggestionsOnReset: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		shouldShowSuggestionsOnFocus: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		},
		onSuggestionSelect: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onChange: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		onBlur: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		onClick: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		onReset: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		onFocus: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		onSuggestionListChange: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		placeholder: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "''",
				computed: false
			}
		},
		ariaInvalid: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		suggestionsHeightMax: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		id: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		name: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		readOnly: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		highCapacity: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/components/account-selector-multi/AccountSelectorMulti.js": {
	description: "",
	displayName: "AccountSelectorMulti",
	methods: [
		{
			name: "filterSuggestions",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "value",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onSuggestionSelect",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "suggestion",
					type: null
				}
			],
			returns: null
		},
		{
			name: "renderSuggestion",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "account",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onBlur",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onDone",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "renderSuggestionDetails",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "listHeight",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onKeyDown",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		accounts: {
			type: {
				name: "arrayOf",
				value: {
					name: "custom",
					raw: "Account"
				}
			},
			required: false,
			description: "Array of objects:\n {\n     accountNumber: string.isRequired,\n     balance: number,\n     currencyCode: string.\n     name: string.isRequired,\n }"
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: "'nb', 'nn', or 'en'"
		},
		noMatches: {
			type: {
				name: "string"
			},
			required: false,
			description: "Overrides default string for all locales."
		},
		onAccountSelected: {
			type: {
				name: "func"
			},
			required: true,
			description: "Called when an account is clicked"
		},
		onBlur: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onSelectAll: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		selectedAccounts: {
			type: {
				name: "arrayOf",
				value: {
					name: "custom",
					raw: "Account"
				}
			},
			required: false,
			description: "Array of objects:\n {\n     accountNumber: string.isRequired,\n     balance: number,\n     currencyCode: string.\n     name: string.isRequired,\n }",
			defaultValue: {
				value: "[]",
				computed: false
			}
		},
		showSelectAllOption: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		value: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		highCapacity: {
			type: {
				name: "bool"
			},
			required: false,
			description: "For situations where AccountSelector might be populated with hundreds of accounts\nuses react-window for performance optimization, default false"
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/account/AccountSuggestion.js": {
	description: "",
	displayName: "AccountSuggestionItem",
	methods: [
	],
	props: {
		item: {
			type: {
				name: "custom",
				raw: "Account.isRequired"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		},
		isHighlighted: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		dropdownAttributes: {
			type: {
				name: "arrayOf",
				value: {
					name: "string"
				}
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/account/AccountSuggestionMulti.js": {
	description: "",
	displayName: "AccountSuggestionMulti",
	methods: [
	],
	props: {
		account: {
			type: {
				name: "custom",
				raw: "Account.isRequired"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		},
		selected: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/account/AccountNoMatch.js": {
	description: "",
	displayName: "AccountNoMatch",
	methods: [
	],
	props: {
		value: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/account/AccountDetails.js": {
	description: "",
	displayName: "AccountDetails",
	methods: [
	],
	props: {
		account: {
			type: {
				name: "custom",
				raw: "Account.isRequired"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		},
		showBalance: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion/SuggestionListStatusBar.js": {
	description: "",
	displayName: "StatusBar",
	methods: [
	],
	props: {
		onDone: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		renderSelectionStatus: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		labelDoneButton: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		style: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion/SuggestionList.js": {
	description: "",
	displayName: "SuggestionList",
	methods: [
	],
	props: {
		suggestions: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		renderSuggestion: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		renderNoMatches: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion/SuggestionListContainer.js": {
	description: "",
	displayName: "SuggestionListContainer",
	methods: [
		{
			name: "refHighlightedSuggestion",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "suggestionEl",
					type: null
				}
			],
			returns: null
		},
		{
			name: "_setScrollPos",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "pos",
					type: null
				}
			],
			returns: null
		},
		{
			name: "setScrollPosStart",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosEnd",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosNext",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosPrevious",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		}
	],
	props: {
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		heightMax: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		autoHeight: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion/SuggestionItem.js": {
	description: "",
	displayName: "SuggestionItem",
	methods: [
	],
	props: {
		item: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		isHighlighted: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		render: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onSelect: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		refHighlightedSuggestion: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion-high-capacity/SuggestionListStatusBar.js": {
	description: "",
	displayName: "StatusBar",
	methods: [
	],
	props: {
		onDone: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		renderSelectionStatus: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		labelDoneButton: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		style: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion-high-capacity/SuggestionList.js": {
	description: "",
	displayName: "SuggestionList",
	methods: [
	],
	props: {
		suggestions: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		renderSuggestion: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		renderNoMatches: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		refList: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		},
		height: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		itemSize: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "55",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion-high-capacity/SuggestionListContainer.js": {
	description: "",
	displayName: "SuggestionListContainer",
	methods: [
		{
			name: "refHighlightedSuggestion",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "suggestionEl",
					type: null
				}
			],
			returns: null
		},
		{
			name: "_setScrollPos",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "pos",
					type: null
				}
			],
			returns: null
		},
		{
			name: "setScrollPosStart",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosEnd",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosNext",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosPrevious",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "handleScroll",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "{ target }",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		heightMax: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		autoHeight: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion-high-capacity/SuggestionItem.js": {
	description: "",
	displayName: "SuggestionItem",
	methods: [
	],
	props: {
		item: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		isHighlighted: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		render: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onSelect: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		refHighlightedSuggestion: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		style: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/input-field/InputField.js": {
	description: "",
	displayName: "InputField",
	methods: [
	],
	props: {
		onChange: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onKeyDown: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		value: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		onReset: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		isSuggestionsShowing: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		readOnly: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		placeholder: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		onBlur: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		onFocus: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		onClick: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		ariaInvalid: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		inputFieldRef: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		suggestionListId: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		name: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-buttons-react/src/ShortcutButton.js": {
	description: "",
	displayName: "ShortcutButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		}
	}
},
	"ffe-buttons-react/src/TertiaryButton.js": {
	description: "",
	displayName: "TertiaryButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-buttons-react/src/ButtonGroup.js": {
	description: "",
	displayName: "ButtonGroup",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class name applied in addition to the FFE classes"
		},
		thin: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Applies the thin modifier to remove margins"
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Applies the inline modifier to make all child buttons inline"
		}
	}
},
	"ffe-buttons-react/src/InlineExpandButton.js": {
	description: "",
	displayName: "InlineExpandButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "Text that should reflect the isExpanded state."
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isExpanded: {
			type: {
				name: "bool"
			},
			required: true,
			description: "When true it will indicate the button is in its open state"
		},
		onClick: {
			type: {
				name: "func"
			},
			required: true,
			description: "Listen for clicks to toggle the isExpanded state."
		}
	}
},
	"ffe-buttons-react/src/InlineBaseButton.js": {
	description: "Internal component\n@ignore",
	displayName: "InlineBaseButton",
	methods: [
	],
	props: {
		buttonType: {
			type: {
				name: "enum",
				value: [
					{
						value: "'tertiary'",
						computed: false
					},
					{
						value: "'back'",
						computed: false
					},
					{
						value: "'expand'",
						computed: false
					}
				]
			},
			required: false,
			description: "Enum of supported prop types. Used internally only.\n@ignore"
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "string"
					},
					{
						name: "func"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`",
			defaultValue: {
				value: "'button'",
				computed: false
			}
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-buttons-react/src/TaskButton.js": {
	description: "",
	displayName: "TaskButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		icon: {
			type: {
				name: "node"
			},
			required: true,
			description: "Task icon, show to the left of the label"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		}
	}
},
	"ffe-buttons-react/src/SecondaryButton.js": {
	description: "",
	displayName: "SecondaryButton",
	methods: [
	],
	props: {
		ariaLoadingMessage: {
			type: {
				name: "string"
			},
			required: false,
			description: "Aria label for loading indicator"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Shows a loader if true"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-buttons-react/src/ActionButton.js": {
	description: "",
	displayName: "ActionButton",
	methods: [
	],
	props: {
		ariaLoadingMessage: {
			type: {
				name: "string"
			},
			required: false,
			description: "Aria label for loading indicator"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		ghost: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Applies the ghost modifier if true.",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Shows a loader if true"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-buttons-react/src/BaseButton.js": {
	description: "Internal component",
	displayName: "BaseButton",
	methods: [
	],
	props: {
		ariaLoadingMessage: {
			type: {
				name: "string"
			},
			required: false,
			description: "Aria label for loading indicator",
			defaultValue: {
				value: "'Vennligst vent'",
				computed: false
			}
		},
		buttonType: {
			type: {
				name: "enum",
				value: [
					{
						value: "'action'",
						computed: false
					},
					{
						value: "'primary'",
						computed: false
					},
					{
						value: "'secondary'",
						computed: false
					},
					{
						value: "'shortcut'",
						computed: false
					},
					{
						value: "'task'",
						computed: false
					}
				]
			},
			required: false,
			description: "Enum of supported prop types. Used internally only.\n@ignore"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`",
			defaultValue: {
				value: "'button'",
				computed: false
			}
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Shows a loader if true"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-buttons-react/src/PrimaryButton.js": {
	description: "",
	displayName: "PrimaryButton",
	methods: [
	],
	props: {
		ariaLoadingMessage: {
			type: {
				name: "string"
			},
			required: false,
			description: "Aria label for loading indicator"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Shows a loader if true"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-buttons-react/src/BackButton.js": {
	description: "",
	displayName: "BackButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-buttons-react/src/ExpandButton.js": {
	description: "",
	displayName: "ExpandButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`",
			defaultValue: {
				value: "'button'",
				computed: false
			}
		},
		closeLabel: {
			type: {
				name: "string"
			},
			required: false,
			description: "An accessible label for the close-button, only shown in the \"isExpanded\" state",
			defaultValue: {
				value: "'Lukk'",
				computed: false
			}
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isExpanded: {
			type: {
				name: "bool"
			},
			required: true,
			description: "When true the component will render a circle with an X indicating whatever is controlled is in an expanded state."
		},
		onClick: {
			type: {
				name: "func"
			},
			required: true,
			description: "Use to listen for clicks and toggle the `isExpanded` property together with whatever it is you're expanding."
		}
	}
},
	"ffe-cards-react/src/IconCard/IconCard.js": {
	description: "",
	displayName: "IconCard",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		icon: {
			type: {
				name: "node"
			},
			required: true,
			description: "A rendered icon"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Smaller icon and less space"
		},
		greyCharcoal: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Icon and text will all be ffe-grey-charcoal"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The element to render the card as"
		},
		children: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: "Function that's passed available sub-components as arguments, or regular children"
		}
	}
},
	"ffe-cards-react/src/components/ComponentBase.js": {
	description: "",
	displayName: "ComponentBase",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'p'",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-cards-react/src/components/Text.js": {
	description: "",
	displayName: "Text",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-cards-react/src/components/Subtext.js": {
	description: "",
	displayName: "Subtext",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-cards-react/src/components/Title.js": {
	description: "",
	displayName: "Title",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		overflowEllipsis: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable wrapping and hide overflow with ellipsis",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-cards-react/src/components/CardName.js": {
	description: "",
	displayName: "CardName",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-cards-react/src/LinkCard.js": {
	description: "@deprecated This card comes with an outdated design. Use one of the new cards instead.",
	displayName: "LinkCard",
	methods: [
	],
	props: {
		center: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Center the card's content horizontally"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		details: {
			type: {
				name: "node"
			},
			required: false,
			description: "Bottom text - should only be used with `size=\"large\"`"
		},
		elementType: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The element to render the card as. Typically `'a'`, `Link` or `'button'`",
			defaultValue: {
				value: "'a'",
				computed: false
			}
		},
		heading: {
			type: {
				name: "string"
			},
			required: false,
			description: "Text shown at the top"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "A rendered icon - will be sized appropriately"
		},
		number: {
			type: {
				name: "custom",
				raw: "numberType"
			},
			required: false,
			description: "An enumerating number, typically to show which \"step\" a card represents. Should be used only when `plain` is true"
		},
		size: {
			type: {
				name: "enum",
				value: [
					{
						value: "'medium'",
						computed: false
					},
					{
						value: "'large'",
						computed: false
					}
				]
			},
			required: false,
			description: "Optional size modifiers"
		},
		plain: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Make less \"clickable\" - works well with specifying `number` prop"
		},
		status: {
			type: {
				name: "string"
			},
			required: false,
			description: "Status text displayed at the top of the card with a 1 second delay"
		},
		subHeading: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-cards-react/src/TextCard/TextCard.js": {
	description: "",
	displayName: "TextCard",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		leftAlign: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Left-aligned text on the card"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The element to render the card as"
		},
		children: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: "Function that's passed available sub-components as arguments, or regular children"
		}
	}
},
	"ffe-cards-react/src/ProductCard.js": {
	description: "@deprecated This card comes with an outdated design. Use one of the new cards instead.",
	displayName: "ProductCard",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		details: {
			type: {
				name: "node"
			},
			required: false,
			description: "Bottom text - should only be used with `size=\"large\"`"
		},
		elementType: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The element to render the card as.",
			defaultValue: {
				value: "'div'",
				computed: false
			}
		},
		heading: {
			type: {
				name: "string"
			},
			required: false,
			description: "Text shown at the top"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "A rendered icon - will be sized appropriately"
		},
		status: {
			type: {
				name: "string"
			},
			required: false,
			description: "Status text displayed at the top of the card with a 1 second delay"
		}
	}
},
	"ffe-cards-react/src/ImageCard/ImageCard.js": {
	description: "",
	displayName: "ImageCard",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		image: {
			type: {
				name: "node"
			},
			required: true,
			description: "A rendered image"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The element to render the card as"
		},
		children: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: "Function that's passed available sub-components as arguments, or regular children"
		}
	}
},
	"ffe-cards-react/src/CardBase.js": {
	description: "",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The element to render the card as",
			defaultValue: {
				value: "'div'",
				computed: false
			}
		}
	}
},
	"ffe-chart-donut-react/src/ChartDonut.js": {
	description: "",
	displayName: "ChartDonut",
	methods: [
	],
	props: {
		firstLabel: {
			type: {
				name: "string"
			},
			required: true,
			description: "Short text labeling left value, like \"empty\", \"said yes\" etc"
		},
		lastLabel: {
			type: {
				name: "string"
			},
			required: true,
			description: "Short text labeling right value, like \"full\", \"said no\" etc"
		},
		name: {
			type: {
				name: "string"
			},
			required: true,
			description: "Short text labeling the graph in total, like \"percentage\", \"voted this year\" etc"
		},
		percentage: {
			type: {
				name: "number"
			},
			required: true,
			description: "The percentage for the right-most value"
		}
	}
},
	"ffe-collapse-react/src/Collapse.js": {
	description: "",
	displayName: "Collapse",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		style: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		},
		isOpen: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		onRest: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-context-message-react/src/ContextInfoMessage.js": {
	description: "",
	displayName: "ContextInfoMessage",
	methods: [
	]
},
	"ffe-context-message-react/src/ContextTipMessage.js": {
	description: "",
	displayName: "ContextTipMessage",
	methods: [
	]
},
	"ffe-context-message-react/src/ContextSuccessMessage.js": {
	description: "",
	displayName: "ContextSuccessMessage",
	methods: [
	]
},
	"ffe-context-message-react/src/ContextErrorMessage.js": {
	description: "",
	displayName: "ContextErrorMessage",
	methods: [
	],
	props: {
		animationLengthMs: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The content shown in the context box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Classes are added in addition to the relevant context message classes"
		},
		compact: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Renders a more compact version of the context message",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		contentElementId: {
			type: {
				name: "string"
			},
			required: false,
			description: "ID for the children container"
		},
		header: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		headerElementId: {
			type: {
				name: "string"
			},
			required: false,
			description: "ID for the header container"
		},
		icon: {
			type: {
				name: "element"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "enum",
				computed: true,
				value: "acceptedLocales"
			},
			required: false,
			description: "Decides the language of the aria-label for the close icon",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		messageType: {
			type: {
				name: "enum",
				value: [
					{
						value: "'info'",
						computed: false
					},
					{
						value: "'tip'",
						computed: false
					},
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'error'",
						computed: false
					}
				]
			},
			required: false,
			description: "Provided by the wrapper component"
		},
		onClose: {
			type: {
				name: "func"
			},
			required: false,
			description: "Callback for when the context message has been closed (after the animation)",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		showCloseButton: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		style: {
			type: {
				name: "object"
			},
			required: false,
			description: "Styles applied to the outermost element. `height` will be overridden",
			defaultValue: {
				value: "{}",
				computed: false
			}
		},
		alert: {
			type: {
				name: "bool"
			},
			required: false,
			description: "When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true.",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-context-message-react/src/ContextMessage.js": {
	description: "Base component for all four types of context messages.\n\n*Should never be used directly!*\nPlease use one of the four versions exported from this package.",
	displayName: "ContextMessage",
	methods: [
	],
	props: {
		animationLengthMs: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The content shown in the context box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Classes are added in addition to the relevant context message classes"
		},
		compact: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Renders a more compact version of the context message",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		contentElementId: {
			type: {
				name: "string"
			},
			required: false,
			description: "ID for the children container"
		},
		headerText: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		headerElementId: {
			type: {
				name: "string"
			},
			required: false,
			description: "ID for the header container"
		},
		headerElement: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'div'",
				computed: false
			}
		},
		icon: {
			type: {
				name: "element"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "enum",
				computed: true,
				value: "acceptedLocales"
			},
			required: false,
			description: "Decides the language of the aria-label for the close icon",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		messageType: {
			type: {
				name: "enum",
				value: [
					{
						value: "'info'",
						computed: false
					},
					{
						value: "'tip'",
						computed: false
					},
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'error'",
						computed: false
					}
				]
			},
			required: false,
			description: "Provided by the wrapper component"
		},
		onClose: {
			type: {
				name: "func"
			},
			required: false,
			description: "Callback for when the context message has been closed (after the animation)",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		showCloseButton: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		style: {
			type: {
				name: "object"
			},
			required: false,
			description: "Styles applied to the outermost element. `height` will be overridden",
			defaultValue: {
				value: "{}",
				computed: false
			}
		}
	}
},
	"ffe-core-react/src/typography/Paragraph.js": {
	description: "",
	displayName: "Paragraph",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		lead: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Makes this paragraph a lead paragraph, typically used directly below a heading."
		},
		subLead: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Makes this paragraph a sub-lead paragraph, typically used directly below a lead paragraph."
		},
		textCenter: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Use if text alignment should override that of its container."
		},
		textLeft: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Use if text alignment should override that of its container."
		}
	}
},
	"ffe-core-react/src/typography/MicroText.js": {
	description: "",
	displayName: "MicroText",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-core-react/src/typography/PreformattedText.js": {
	description: "",
	displayName: "PreformattedText",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-core-react/src/typography/EmphasizedText.js": {
	description: "",
	displayName: "EmphasizedText",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-core-react/src/typography/LinkText.js": {
	description: "",
	displayName: "LinkText",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like a `react-router` `<Link />`",
			defaultValue: {
				value: "'a'",
				computed: false
			}
		},
		underline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-core-react/src/typography/SmallText.js": {
	description: "",
	displayName: "SmallText",
	methods: [
	],
	props: {
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'span'",
				computed: false
			}
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-core-react/src/typography/StrongText.js": {
	description: "",
	displayName: "StrongText",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-core-react/src/typography/DividerLine.js": {
	description: "",
	displayName: "DividerLine",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/button/Button.js": {
	description: "",
	displayName: "Button",
	methods: [
	],
	props: {
		value: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		language: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		onClick: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		buttonRef: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/input/Input.js": {
	description: "",
	displayName: "Input",
	methods: [
		{
			name: "focus",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "inputClassNames",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "extraClassNames",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		"aria-invalid": {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		ariaInvalid: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: ""
		},
		inputProps: {
			type: {
				name: "shape",
				value: {
					className: {
						name: "string",
						required: false
					}
				}
			},
			required: false,
			description: ""
		},
		onBlur: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		onChange: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onKeyDown: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		value: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		fullWidth: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		language: {
			type: {
				name: "enum",
				value: [
					{
						value: "'nb'",
						computed: false
					},
					{
						value: "'nn'",
						computed: false
					},
					{
						value: "'en'",
						computed: false
					}
				]
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/calendar/Calendar.js": {
	description: "",
	displayName: "Calendar",
	methods: [
		{
			name: "keyDown",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		},
		{
			name: "mouseClick",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "date",
					type: null
				}
			],
			returns: null
		},
		{
			name: "focusHandler",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "wrapperBlurHandler",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "nextMonth",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "previousMonth",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "renderDate",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "date",
					type: null
				},
				{
					name: "index",
					type: null
				}
			],
			returns: null
		},
		{
			name: "renderWeek",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "week",
					type: null
				}
			],
			returns: null
		},
		{
			name: "renderDay",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "day",
					type: null
				},
				{
					name: "index",
					type: null
				}
			],
			returns: null
		},
		{
			name: "focusTrap",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		calendarClassName: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		escKeyHandler: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		language: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		maxDate: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		minDate: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		onBlurHandler: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		onDatePicked: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		selectedDate: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/calendar/ClickableDate.js": {
	description: "",
	displayName: "ClickableDate",
	methods: [
		{
			name: "focusIfNeeded",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "dateClassName",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "tabIndex",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		}
	],
	props: {
		date: {
			type: {
				name: "shape",
				value: {
					date: {
						name: "union",
						value: [
							{
								name: "func"
							},
							{
								name: "number"
							}
						],
						required: false
					},
					isEnabled: {
						name: "bool",
						required: false
					},
					isFocus: {
						name: "bool",
						required: false
					},
					isSelected: {
						name: "bool",
						required: false
					},
					isToday: {
						name: "bool",
						required: false
					}
				}
			},
			required: true,
			description: ""
		},
		month: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		year: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		headers: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		onClick: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		language: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		dateButtonRef: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		},
		isFocusingHeader: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/calendar/Header.js": {
	description: "",
	displayName: "Header",
	methods: [
	],
	props: {
		datepickerId: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		month: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		nextMonthHandler: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		nextMonthLabel: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		previousMonthHandler: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		previousMonthLabel: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		year: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		prevMonthButtonElement: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		nextMonthButtonElement: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/calendar/NonClickableDate.js": {
	description: "",
	displayName: "NonClickableDate",
	methods: [
	],
	props: {
		date: {
			type: {
				name: "shape",
				value: {
					timestamp: {
						name: "number",
						required: true
					}
				}
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/datepicker/Datepicker.js": {
	description: "",
	displayName: "Datepicker",
	methods: [
		{
			name: "onError",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "type",
					type: null
				}
			],
			returns: null
		},
		{
			name: "validateDateIntervals",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onInputBlur",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onInputKeydown",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "escKeyHandler",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "globalClickHandler",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "calendarButtonClickHandler",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "addFlagOnClickEventClickHandler",
			docblock: "Adds a flag on the click event so that the globalClickHandler()\ncan determine whether or not this event originated from this\ncomponent",
			modifiers: [
			],
			params: [
				{
					name: "evt"
				}
			],
			returns: null,
			description: "Adds a flag on the click event so that the globalClickHandler()\ncan determine whether or not this event originated from this\ncomponent"
		},
		{
			name: "divBlurHandler",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "datePickedHandler",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "date",
					type: null
				}
			],
			returns: null
		},
		{
			name: "openCalendar",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "closeCalendar",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "closeCalendarSetInputFocus",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "addGlobalEventListeners",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "removeGlobalEventListeners",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "ariaInvalid",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		}
	],
	props: {
		"aria-invalid": {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		ariaInvalid: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: ""
		},
		calendarAbove: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		hideErrors: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		onValidationComplete: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		inputProps: {
			type: {
				name: "shape",
				value: {
					className: {
						name: "string",
						required: false
					},
					id: {
						name: "string",
						required: false
					}
				}
			},
			required: false,
			description: ""
		},
		label: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		language: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		maxDate: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		minDate: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		onChange: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onError: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		value: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		keepDisplayStateOnError: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		fullWidth: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-details-list-react/src/DetailContent.js": {
	description: "",
	displayName: "DetailContent",
	methods: [
	],
	props: {
		childCount: {
			type: {
				name: "number"
			},
			required: false,
			description: "Internal prop used for knowing the total amount of columns, provided by `Detail`\n@ignore"
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The contents of the column"
		},
		index: {
			type: {
				name: "number"
			},
			required: false,
			description: "Internal prop used for knowing which column is being rendered, provided by `Detail`\n@ignore"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any CSS classes that should be included on the rendered content"
		},
		cta: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Indicate if this should be rendered as a call to action and moved to the end of the row\n@ignore"
		}
	}
},
	"ffe-details-list-react/src/Detail.js": {
	description: "",
	displayName: "Detail",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "A set of `DetailsContent` components to render for this row"
		},
		label: {
			type: {
				name: "string"
			},
			required: true,
			description: "A label for the data"
		}
	}
},
	"ffe-details-list-react/src/DetailList.js": {
	description: "",
	displayName: "DetailList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "A set of `Detail` components where each will be rendered as a row item"
		}
	}
},
	"ffe-dropdown-react/src/Dropdown.js": {
	description: "",
	displayName: "Dropdown",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the select element"
		}
	}
},
	"ffe-file-upload-react/src/FileItem.js": {
	description: "",
	displayName: "FileItem",
	methods: [
	],
	props: {
		file: {
			type: {
				name: "shape",
				value: {
					name: {
						name: "custom",
						raw: "stringType.isRequired",
						required: true
					},
					document: {
						name: "object",
						required: false
					},
					error: {
						name: "custom",
						raw: "stringType",
						required: false
					}
				}
			},
			required: true,
			description: "Shape of the file type, name is required, error and document.content is optional"
		},
		onFileDeleted: {
			type: {
				name: "func"
			},
			required: true,
			description: "Called when the user clicks the delete button for a given file. Is called with the name of the file in question."
		},
		cancelText: {
			type: {
				name: "custom",
				raw: "stringType"
			},
			required: false,
			description: "Label for the cancel button"
		},
		deleteText: {
			type: {
				name: "custom",
				raw: "stringType"
			},
			required: false,
			description: "Label for the delete button"
		}
	}
},
	"ffe-file-upload-react/src/FileUpload.js": {
	description: "",
	displayName: "FileUpload",
	methods: [
		{
			name: "setFileInputElement",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "element",
					type: null
				}
			],
			returns: null
		},
		{
			name: "triggerUploadFileNativeHandler",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onFilesSelected",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onFilesDropped",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onFileDeleted",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		id: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "ID for the input field. The ID is used as a base for the label ID as well."
		},
		label: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "Label for the button to trigger native upload handling."
		},
		files: {
			type: {
				name: "object"
			},
			required: true,
			description: "A map of files, indexed by file name (check file-shape on FileItem.js propTypes), that the user has uploaded.\nMust be maintained outside of `FileUpload`. It is up to the implementation to deny or accept file types, sizes, etc,\nand it is important that duplicates are not allowed."
		},
		onFilesSelected: {
			type: {
				name: "func"
			},
			required: true,
			description: "Will be called with `FileList`-object containing the `File`-objects the user selected.\nSee MDN for documentation on\n[FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) and\n[File](https://developer.mozilla.org/en-US/docs/Web/API/File)."
		},
		onFilesDropped: {
			type: {
				name: "func"
			},
			required: true,
			description: "Will be called when objects are dropped over the upload-section."
		},
		onFileDeleted: {
			type: {
				name: "func"
			},
			required: true,
			description: "Called when the user clicks the delete button for a given file. Is called with the `File`\nobject of the file in question."
		},
		multiple: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Whether or not uploading multiple files at once via the native file handler is allowed"
		},
		title: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "Title module"
		},
		infoText: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "Text on the info-section"
		},
		infoSubText: {
			type: {
				name: "custom",
				raw: "stringType"
			},
			required: false,
			description: "Subtext on the info-section"
		},
		cancelText: {
			type: {
				name: "custom",
				raw: "stringType"
			},
			required: false,
			description: "Label for the cancel button"
		},
		deleteText: {
			type: {
				name: "custom",
				raw: "stringType"
			},
			required: false,
			description: "Label for the delete button"
		},
		uploadTitle: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "Title on the upload-section"
		},
		uploadMicroText: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "MicroText on the upload-section"
		},
		uploadSubText: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "SubText on the upload-section"
		}
	}
},
	"ffe-form-react/src/SuccessFieldMessage.js": {
	description: "",
	displayName: "SuccessFieldMessage",
	methods: [
	]
},
	"ffe-form-react/src/RadioButtonInputGroup.js": {
	description: "",
	displayName: "RadioButtonInputGroup",
	methods: [
	],
	props: {
		"aria-invalid": {
			type: {
				name: "enum",
				value: [
					{
						value: "'true'",
						computed: false
					},
					{
						value: "'false'",
						computed: false
					}
				]
			},
			required: false,
			description: "Indicates whether the radio buttons inside this radio button group is\ninvalid or not. Propagated to all children."
		},
		children: {
			type: {
				name: "func"
			},
			required: true,
			description: "Function receiving props relevant to each radio button as an object\nargument. Expected to return a set of radio buttons, which should get\nthese properties applied to them."
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to the fieldset"
		},
		description: {
			type: {
				name: "string"
			},
			required: false,
			description: "To just render a static, always visible tooltip, use this."
		},
		extraMargin: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Reserve space for showing `fieldMessage`s so content below don't move\n vertically if an errormessage shows up. Note that this will only reserve\n space for one line of content, so keep messages short.",
			defaultValue: {
				value: "true",
				computed: false
			}
		},
		fieldMessage: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: "String or ErrorFieldMessage component with message"
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Indicates whether the radio buttons inside this radio button group is\nrendered inline or as a block."
		},
		label: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: "The text describing the radio button set. Note that if you don't use this\nprop but provide your own label you should make sure your solution passes\nacessibility validation using a tool such as aXe DevTools."
		},
		name: {
			type: {
				name: "string"
			},
			required: false,
			description: "The name of the radio button"
		},
		onChange: {
			type: {
				name: "func"
			},
			required: false,
			description: "Change handler, receives value of selected radio button"
		},
		selectedValue: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: false,
			description: "The currently selected value"
		},
		tooltip: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: "String or Tooltip component with further detail about the radio button\nset"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-form-react/src/RadioButton.js": {
	description: "",
	displayName: "RadioButton",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to the label"
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Indicates whether the radio button is rendered inline or as a block"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-form-react/src/RadioSwitch.js": {
	description: "",
	displayName: "RadioSwitch",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to both radio buttons"
		},
		leftLabel: {
			type: {
				name: "string"
			},
			required: true,
			description: "The label of the choice to the left"
		},
		leftValue: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: true,
			description: "The value of the choice to the left"
		},
		leftInnerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the input element"
		},
		rightLabel: {
			type: {
				name: "string"
			},
			required: true,
			description: "The label of the choice to the right"
		},
		rightValue: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: true,
			description: "The value of the choice to the right"
		},
		rightInnerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the input element"
		},
		selectedValue: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: false,
			description: "The selected value of the radio button set"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		"aria-invalid": {
			type: {
				name: "enum",
				value: [
					{
						value: "'true'",
						computed: false
					},
					{
						value: "'false'",
						computed: false
					}
				]
			},
			required: false,
			description: "Indicates whether the radio buttons inside this radio button group is\ninvalid or not. Propagated to all children."
		}
	}
},
	"ffe-form-react/src/BaseFieldMessage.js": {
	description: "Internal factory component\n@ignore",
	displayName: "BaseFieldMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		element: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'div'",
				computed: false
			}
		},
		type: {
			type: {
				name: "enum",
				value: [
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'info'",
						computed: false
					},
					{
						value: "'error'",
						computed: false
					}
				]
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-form-react/src/ErrorFieldMessage.js": {
	description: "",
	displayName: "ErrorFieldMessage",
	methods: [
	]
},
	"ffe-form-react/src/Label.js": {
	description: "",
	displayName: "Label",
	methods: [
	],
	props: {
		block: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Labels default to `display: inline-block;` to have tooltips appear immediately to the right.\nSet this to `true` if you don't use tooltips and need the label to be `display: block;`."
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		htmlFor: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-form-react/src/RadioBlock.js": {
	description: "",
	displayName: "RadioBlock",
	methods: [
	],
	props: {
		checked: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Whether or not the radio block is selected"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content rendered when choice is selected"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to the outer div"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the input element"
		},
		label: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "string"
					}
				]
			},
			required: true,
			description: "The always visible label of the radio block"
		},
		labelClass: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to the label element"
		},
		name: {
			type: {
				name: "string"
			},
			required: true,
			description: "The name of the radio button set"
		},
		selectedValue: {
			type: {
				name: "string"
			},
			required: false,
			description: "The selected value of the radio button set"
		},
		showChildren: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Whether or not children are always visible"
		},
		value: {
			type: {
				name: "string"
			},
			required: true,
			description: "The value of the radio block"
		}
	}
},
	"ffe-form-react/src/InputGroup.js": {
	description: "",
	displayName: "InputGroup",
	methods: [
	],
	props: {
		inputId: {
			type: {
				name: "string"
			},
			required: false,
			description: "The id that will be used on the input child if you don't want a generated one"
		},
		labelId: {
			type: {
				name: "string"
			},
			required: false,
			description: "The id used on the label in this component. Could be necessary if your component needs a aria-labelledby."
		},
		children: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "node"
					}
				]
			},
			required: true,
			description: "Unless you only have one element in your `InputGroup` you will have to use the function-as-a-child pattern."
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		extraMargin: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Reserve space for showing `fieldMessage`s so content below don't move\n vertically if an errormessage shows up. Note that this will only reserve\n space for one line of content, so keep messages short.",
			defaultValue: {
				value: "true",
				computed: false
			}
		},
		fieldMessage: {
			type: {
				name: "union",
				value: [
					{
						name: "string"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: "Use the ErrorFieldMessage component if you need more flexibility in how the content is rendered."
		},
		description: {
			type: {
				name: "string"
			},
			required: false,
			description: "To just render a static, always visible tooltip, use this."
		},
		label: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: "Use the Label component if you need more flexibility in how the content is rendered."
		},
		onTooltipToggle: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		tooltip: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: "Use the Tooltip component if you need more flexibility in how the content is rendered."
		}
	}
},
	"ffe-form-react/src/TextArea.js": {
	description: "",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-form-react/src/Checkbox.js": {
	description: "",
	methods: [
	],
	props: {
		noMargins: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Removes vertical margins from the checkbox"
		},
		hiddenLabel: {
			type: {
				name: "bool"
			},
			required: false,
			description: "If you plan to render the checkbox without a visible label"
		},
		id: {
			type: {
				name: "string"
			},
			required: false,
			description: "Override the automatically generated ID"
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		},
		children: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "func"
					}
				]
			},
			required: false,
			description: "The label for the checkbox"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-form-react/src/Tooltip.js": {
	description: "",
	displayName: "Tooltip",
	methods: [
		{
			name: "onToggle",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		"aria-controls": {
			type: {
				name: "string"
			},
			required: false,
			description: "Provide the id of the controlled element *unless* you're sending in children"
		},
		"aria-label": {
			type: {
				name: "string"
			},
			required: false,
			description: "Descriptive text for the Tooltip expand icon",
			defaultValue: {
				value: "'Vis hjelpetekst'",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The children are rendered in the expanded tooltip."
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "The className is set on the root node of the expanded tooltip."
		},
		isOpen: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		onClick: {
			type: {
				name: "func"
			},
			required: false,
			description: "Optional listener for clicks on the tooltip button. Is passed the event object."
		},
		tabIndex: {
			type: {
				name: "number"
			},
			required: false,
			description: "Sets the tabIndex of the tooltip button."
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-form-react/src/BaseRadioButton.js": {
	description: "",
	displayName: "BaseRadioButton",
	methods: [
	],
	props: {
		"aria-invalid": {
			type: {
				name: "enum",
				value: [
					{
						value: "'true'",
						computed: false
					},
					{
						value: "'false'",
						computed: false
					}
				]
			},
			required: false,
			description: "Indicates whether the radio button is invalid or not"
		},
		checked: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Whether or not the radio button is selected"
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The label of the radio button"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to the label"
		},
		labelProps: {
			type: {
				name: "shape",
				value: {
				}
			},
			required: false,
			description: "Additional props passed to the label element",
			defaultValue: {
				value: "{}",
				computed: false
			}
		},
		name: {
			type: {
				name: "string"
			},
			required: true,
			description: "The name of the radio button"
		},
		selectedValue: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: false,
			description: "The selected value of the radio button set"
		},
		tooltip: {
			type: {
				name: "string"
			},
			required: false,
			description: "Tooltip providing further detail about the choice"
		},
		tooltipProps: {
			type: {
				name: "shape",
				value: {
				}
			},
			required: false,
			description: "Additional props passed to the Tooltip component",
			defaultValue: {
				value: "{}",
				computed: false
			}
		},
		value: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: true,
			description: "The value of the radio button"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the input element"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-form-react/src/Input.js": {
	description: "",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Input fields default to `display: block;`. Set this to `true` to apply the inline modifier."
		},
		textLike: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Apply the text-like modifier by setting this to `true`."
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-form-react/src/InfoFieldMessage.js": {
	description: "",
	displayName: "InfoFieldMessage",
	methods: [
	]
},
	"ffe-form-react/src/PhoneNumber.js": {
	description: "",
	displayName: "PhoneNumber",
	methods: [
	],
	props: {
		number: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		countryCode: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'47'",
				computed: false
			}
		},
		onCountryCodeChange: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		onNumberChange: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		onCountryCodeBlur: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		onNumberBlur: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		locale: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		countryCodeInvalid: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		numberInvalid: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		countryCodeRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the country code input element"
		},
		numberRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the number input element"
		}
	}
},
	"ffe-grid-react/src/InlineGrid.js": {
	description: "",
	displayName: "InlineGrid",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "Any children of a InlineGrid must be a GridRow"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes are attached to the root node, in addition to ffe-grid classes"
		},
		element: {
			type: {
				name: "string"
			},
			required: false,
			description: "Specify the DOM element being used to create the Grid",
			defaultValue: {
				value: "'div'",
				computed: false
			}
		}
	}
},
	"ffe-grid-react/src/GridCol.js": {
	description: "",
	displayName: "GridCol",
	methods: [
	],
	props: {
		background: {
			type: {
				name: "enum",
				value: [
					{
						value: "'blue-ice'",
						computed: false
					},
					{
						value: "'blue-pale'",
						computed: false
					},
					{
						value: "'green-mint'",
						computed: false
					},
					{
						value: "'grey-cloud'",
						computed: false
					},
					{
						value: "'sand'",
						computed: false
					},
					{
						value: "'grey-warm'",
						computed: false
					},
					{
						value: "'orange-salmon'",
						computed: false
					},
					{
						value: "'red'",
						computed: false
					},
					{
						value: "'blue-sky'",
						computed: false
					},
					{
						value: "'white'",
						computed: false
					}
				]
			},
			required: false,
			description: "Supported background colors"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes are attached to the root node, in addition to ffe-grid__col classes"
		},
		element: {
			type: {
				name: "node"
			},
			required: false,
			description: "Specify the DOM element being used to create the GridCol",
			defaultValue: {
				value: "'div'",
				computed: false
			}
		},
		around: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Distribute remaining space around the content elements"
		},
		between: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Distribute remaining space between the content elements"
		},
		bottom: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Place content elements at the bottom of the column"
		},
		center: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Center content horizontally"
		},
		centerText: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Center text content horizontally"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content of the column"
		},
		end: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Place content elements to the right of the column"
		},
		horizontal: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Layout column content horizontally and flip flex direction"
		},
		middle: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Center content vertically"
		},
		bottomPadding: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Add bottom padding",
			defaultValue: {
				value: "true",
				computed: false
			}
		},
		reverse: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Reverse layout direction"
		},
		start: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Place content elements to the left of the column"
		},
		top: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Place content elements at the top of the column"
		},
		sm: {
			type: {
				name: "union",
				value: [
					{
						name: "number",
						description: "Number of columns, 0-12"
					},
					{
						name: "string",
						description: "Number of columns, 0-12"
					},
					{
						name: "shape",
						value: {
							cols: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of columns, 0-12",
								required: false
							},
							offset: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of colums offset, 0-12",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Size modifiers for small screen sizes"
		},
		md: {
			type: {
				name: "union",
				value: [
					{
						name: "number",
						description: "Number of columns, 0-12"
					},
					{
						name: "string",
						description: "Number of columns, 0-12"
					},
					{
						name: "shape",
						value: {
							cols: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of columns, 0-12",
								required: false
							},
							offset: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of colums offset, 0-12",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Size modifiers for medium screen sizes"
		},
		lg: {
			type: {
				name: "union",
				value: [
					{
						name: "number",
						description: "Number of columns, 0-12"
					},
					{
						name: "string",
						description: "Number of columns, 0-12"
					},
					{
						name: "shape",
						value: {
							cols: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of columns, 0-12",
								required: false
							},
							offset: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of colums offset, 0-12",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Size modifiers for large screen sizes"
		}
	}
},
	"ffe-grid-react/src/Grid.js": {
	description: "",
	displayName: "Grid",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "Any children of a Grid must be a GridRow"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes are attached to the root node, in addition to ffe-grid classes"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "For a more compact grid"
		},
		element: {
			type: {
				name: "string"
			},
			required: false,
			description: "Specify the DOM element being used to create the Grid"
		},
		topPadding: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Add top padding",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-grid-react/src/GridRow.js": {
	description: "",
	displayName: "GridRow",
	methods: [
	],
	props: {
		background: {
			type: {
				name: "enum",
				value: [
					{
						value: "'blue-ice'",
						computed: false
					},
					{
						value: "'blue-pale'",
						computed: false
					},
					{
						value: "'green-mint'",
						computed: false
					},
					{
						value: "'grey-cloud'",
						computed: false
					},
					{
						value: "'sand'",
						computed: false
					},
					{
						value: "'grey-warm'",
						computed: false
					},
					{
						value: "'orange-salmon'",
						computed: false
					},
					{
						value: "'red'",
						computed: false
					},
					{
						value: "'blue-sky'",
						computed: false
					},
					{
						value: "'white'",
						computed: false
					}
				]
			},
			required: false,
			description: "Supported background colors"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes are attached to the root node, in addition to ffe-grid__row classes"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "All children of a `<GridRow />` must be `<GridCol />`."
		},
		element: {
			type: {
				name: "string"
			},
			required: false,
			description: "Specify the DOM element being used to create the GridRow"
		},
		reverse: {
			type: {
				name: "bool"
			},
			required: false,
			description: "If true, columns are reversed"
		},
		topPadding: {
			type: {
				name: "bool"
			},
			required: false,
			description: "If true, row receives top padding. Useful for when you have background colored rows",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-lists-react/src/BulletList.js": {
	description: "",
	displayName: "BulletList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		}
	}
},
	"ffe-lists-react/src/BulletListItem.js": {
	description: "",
	displayName: "BulletListItem",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/NumberedList.js": {
	description: "",
	displayName: "NumberedList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		}
	}
},
	"ffe-lists-react/src/CheckListItem.js": {
	description: "",
	displayName: "CheckListItem",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		},
		isCross: {
			type: {
				name: "bool"
			},
			required: false,
			description: "If true, render a red cross instead of a green checkmark",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-lists-react/src/DescriptionList.js": {
	description: "",
	displayName: "DescriptionList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		},
		medium: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Medium list. Can't be used with `large` prop"
		},
		large: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Large list. Can't be used with `medium` prop"
		},
		horizontal: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Displays dts and dds inline"
		}
	}
},
	"ffe-lists-react/src/NumberedListItem.js": {
	description: "",
	displayName: "NumberedListItem",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/StylizedNumberedListItem.js": {
	description: "",
	displayName: "StylizedNumberedListItem",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/DescriptionListTerm.js": {
	description: "",
	displayName: "DescriptionListTerm",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/DescriptionListMultiCol.js": {
	description: "",
	displayName: "DescriptionListMultiCol",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/StylizedNumberedList.js": {
	description: "",
	displayName: "StylizedNumberedList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/DescriptionListDescription.js": {
	description: "",
	displayName: "DescriptionListDescription",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/CheckList.js": {
	description: "",
	displayName: "CheckList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		},
		columns: {
			type: {
				name: "enum",
				value: [
					{
						value: "1",
						computed: false
					},
					{
						value: "2",
						computed: false
					},
					{
						value: "'1'",
						computed: false
					},
					{
						value: "'2'",
						computed: false
					}
				]
			},
			required: false,
			description: "",
			defaultValue: {
				value: "1",
				computed: false
			}
		}
	}
},
	"ffe-message-box-react/src/TipsMessage.js": {
	description: "",
	displayName: "TipsMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content of the message box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra class names to the wrapping DOM node"
		},
		content: {
			type: {
				name: "node"
			},
			required: false,
			description: "Deprecated. Use `children` instead.\n@deprecated"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "The icon to show. Has a default value, but can be overridden"
		},
		title: {
			type: {
				name: "node"
			},
			required: false,
			description: "An optional title for the message"
		}
	}
},
	"ffe-message-box-react/src/InfoMessage.js": {
	description: "",
	displayName: "InfoMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content of the message box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra class names to the wrapping DOM node"
		},
		content: {
			type: {
				name: "node"
			},
			required: false,
			description: "Deprecated. Use `children` instead.\n@deprecated"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "The icon to show. Has a default value, but can be overridden"
		},
		title: {
			type: {
				name: "node"
			},
			required: false,
			description: "An optional title for the message"
		}
	}
},
	"ffe-message-box-react/src/ErrorMessage.js": {
	description: "",
	displayName: "ErrorMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content of the message box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra class names to the wrapping DOM node"
		},
		content: {
			type: {
				name: "node"
			},
			required: false,
			description: "Deprecated. Use `children` instead.\n@deprecated"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "The icon to show. Has a default value, but can be overridden"
		},
		title: {
			type: {
				name: "node"
			},
			required: false,
			description: "An optional title for the message"
		},
		alert: {
			type: {
				name: "bool"
			},
			required: false,
			description: "When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true.",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-message-box-react/src/BaseMessage.js": {
	description: "",
	displayName: "BaseMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		content: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		icon: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		title: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		type: {
			type: {
				name: "enum",
				value: [
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'error'",
						computed: false
					},
					{
						value: "'tips'",
						computed: false
					},
					{
						value: "'info'",
						computed: false
					}
				]
			},
			required: true,
			description: "Internal type enum for specifying the style of message box. Should not be used directly\n@ignore"
		}
	}
},
	"ffe-message-box-react/src/SuccessMessage.js": {
	description: "",
	displayName: "SuccessMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content of the message box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra class names to the wrapping DOM node"
		},
		content: {
			type: {
				name: "node"
			},
			required: false,
			description: "Deprecated. Use `children` instead.\n@deprecated"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "The icon to show. Has a default value, but can be overridden"
		},
		title: {
			type: {
				name: "node"
			},
			required: false,
			description: "An optional title for the message"
		}
	}
},
	"ffe-searchable-dropdown-react/src/NoMatch.js": {
	description: "",
	displayName: "NoMatch",
	methods: [
	],
	props: {
		noMatch: {
			type: {
				name: "shape",
				value: {
					text: {
						name: "string",
						required: false
					},
					dropdownList: {
						name: "arrayOf",
						value: {
							name: "object"
						},
						required: false
					}
				}
			},
			required: false,
			description: ""
		},
		noMatchMessageId: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		listToRender: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-searchable-dropdown-react/src/ListItemBody.js": {
	description: "",
	displayName: "ListItemBody",
	methods: [
	],
	props: {
		item: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		dropdownAttributes: {
			type: {
				name: "arrayOf",
				value: {
					name: "string"
				}
			},
			required: true,
			description: ""
		},
		isHighlighted: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-searchable-dropdown-react/src/List.js": {
	description: "",
	displayName: "List",
	methods: [
		{
			name: "handleScroll",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		},
		{
			name: "rowRenderer",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "{ index, parent, style }",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		listToRender: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		noMatch: {
			type: {
				name: "shape",
				value: {
					text: {
						name: "string",
						required: false
					},
					dropdownList: {
						name: "arrayOf",
						value: {
							name: "object"
						},
						required: false
					}
				}
			},
			required: false,
			description: ""
		},
		noMatchMessageId: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		ListItemBodyElement: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		dispatch: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		dropdownAttributes: {
			type: {
				name: "arrayOf",
				value: {
					name: "string"
				}
			},
			required: true,
			description: ""
		},
		locale: {
			type: {
				name: "enum",
				computed: true,
				value: "Object.values(locales)"
			},
			required: true,
			description: ""
		},
		refs: {
			type: {
				name: "arrayOf",
				value: {
					name: "any"
				}
			},
			required: true,
			description: ""
		},
		onChange: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		focusInput: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		isNoMatch: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-searchable-dropdown-react/src/ListItemContainer.js": {
	description: "",
	methods: [
	]
},
	"ffe-spinner-react/src/Spinner.js": {
	description: "",
	displayName: "Spinner",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		large: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-system-message-react/src/SystemSuccessMessage.js": {
	description: "",
	displayName: "SystemSuccessMessage",
	methods: [
	]
},
	"ffe-system-message-react/src/SystemMessage.js": {
	description: "",
	displayName: "SystemMessage",
	methods: [
		{
			name: "close",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		animationLengthMs: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The content of the system message"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional classes added to the surrounding div"
		},
		icon: {
			type: {
				name: "node"
			},
			required: true,
			description: "Override the default icon - use with caution!"
		},
		locale: {
			type: {
				name: "enum",
				value: [
					{
						value: "'en'",
						computed: false
					},
					{
						value: "'nb'",
						computed: false
					},
					{
						value: "'nn'",
						computed: false
					}
				]
			},
			required: false,
			description: "'nb', 'nn', or 'en'",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		modifier: {
			type: {
				name: "enum",
				value: [
					{
						value: "'error'",
						computed: false
					},
					{
						value: "'info'",
						computed: false
					},
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'news'",
						computed: false
					}
				]
			},
			required: false,
			description: "The type of system message. Used internally only-\n@ignore"
		},
		onClose: {
			type: {
				name: "func"
			},
			required: false,
			description: "Callback for when the system message has been closed (after animation ends)",
			defaultValue: {
				value: "f => f",
				computed: false
			}
		}
	}
},
	"ffe-system-message-react/src/SystemErrorMessage.js": {
	description: "",
	displayName: "SystemErrorMessage",
	methods: [
	],
	props: {
		animationLengthMs: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The content of the system message"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional classes added to the surrounding div"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Override the default icon - use with caution!"
		},
		locale: {
			type: {
				name: "enum",
				value: [
					{
						value: "'en'",
						computed: false
					},
					{
						value: "'nb'",
						computed: false
					},
					{
						value: "'nn'",
						computed: false
					}
				]
			},
			required: false,
			description: "'nb', 'nn', or 'en'",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		modifier: {
			type: {
				name: "enum",
				value: [
					{
						value: "'error'",
						computed: false
					},
					{
						value: "'info'",
						computed: false
					},
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'news'",
						computed: false
					}
				]
			},
			required: false,
			description: "The type of system message. Used internally only-\n@ignore"
		},
		onClose: {
			type: {
				name: "func"
			},
			required: false,
			description: "Callback for when the system message has been closed (after animation ends)",
			defaultValue: {
				value: "f => f",
				computed: false
			}
		},
		alert: {
			type: {
				name: "bool"
			},
			required: false,
			description: "When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true.",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-system-message-react/src/SystemInfoMessage.js": {
	description: "",
	displayName: "SystemInfoMessage",
	methods: [
	]
},
	"ffe-system-message-react/src/SystemNewsMessage.js": {
	description: "",
	displayName: "SystemNewsMessage",
	methods: [
	]
},
	"ffe-tables-react/src/DefaultTable/DefaultTable.js": {
	description: "",
	displayName: "DefaultTable",
	methods: [
		{
			name: "renderTableCaption",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "renderTableHeaders",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "renderTableFooter",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "getData",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "renderTableBody",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		}
	],
	props: {
		alignLeft: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		columnLayoutMobile: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		caption: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		srOnlyCaption: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		expandedContentMapper: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		smallHeader: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		sort: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		},
		offset: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "0",
				computed: false
			}
		},
		limit: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "0",
				computed: false
			}
		},
		breakpoint: {
			type: {
				name: "enum",
				value: [
					{
						value: "'sm'",
						computed: false
					},
					{
						value: "'none'",
						computed: false
					}
				]
			},
			required: false,
			description: ""
		},
		data: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: false,
			description: "",
			defaultValue: {
				value: "[]",
				computed: false
			}
		},
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						header: {
							name: "node",
							required: true
						},
						key: {
							name: "string",
							required: true
						}
					}
				}
			},
			required: false,
			description: "",
			defaultValue: {
				value: "[]",
				computed: false
			}
		},
		rowRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/Table.js": {
	description: "",
	displayName: "Table",
	methods: [
	],
	props: {
		caption: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		srOnlyCaption: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Make the caption only visible for screen readers"
		},
		expandedContentMapper: {
			type: {
				name: "func"
			},
			required: false,
			description: "A mapping function that returns a renderable node that will be rendered for each expandable row"
		},
		sortable: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		sortBy: {
			type: {
				name: "string"
			},
			required: false,
			description: "A string reference to a column key to set an initial sort of the table"
		},
		descending: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Used in conjunction with sortBy"
		},
		offset: {
			type: {
				name: "number"
			},
			required: false,
			description: "When paginated, lets you set the number of rows to offset from the beginning"
		},
		limit: {
			type: {
				name: "number"
			},
			required: false,
			description: "Limits the number of rows to show on one page. Decides whether or not to paginate your table"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Makes your table condensed - for pages that show a lot of data"
		},
		smallHeader: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Set to true if you want the row headings to be narrower on smalls screens"
		},
		alignLeft: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Removes left cell padding from the first column"
		},
		columnLayoutMobile: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Show your table as a regular column based table on small devices"
		},
		breakpoint: {
			type: {
				name: "enum",
				value: [
					{
						value: "'sm'",
						computed: false
					},
					{
						value: "'none'",
						computed: false
					}
				]
			},
			required: false,
			description: "Decide if your table rows should break into a vertical view on small or no devices"
		},
		rowRender: {
			type: {
				name: "func"
			},
			required: false,
			description: "Override rendering of rows with a prop\nrowRender={(props, rowcontent, trprops, index)=>{return <tr {...trprops}>{rowcontent}</tr>}}"
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: "Override rendering of headers with a prop\nheaderRender={(props, rowcontent, trprops) => {return <tr {...trprops}>{rowcontent}</tr>}}"
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: "Override rendering of footer with a prop\nfooterRender={(props, rowcontent, trprops) => {return <tr {...trprops}>{rowcontent}</tr>}}"
		},
		data: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						id: {
							name: "union",
							value: [
								{
									name: "string"
								},
								{
									name: "number"
								}
							],
							description: "A unique ID for each row of data. Required for sorting",
							required: false
						}
					}
				}
			},
			required: false,
			description: "An array of objects with keys equal to the columns array's key value, and value equal to whatever you\nwant in your cell. These are basically an array of rows"
		},
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						header: {
							name: "node",
							description: "The column header. Required, but may be an empty string.",
							required: true
						},
						key: {
							name: "string",
							description: "The column key used in the `data` array's objects",
							required: true
						},
						footer: {
							name: "node",
							description: "Content shown in the table footer",
							required: false
						},
						alignRight: {
							name: "bool",
							required: false
						},
						alignTop: {
							name: "bool",
							required: false
						},
						hideOnDesktop: {
							name: "bool",
							required: false
						},
						hideOnTablet: {
							name: "bool",
							required: false
						},
						hideOnSmallTablet: {
							name: "bool",
							required: false
						},
						hideOnMobile: {
							name: "bool",
							required: false
						},
						compare: {
							name: "func",
							description: "Custom comparator function for sorting this column",
							required: false
						},
						notSortable: {
							name: "bool",
							description: "Disable column from sorting. Not needed if heading is an empty string",
							required: false
						},
						cellRender: {
							name: "func",
							required: false
						},
						columnHeaderRender: {
							name: "func",
							required: false
						},
						columnFooterRender: {
							name: "func",
							required: false
						}
					}
				}
			},
			required: false,
			description: "An array of objects with a key describing your column, and a header describing that column"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Class names set in addition to the ffe tables classes."
		}
	}
},
	"ffe-tables-react/src/SortableTable/SortableTable.js": {
	description: "",
	displayName: "SortableTable",
	methods: [
		{
			name: "sortStateHasChanged",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "nextState",
					type: null
				}
			],
			returns: null
		},
		{
			name: "tableHeaderClicked",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "columnKey",
					type: null
				}
			],
			returns: null
		},
		{
			name: "handleKeyPress",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "columnKey",
					type: null
				},
				{
					name: "event",
					type: null
				}
			],
			returns: null
		},
		{
			name: "getAriaSort",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "column",
					type: null
				}
			],
			returns: null
		},
		{
			name: "decorateSortableTableHeader",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "column",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		caption: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		srOnlyCaption: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		expandedContentMapper: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		offset: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		limit: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		columnLayoutMobile: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		smallHeader: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		alignLeft: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		breakpoint: {
			type: {
				name: "enum",
				value: [
					{
						value: "'sm'",
						computed: false
					},
					{
						value: "'none'",
						computed: false
					}
				]
			},
			required: false,
			description: ""
		},
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		data: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		sortBy: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		descending: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		onSort: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		rowRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/TableParts/TableRowExpandable.js": {
	description: "",
	displayName: "TableRowExpandable",
	methods: [
		{
			name: "getDerivedStateFromProps",
			docblock: null,
			modifiers: [
				"static"
			],
			params: [
				{
					name: "nextProps",
					type: null
				},
				{
					name: "prevState",
					type: null
				}
			],
			returns: null
		},
		{
			name: "toggleExpand",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "handleKeyPress",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		cells: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		columns: {
			type: {
				name: "array"
			},
			required: true,
			description: ""
		},
		sort: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		},
		rowRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		rowIndex: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		defaultExpanded: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		scrollToOnMount: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/TableParts/TableCell.js": {
	description: "",
	displayName: "TableCell",
	methods: [
	],
	props: {
		alignRight: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		alignTop: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		children: {
			type: {
				name: "any"
			},
			required: false,
			description: ""
		},
		columnHeader: {
			type: {
				name: "union",
				value: [
					{
						name: "string"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: ""
		},
		contentClasses: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		tdClasses: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/TableParts/TableFooter.js": {
	description: "",
	displayName: "TableFooter",
	methods: [
	],
	props: {
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						alignRight: {
							name: "bool",
							required: false
						},
						alignTop: {
							name: "bool",
							required: false
						},
						footer: {
							name: "any",
							required: false
						},
						header: {
							name: "node",
							required: true
						},
						hideOnDesktop: {
							name: "bool",
							required: false
						},
						hideOnMobile: {
							name: "bool",
							required: false
						},
						hideOnSmallTablet: {
							name: "bool",
							required: false
						},
						hideOnTablet: {
							name: "bool",
							required: false
						}
					}
				}
			},
			required: false,
			description: ""
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		dataWindow: {
			type: {
				name: "array"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/TableParts/TableHeaders.js": {
	description: "",
	displayName: "TableHeaders",
	methods: [
	],
	props: {
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						alignRight: {
							name: "bool",
							required: false
						},
						header: {
							name: "node",
							required: true
						},
						hideOnDesktop: {
							name: "bool",
							required: false
						},
						hideOnMobile: {
							name: "bool",
							required: false
						},
						hideOnSmallTablet: {
							name: "bool",
							required: false
						},
						hideOnTablet: {
							name: "bool",
							required: false
						},
						key: {
							name: "string",
							required: true
						}
					}
				}
			},
			required: false,
			description: ""
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		dataWindow: {
			type: {
				name: "array"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/TableParts/TableRow.js": {
	description: "",
	displayName: "TableRow",
	methods: [
	],
	props: {
		cells: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						alignRight: {
							name: "bool",
							required: false
						},
						alignTop: {
							name: "bool",
							required: false
						},
						header: {
							name: "any",
							required: false
						},
						hideOnDesktop: {
							name: "bool",
							required: false
						},
						hideOnMobile: {
							name: "bool",
							required: false
						},
						hideOnSmallTablet: {
							name: "bool",
							required: false
						},
						hideOnTablet: {
							name: "bool",
							required: false
						},
						key: {
							name: "string",
							required: false
						},
						cellRender: {
							name: "func",
							required: false
						}
					}
				}
			},
			required: true,
			description: ""
		},
		expandable: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		expanded: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		onClick: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		rowRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		onKeyDown: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		trClasses: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		rowIndex: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tabs-react/src/Tab.js": {
	description: "",
	displayName: "Tab",
	methods: [
	],
	props: {
		selected: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Selected tab button"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Compact style tab button"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional css classes"
		},
		"aria-controls": {
			type: {
				name: "string"
			},
			required: true,
			description: "Id of the element it controls"
		}
	}
},
	"ffe-tabs-react/src/TabButtonGroup.js": {
	description: "",
	displayName: "TabButtonGroup",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "TabGroup contents - a group of Tabs"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional css classes"
		},
		thin: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Applies the thin modifier to remove margins"
		}
	}
},
	"ffe-tabs-react/src/TabButton.js": {
	description: "",
	displayName: "TabButton",
	methods: [
	],
	props: {
		selected: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Selected tab button"
		},
		ghost: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Transparent background style tab button"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Compact style tab button"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional css classes"
		},
		dark: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Dark variant",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		"aria-controls": {
			type: {
				name: "string"
			},
			required: true,
			description: "Id of the element it controls"
		}
	}
},
	"ffe-tabs-react/src/TabGroup.js": {
	description: "",
	displayName: "TabGroup",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "TabGroup contents - a group of Tabs"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional css classes"
		},
		thin: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Applies the thin modifier to remove margins"
		}
	}
}
};

const scope$2n = {PhoneNumber};
const code$2n = "<PhoneNumber number=\"123123123\" />";
const sourceCode$2n = "import { PhoneNumber } from '@sb1/ffe-form-react';\n\n<PhoneNumber number=\"123123123\" />\n";
const sourceImports$2n = "import { PhoneNumber } from '@sb1/ffe-form-react';";
const dependencies$2n = ["@sb1/ffe-form-react"];
const sourceFileName$2n = "form/PhoneNumber.jsx";

var form_PhoneNumber = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2n,
  code: code$2n,
  sourceCode: sourceCode$2n,
  sourceImports: sourceImports$2n,
  dependencies: dependencies$2n,
  sourceFileName: sourceFileName$2n
});

const scope$2m = {TextArea,Label};
const code$2m = "<>\n    <Label htmlFor=\"textarea-example\">Beskriv skaden</Label>\n    <TextArea\n        defaultValue=\"Dette er et tekstfelt for lengre tekster.\"\n        id=\"textarea-example\"\n        rows=\"8\"\n    />\n</>";
const sourceCode$2m = "import { TextArea, Label } from '@sb1/ffe-form-react';\n\n<>\n    <Label htmlFor=\"textarea-example\">Beskriv skaden</Label>\n    <TextArea\n        defaultValue=\"Dette er et tekstfelt for lengre tekster.\"\n        id=\"textarea-example\"\n        rows=\"8\"\n    />\n</>\n\n";
const sourceImports$2m = "import { TextArea, Label } from '@sb1/ffe-form-react';";
const dependencies$2m = ["@sb1/ffe-form-react"];
const sourceFileName$2m = "form/TextArea.jsx";

var form_TextArea = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2m,
  code: code$2m,
  sourceCode: sourceCode$2m,
  sourceImports: sourceImports$2m,
  dependencies: dependencies$2m,
  sourceFileName: sourceFileName$2m
});

const scope$2l = {Label};
const code$2l = "<Label htmlFor=\"e-post\">E-post</Label>";
const sourceCode$2l = "import { Label } from '@sb1/ffe-form-react';\n\n<Label htmlFor=\"e-post\">E-post</Label>\n";
const sourceImports$2l = "import { Label } from '@sb1/ffe-form-react';";
const dependencies$2l = ["@sb1/ffe-form-react"];
const sourceFileName$2l = "form/Label.jsx";

var form_Label = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2l,
  code: code$2l,
  sourceCode: sourceCode$2l,
  sourceImports: sourceImports$2l,
  dependencies: dependencies$2l,
  sourceFileName: sourceFileName$2l
});

const scope$2k = {TextArea,ButtonGroup,PrimaryButton};
const code$2k = "class Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <TextArea\n                    ref={this.inputRef}\n                    placeholder=\"Trykk på knappen for fokus\"\n                />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}";
const sourceCode$2k = "import { TextArea } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';\n\nclass Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <TextArea\n                    ref={this.inputRef}\n                    placeholder=\"Trykk på knappen for fokus\"\n                />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}\n\n";
const sourceImports$2k = "import { TextArea } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$2k = ["@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$2k = "form/TextArea-ref.jsx";

var form_TextArea_ref = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2k,
  code: code$2k,
  sourceCode: sourceCode$2k,
  sourceImports: sourceImports$2k,
  dependencies: dependencies$2k,
  sourceFileName: sourceFileName$2k
});

const scope$2j = {useState,RadioSwitch,RadioButtonInputGroup};
const code$2j = "() => {\n    const [selected, setSelected] = useState();\n    const fieldMessageLeasing = 'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroupWithFieldMessage\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage=\"Du må gjøre et valg\"\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$2j = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n    const fieldMessageLeasing = 'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroupWithFieldMessage\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage=\"Du må gjøre et valg\"\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n\n";
const sourceImports$2j = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$2j = ["react","@sb1/ffe-form-react"];
const sourceFileName$2j = "form/RadioSwitch-fieldMessageUnselected.jsx";

var form_RadioSwitch_fieldMessageUnselected = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2j,
  code: code$2j,
  sourceCode: sourceCode$2j,
  sourceImports: sourceImports$2j,
  dependencies: dependencies$2j,
  sourceFileName: sourceFileName$2j
});

const scope$2i = {useState,RadioButtonInputGroup,RadioBlock,RadioSwitch,RadioButton,Tooltip,SecondaryButton};
const code$2i = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (<>\n        <div className=\"ffe-button-group\">\n            <SecondaryButton onClick={() => setShowErrors(!showErrors)} >\n                Skru feilmeldinger av/på\n            </SecondaryButton>\n        </div>\n        <RadioButtonInputGroup\n            label=\"Hva er din favorittfarge?\"\n            inline={true}\n            name=\"color\"\n            fieldMessage={showErrors ? 'Feil farge.' : null}\n            tooltip={\n                <Tooltip>Din favorittfarge er viktig for oss. Vår er blå!</Tooltip>\n            }\n            selectedValue={selectedColor}\n            onChange={e => setSelectedColor(e.target.value )}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"red\">\n                        Rød\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"blue\">\n                        Blå\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"yellow\">\n                        Gul\n                    </RadioButton>\n                    <p>Ekstra innhold</p>\n                </>\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            label=\"Hva er din favorittlukt?\"\n            inline={true}\n            name=\"smell\"\n            fieldMessage={showErrors ? 'Feil lukt.' : null}\n            selectedValue={selectedSmell}\n            onChange={e => setSelectedSmell(e.target.value )}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"grass\">\n                        Gress\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"asphalt\">\n                        Asfalt\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"pollen\">\n                        Pollen\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            description=\"Du kan ikke velge begge\"\n            label=\"Velg ja eller nei\"\n            name=\"switch\"\n            fieldMessage={showErrors ? 'Feil valg' : null}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue={true}\n                    rightLabel=\"Nei\"\n                    rightValue={false}\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            label=\"Velg ja eller nei\"\n            name=\"block1\"\n            selectedValue=\"yes\"\n            fieldMessage={showErrors ? 'Feil valg' : null}\n        >\n            {inputProps => (\n                <>\n                    <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Nei\"\n                        showChildren={true}\n                        value=\"no\"\n                    >\n                        Vil ikke!\n                    </RadioBlock>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    </>);\n}";
const sourceCode$2i = "import { useState } from 'react';\nimport { RadioButtonInputGroup, RadioBlock, RadioSwitch, RadioButton, Tooltip } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (<>\n        <div className=\"ffe-button-group\">\n            <SecondaryButton onClick={() => setShowErrors(!showErrors)} >\n                Skru feilmeldinger av/på\n            </SecondaryButton>\n        </div>\n        <RadioButtonInputGroup\n            label=\"Hva er din favorittfarge?\"\n            inline={true}\n            name=\"color\"\n            fieldMessage={showErrors ? 'Feil farge.' : null}\n            tooltip={\n                <Tooltip>Din favorittfarge er viktig for oss. Vår er blå!</Tooltip>\n            }\n            selectedValue={selectedColor}\n            onChange={e => setSelectedColor(e.target.value )}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"red\">\n                        Rød\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"blue\">\n                        Blå\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"yellow\">\n                        Gul\n                    </RadioButton>\n                    <p>Ekstra innhold</p>\n                </>\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            label=\"Hva er din favorittlukt?\"\n            inline={true}\n            name=\"smell\"\n            fieldMessage={showErrors ? 'Feil lukt.' : null}\n            selectedValue={selectedSmell}\n            onChange={e => setSelectedSmell(e.target.value )}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"grass\">\n                        Gress\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"asphalt\">\n                        Asfalt\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"pollen\">\n                        Pollen\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            description=\"Du kan ikke velge begge\"\n            label=\"Velg ja eller nei\"\n            name=\"switch\"\n            fieldMessage={showErrors ? 'Feil valg' : null}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue={true}\n                    rightLabel=\"Nei\"\n                    rightValue={false}\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            label=\"Velg ja eller nei\"\n            name=\"block1\"\n            selectedValue=\"yes\"\n            fieldMessage={showErrors ? 'Feil valg' : null}\n        >\n            {inputProps => (\n                <>\n                    <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Nei\"\n                        showChildren={true}\n                        value=\"no\"\n                    >\n                        Vil ikke!\n                    </RadioBlock>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    </>);\n}\n";
const sourceImports$2i = "import { useState } from 'react';\nimport { RadioButtonInputGroup, RadioBlock, RadioSwitch, RadioButton, Tooltip } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$2i = ["react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$2i = "form/RadioButtonInputGroup.jsx";

var form_RadioButtonInputGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2i,
  code: code$2i,
  sourceCode: sourceCode$2i,
  sourceImports: sourceImports$2i,
  dependencies: dependencies$2i,
  sourceFileName: sourceFileName$2i
});

const scope$2h = {useState,RadioButton,RadioButtonInputGroup};
const code$2h = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Kundetype\"\n            name=\"customerType\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"bank\">\n                        Bankkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"insurance\">\n                        Forsikringskunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"both\">\n                        Totalkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"none\">\n                        Ikke kunde enda\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n}";
const sourceCode$2h = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Kundetype\"\n            name=\"customerType\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"bank\">\n                        Bankkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"insurance\">\n                        Forsikringskunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"both\">\n                        Totalkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"none\">\n                        Ikke kunde enda\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n}\n";
const sourceImports$2h = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$2h = ["react","@sb1/ffe-form-react"];
const sourceFileName$2h = "form/RadioButton.jsx";

var form_RadioButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2h,
  code: code$2h,
  sourceCode: sourceCode$2h,
  sourceImports: sourceImports$2h,
  dependencies: dependencies$2h,
  sourceFileName: sourceFileName$2h
});

const scope$2g = {ErrorFieldMessage};
const code$2g = "<ErrorFieldMessage>Noe er feil her</ErrorFieldMessage>";
const sourceCode$2g = "import { ErrorFieldMessage } from '@sb1/ffe-form-react';\n\n<ErrorFieldMessage>Noe er feil her</ErrorFieldMessage>\n";
const sourceImports$2g = "import { ErrorFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$2g = ["@sb1/ffe-form-react"];
const sourceFileName$2g = "form/ErrorFieldMessage.jsx";

var form_ErrorFieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2g,
  code: code$2g,
  sourceCode: sourceCode$2g,
  sourceImports: sourceImports$2g,
  dependencies: dependencies$2g,
  sourceFileName: sourceFileName$2g
});

const scope$2f = {InputGroup,Input,ErrorFieldMessage};
const code$2f = "<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>";
const sourceCode$2f = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';\n\n<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>\n";
const sourceImports$2f = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$2f = ["@sb1/ffe-form-react"];
const sourceFileName$2f = "form/InputGroup-multiChildren.jsx";

var form_InputGroup_multiChildren = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2f,
  code: code$2f,
  sourceCode: sourceCode$2f,
  sourceImports: sourceImports$2f,
  dependencies: dependencies$2f,
  sourceFileName: sourceFileName$2f
});

const scope$2e = {Checkbox};
const code$2e = "<Checkbox name=\"loves-ads\" aria-invalid=\"true\" checked={true} onChange={f => f}>\n    Ja, jeg vil gjerne motta reklame!\n</Checkbox>";
const sourceCode$2e = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox name=\"loves-ads\" aria-invalid=\"true\" checked={true} onChange={f => f}>\n    Ja, jeg vil gjerne motta reklame!\n</Checkbox>\n";
const sourceImports$2e = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$2e = ["@sb1/ffe-form-react"];
const sourceFileName$2e = "form/Checkbox-invalid.jsx";

var form_Checkbox_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2e,
  code: code$2e,
  sourceCode: sourceCode$2e,
  sourceImports: sourceImports$2e,
  dependencies: dependencies$2e,
  sourceFileName: sourceFileName$2e
});

const scope$2d = {Checkbox};
const code$2d = "<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label\">Hva er du interessert i?</legend>\n    <Checkbox name=\"interests\" value=\"sport\" inline={false}>\n        Sport\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"food\" inline={false}>\n        Matlaging\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"moon\" inline={false}>\n        Månen\n    </Checkbox>\n</fieldset>";
const sourceCode$2d = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label\">Hva er du interessert i?</legend>\n    <Checkbox name=\"interests\" value=\"sport\" inline={false}>\n        Sport\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"food\" inline={false}>\n        Matlaging\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"moon\" inline={false}>\n        Månen\n    </Checkbox>\n</fieldset>\n";
const sourceImports$2d = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$2d = ["@sb1/ffe-form-react"];
const sourceFileName$2d = "form/Checkbox-inlineFalse.jsx";

var form_Checkbox_inlineFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2d,
  code: code$2d,
  sourceCode: sourceCode$2d,
  sourceImports: sourceImports$2d,
  dependencies: dependencies$2d,
  sourceFileName: sourceFileName$2d
});

const scope$2c = {useState,RadioButton,RadioButtonInputGroup};
const code$2c = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            inline={true}\n            label=\"Hva er din favorittfarge?\"\n            name=\"favoriteColor\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"red\">\n                        Rød\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"blue\">\n                        Blå\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"yellow\">\n                        Gul\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n}";
const sourceCode$2c = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            inline={true}\n            label=\"Hva er din favorittfarge?\"\n            name=\"favoriteColor\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"red\">\n                        Rød\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"blue\">\n                        Blå\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"yellow\">\n                        Gul\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n}\n";
const sourceImports$2c = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$2c = ["react","@sb1/ffe-form-react"];
const sourceFileName$2c = "form/RadioButton-inline.jsx";

var form_RadioButton_inline = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2c,
  code: code$2c,
  sourceCode: sourceCode$2c,
  sourceImports: sourceImports$2c,
  dependencies: dependencies$2c,
  sourceFileName: sourceFileName$2c
});

const scope$2b = {useState,Tooltip};
const code$2b = "() => {\n    const [open, setOpen] = useState(false);\n    return (<>\n        <Tooltip\n            aria-controls=\"tooltip-text\"\n            onClick={() => setOpen(!open)}\n        />\n        <div hidden={open} id=\"tooltip-text\">\n            Titt tei!\n        </div>\n    </>);\n};";
const sourceCode$2b = "import { useState } from 'react';\nimport { Tooltip } from '@sb1/ffe-form-react';\n\n() => {\n    const [open, setOpen] = useState(false);\n    return (<>\n        <Tooltip\n            aria-controls=\"tooltip-text\"\n            onClick={() => setOpen(!open)}\n        />\n        <div hidden={open} id=\"tooltip-text\">\n            Titt tei!\n        </div>\n    </>);\n};\n";
const sourceImports$2b = "import { useState } from 'react';\nimport { Tooltip } from '@sb1/ffe-form-react';";
const dependencies$2b = ["react","@sb1/ffe-form-react"];
const sourceFileName$2b = "form/Tooltip-external.jsx";

var form_Tooltip_external = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2b,
  code: code$2b,
  sourceCode: sourceCode$2b,
  sourceImports: sourceImports$2b,
  dependencies: dependencies$2b,
  sourceFileName: sourceFileName$2b
});

const scope$2a = {useState,Datepicker,Dropdown,InputGroup,Input,TextArea,Checkbox,SecondaryButton};
const code$2a = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (<>\n        <div className=\"ffe-button-group\">\n            <SecondaryButton onClick={() => setShowErrors(!showErrors)} >\n                Skru feilmeldinger av/på\n            </SecondaryButton>\n        </div>\n        <InputGroup\n            extraMargin={false}\n            label=\"Telefonnummer\"\n            tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n            fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n        >\n            {inputProps => (\n                <>\n                    <Input\n                        type=\"tel\"\n                        name=\"mobile\"\n                        onChange={e => console.log('onChange', e.target.value)}\n                        onBlur={e => console.log('onBlur', e.target.value)}\n                        {...inputProps}\n                    />\n                    <p>Ekstra innhold</p>\n                </>\n            )}\n        </InputGroup>\n\n        <InputGroup\n            extraMargin={false}\n            label=\"E-postadresse\"\n            fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n        >\n            <Input />\n        </InputGroup>\n\n        <InputGroup\n            extraMargin={false}\n            label=\"Måned\"\n            fieldMessage={showErrors ? 'Du må velge måned' : null}\n        >\n            <Dropdown defaultValue=\"placeholder\">\n                <option value=\"placeholder\" disabled>\n                    Velg måned\n                </option>\n                <option value=\"jan\">Januar</option>\n                <option value=\"feb\">Februar</option>\n                <option value=\"mar\">Mars</option>\n            </Dropdown>\n        </InputGroup>\n\n        <InputGroup\n            extraMargin={false}\n            label=\"Fritekst\"\n            fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n        >\n            <TextArea rows={4} />\n        </InputGroup>\n\n        <InputGroup\n            extraMargin={false}\n            label=\"Dato\"\n            fieldMessage={showErrors ? 'Feil dato' : null}\n        >\n            <Datepicker\n                language=\"nb\"\n                maxDate=\"31.12.2016\"\n                minDate=\"01.01.2016\"\n                onChange={f => f}\n                value={'01.01.2016'}\n            />\n        </InputGroup>\n\n        <InputGroup\n            extraMargin={false}\n            fieldMessage={showErrors ? 'Ooops' : null}\n        >\n            <Checkbox name=\"check\">Kryssboks</Checkbox>\n        </InputGroup>\n    </>);\n}";
const sourceCode$2a = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Input, TextArea, Checkbox } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (<>\n        <div className=\"ffe-button-group\">\n            <SecondaryButton onClick={() => setShowErrors(!showErrors)} >\n                Skru feilmeldinger av/på\n            </SecondaryButton>\n        </div>\n        <InputGroup\n            extraMargin={false}\n            label=\"Telefonnummer\"\n            tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n            fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n        >\n            {inputProps => (\n                <>\n                    <Input\n                        type=\"tel\"\n                        name=\"mobile\"\n                        onChange={e => console.log('onChange', e.target.value)}\n                        onBlur={e => console.log('onBlur', e.target.value)}\n                        {...inputProps}\n                    />\n                    <p>Ekstra innhold</p>\n                </>\n            )}\n        </InputGroup>\n\n        <InputGroup\n            extraMargin={false}\n            label=\"E-postadresse\"\n            fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n        >\n            <Input />\n        </InputGroup>\n\n        <InputGroup\n            extraMargin={false}\n            label=\"Måned\"\n            fieldMessage={showErrors ? 'Du må velge måned' : null}\n        >\n            <Dropdown defaultValue=\"placeholder\">\n                <option value=\"placeholder\" disabled>\n                    Velg måned\n                </option>\n                <option value=\"jan\">Januar</option>\n                <option value=\"feb\">Februar</option>\n                <option value=\"mar\">Mars</option>\n            </Dropdown>\n        </InputGroup>\n\n        <InputGroup\n            extraMargin={false}\n            label=\"Fritekst\"\n            fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n        >\n            <TextArea rows={4} />\n        </InputGroup>\n\n        <InputGroup\n            extraMargin={false}\n            label=\"Dato\"\n            fieldMessage={showErrors ? 'Feil dato' : null}\n        >\n            <Datepicker\n                language=\"nb\"\n                maxDate=\"31.12.2016\"\n                minDate=\"01.01.2016\"\n                onChange={f => f}\n                value={'01.01.2016'}\n            />\n        </InputGroup>\n\n        <InputGroup\n            extraMargin={false}\n            fieldMessage={showErrors ? 'Ooops' : null}\n        >\n            <Checkbox name=\"check\">Kryssboks</Checkbox>\n        </InputGroup>\n    </>);\n}\n";
const sourceImports$2a = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Input, TextArea, Checkbox } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$2a = ["react","@sb1/ffe-datepicker-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$2a = "form/InputGroup-extraMarginFalse.jsx";

var form_InputGroup_extraMarginFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2a,
  code: code$2a,
  sourceCode: sourceCode$2a,
  sourceImports: sourceImports$2a,
  dependencies: dependencies$2a,
  sourceFileName: sourceFileName$2a
});

const scope$29 = {useState,Datepicker,Dropdown,InputGroup,Checkbox,Input,TextArea,SecondaryButton};
const code$29 = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (<>\n        <div className=\"ffe-button-group\">\n            <SecondaryButton onClick={() => setShowErrors(!showErrors)} >\n                Skru feilmeldinger av/på\n            </SecondaryButton>\n        </div>\n        <InputGroup\n            label=\"Telefonnummer\"\n            tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n            fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n        >\n            {inputProps => (\n                <>\n                    <Input\n                        type=\"tel\"\n                        name=\"mobile\"\n                        onChange={e => console.log('onChange', e.target.value)}\n                        onBlur={e => console.log('onBlur', e.target.value)}\n                        {...inputProps}\n                    />\n                    <p>Ekstra innhold</p>\n                </>\n            )}\n        </InputGroup>\n\n        <InputGroup\n            label=\"E-postadresse\"\n            fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n        >\n            <Input />\n        </InputGroup>\n\n        <InputGroup\n            label=\"Måned\"\n            fieldMessage={showErrors ? 'Du må velge måned' : null}\n        >\n            <Dropdown defaultValue=\"placeholder\">\n                <option value=\"placeholder\" disabled>\n                    Velg måned\n                </option>\n                <option value=\"jan\">Januar</option>\n                <option value=\"feb\">Februar</option>\n                <option value=\"mar\">Mars</option>\n            </Dropdown>\n        </InputGroup>\n\n        <InputGroup\n            label=\"Fritekst\"\n            fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n        >\n            <TextArea rows={4} />\n        </InputGroup>\n\n        <InputGroup\n            label=\"Dato\"\n            fieldMessage={showErrors ? 'Feil dato' : null}\n        >\n            <Datepicker\n                language=\"nb\"\n                maxDate=\"31.12.2016\"\n                minDate=\"01.01.2016\"\n                onChange={f => f}\n                value={'01.01.2016'}\n            />\n        </InputGroup>\n\n        <InputGroup fieldMessage={showErrors ? 'Ooops' : null}>\n            <Checkbox name=\"check\">Kryssboks</Checkbox>\n        </InputGroup>\n    </>);\n}";
const sourceCode$29 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Checkbox, Input, TextArea } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (<>\n        <div className=\"ffe-button-group\">\n            <SecondaryButton onClick={() => setShowErrors(!showErrors)} >\n                Skru feilmeldinger av/på\n            </SecondaryButton>\n        </div>\n        <InputGroup\n            label=\"Telefonnummer\"\n            tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n            fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n        >\n            {inputProps => (\n                <>\n                    <Input\n                        type=\"tel\"\n                        name=\"mobile\"\n                        onChange={e => console.log('onChange', e.target.value)}\n                        onBlur={e => console.log('onBlur', e.target.value)}\n                        {...inputProps}\n                    />\n                    <p>Ekstra innhold</p>\n                </>\n            )}\n        </InputGroup>\n\n        <InputGroup\n            label=\"E-postadresse\"\n            fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n        >\n            <Input />\n        </InputGroup>\n\n        <InputGroup\n            label=\"Måned\"\n            fieldMessage={showErrors ? 'Du må velge måned' : null}\n        >\n            <Dropdown defaultValue=\"placeholder\">\n                <option value=\"placeholder\" disabled>\n                    Velg måned\n                </option>\n                <option value=\"jan\">Januar</option>\n                <option value=\"feb\">Februar</option>\n                <option value=\"mar\">Mars</option>\n            </Dropdown>\n        </InputGroup>\n\n        <InputGroup\n            label=\"Fritekst\"\n            fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n        >\n            <TextArea rows={4} />\n        </InputGroup>\n\n        <InputGroup\n            label=\"Dato\"\n            fieldMessage={showErrors ? 'Feil dato' : null}\n        >\n            <Datepicker\n                language=\"nb\"\n                maxDate=\"31.12.2016\"\n                minDate=\"01.01.2016\"\n                onChange={f => f}\n                value={'01.01.2016'}\n            />\n        </InputGroup>\n\n        <InputGroup fieldMessage={showErrors ? 'Ooops' : null}>\n            <Checkbox name=\"check\">Kryssboks</Checkbox>\n        </InputGroup>\n    </>);\n}\n";
const sourceImports$29 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Checkbox, Input, TextArea } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$29 = ["react","@sb1/ffe-datepicker-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$29 = "form/InputGroup.jsx";

var form_InputGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$29,
  code: code$29,
  sourceCode: sourceCode$29,
  sourceImports: sourceImports$29,
  dependencies: dependencies$29,
  sourceFileName: sourceFileName$29
});

const scope$28 = {SuccessFieldMessage};
const code$28 = "<SuccessFieldMessage>Hurra!</SuccessFieldMessage>";
const sourceCode$28 = "import { SuccessFieldMessage } from '@sb1/ffe-form-react';\n\n<SuccessFieldMessage>Hurra!</SuccessFieldMessage>\n";
const sourceImports$28 = "import { SuccessFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$28 = ["@sb1/ffe-form-react"];
const sourceFileName$28 = "form/SuccessFieldMessage.jsx";

var form_SuccessFieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$28,
  code: code$28,
  sourceCode: sourceCode$28,
  sourceImports: sourceImports$28,
  dependencies: dependencies$28,
  sourceFileName: sourceFileName$28
});

const scope$27 = {useState,RadioBlock,RadioButtonInputGroup};
const code$27 = "() => {\n    const [selected, setSelected] = useState('you');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvem eier bilen du skal forsikre?\"\n            name=\"owner\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioBlock {...inputProps} label=\"Du\" value=\"you\" />\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Ektefelle, samboer eller registrert partner\"\n                        showChildren={true}\n                        value=\"partner\"\n                    >\n                        Da må ektefelle, samboer eller registrert partner skrive inn\n                        detaljene sine under.\n                    </RadioBlock>\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Leasingselskap\"\n                        value=\"leasing-company\"\n                    >\n                        Da må leasingselskapet gi deg noen detaljer som du må skrive inn\n                        under.\n                    </RadioBlock>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$27 = "import { useState } from 'react';\nimport { RadioBlock, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState('you');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvem eier bilen du skal forsikre?\"\n            name=\"owner\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioBlock {...inputProps} label=\"Du\" value=\"you\" />\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Ektefelle, samboer eller registrert partner\"\n                        showChildren={true}\n                        value=\"partner\"\n                    >\n                        Da må ektefelle, samboer eller registrert partner skrive inn\n                        detaljene sine under.\n                    </RadioBlock>\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Leasingselskap\"\n                        value=\"leasing-company\"\n                    >\n                        Da må leasingselskapet gi deg noen detaljer som du må skrive inn\n                        under.\n                    </RadioBlock>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$27 = "import { useState } from 'react';\nimport { RadioBlock, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$27 = ["react","@sb1/ffe-form-react"];
const sourceFileName$27 = "form/RadioBlock.jsx";

var form_RadioBlock = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$27,
  code: code$27,
  sourceCode: sourceCode$27,
  sourceImports: sourceImports$27,
  dependencies: dependencies$27,
  sourceFileName: sourceFileName$27
});

const scope$26 = {Checkbox};
const code$26 = "<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label ffe-form-label--block\">\n        Hvilke aviser leser du?\n    </legend>\n    <Checkbox name=\"newspapers\" value=\"vg\">\n        VG\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"dagbladet\">\n        Dagbladet\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"aftenposten\">\n        Aftenposten\n    </Checkbox>\n</fieldset>";
const sourceCode$26 = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label ffe-form-label--block\">\n        Hvilke aviser leser du?\n    </legend>\n    <Checkbox name=\"newspapers\" value=\"vg\">\n        VG\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"dagbladet\">\n        Dagbladet\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"aftenposten\">\n        Aftenposten\n    </Checkbox>\n</fieldset>\n";
const sourceImports$26 = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$26 = ["@sb1/ffe-form-react"];
const sourceFileName$26 = "form/Checkbox.jsx";

var form_Checkbox = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$26,
  code: code$26,
  sourceCode: sourceCode$26,
  sourceImports: sourceImports$26,
  dependencies: dependencies$26,
  sourceFileName: sourceFileName$26
});

const scope$25 = {Checkbox};
const code$25 = "<Checkbox>\n    {labelProps => <label htmlFor={labelProps.htmlFor} className={labelProps.className}>\n        Her benyttes render props\n    </label>}\n</Checkbox>";
const sourceCode$25 = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox>\n    {labelProps => <label htmlFor={labelProps.htmlFor} className={labelProps.className}>\n        Her benyttes render props\n    </label>}\n</Checkbox>\n";
const sourceImports$25 = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$25 = ["@sb1/ffe-form-react"];
const sourceFileName$25 = "form/Checkbox-renderProps.jsx";

var form_Checkbox_renderProps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$25,
  code: code$25,
  sourceCode: sourceCode$25,
  sourceImports: sourceImports$25,
  dependencies: dependencies$25,
  sourceFileName: sourceFileName$25
});

const scope$24 = {InputGroup,Input,ErrorFieldMessage};
const code$24 = "<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>";
const sourceCode$24 = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';\n\n<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>\n";
const sourceImports$24 = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$24 = ["@sb1/ffe-form-react"];
const sourceFileName$24 = "form/InputGroup-fieldMessage.jsx";

var form_InputGroup_fieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$24,
  code: code$24,
  sourceCode: sourceCode$24,
  sourceImports: sourceImports$24,
  dependencies: dependencies$24,
  sourceFileName: sourceFileName$24
});

const scope$23 = {Checkbox};
const code$23 = "<Checkbox\n    defaultChecked={true}\n    aria-label=\"Jeg har en ingen label\"\n    hiddenLabel={true}\n    inline={false}\n/>";
const sourceCode$23 = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox\n    defaultChecked={true}\n    aria-label=\"Jeg har en ingen label\"\n    hiddenLabel={true}\n    inline={false}\n/>\n";
const sourceImports$23 = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$23 = ["@sb1/ffe-form-react"];
const sourceFileName$23 = "form/Checkbox-hiddenLabel.jsx";

var form_Checkbox_hiddenLabel = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$23,
  code: code$23,
  sourceCode: sourceCode$23,
  sourceImports: sourceImports$23,
  dependencies: dependencies$23,
  sourceFileName: sourceFileName$23
});

const scope$22 = {Input,Paragraph};
const code$22 = "<Paragraph>\n    Jeg er{' '}\n    <Input\n        aria-label=\"Skriv inn alder\"\n        style={{ width: '47px' }}\n        textLike={true}\n    />{' '}\n    år gammel\n</Paragraph>";
const sourceCode$22 = "import { Input } from '@sb1/ffe-form-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<Paragraph>\n    Jeg er{' '}\n    <Input\n        aria-label=\"Skriv inn alder\"\n        style={{ width: '47px' }}\n        textLike={true}\n    />{' '}\n    år gammel\n</Paragraph>\n";
const sourceImports$22 = "import { Input } from '@sb1/ffe-form-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$22 = ["@sb1/ffe-form-react","@sb1/ffe-core-react"];
const sourceFileName$22 = "form/Input-textLike.jsx";

var form_Input_textLike = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$22,
  code: code$22,
  sourceCode: sourceCode$22,
  sourceImports: sourceImports$22,
  dependencies: dependencies$22,
  sourceFileName: sourceFileName$22
});

const scope$21 = {Input,Label};
const code$21 = "<>\n    <Label htmlFor=\"input-first-name\">Fornavn</Label>\n    <Input id=\"input-first-name\" />\n</>";
const sourceCode$21 = "import { Input, Label } from '@sb1/ffe-form-react';\n\n<>\n    <Label htmlFor=\"input-first-name\">Fornavn</Label>\n    <Input id=\"input-first-name\" />\n</>\n";
const sourceImports$21 = "import { Input, Label } from '@sb1/ffe-form-react';";
const dependencies$21 = ["@sb1/ffe-form-react"];
const sourceFileName$21 = "form/Input.jsx";

var form_Input = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$21,
  code: code$21,
  sourceCode: sourceCode$21,
  sourceImports: sourceImports$21,
  dependencies: dependencies$21,
  sourceFileName: sourceFileName$21
});

const scope$20 = {Tooltip};
const code$20 = "<Tooltip>Dette er lurt å tenke på</Tooltip>";
const sourceCode$20 = "import { Tooltip } from '@sb1/ffe-form-react';\n\n<Tooltip>Dette er lurt å tenke på</Tooltip>\n";
const sourceImports$20 = "import { Tooltip } from '@sb1/ffe-form-react';";
const dependencies$20 = ["@sb1/ffe-form-react"];
const sourceFileName$20 = "form/Tooltip.jsx";

var form_Tooltip = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$20,
  code: code$20,
  sourceCode: sourceCode$20,
  sourceImports: sourceImports$20,
  dependencies: dependencies$20,
  sourceFileName: sourceFileName$20
});

const scope$1$ = {useState,RadioSwitch,RadioButtonInputGroup};
const code$1$ = "() => {\n    const [selected, setSelected] = useState('n');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"y\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"n\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$1$ = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState('n');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"y\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"n\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n\n";
const sourceImports$1$ = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1$ = ["react","@sb1/ffe-form-react"];
const sourceFileName$1$ = "form/RadioSwitch-selectedValue.jsx";

var form_RadioSwitch_selectedValue = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1$,
  code: code$1$,
  sourceCode: sourceCode$1$,
  sourceImports: sourceImports$1$,
  dependencies: dependencies$1$,
  sourceFileName: sourceFileName$1$
});

const scope$1_ = {Checkbox};
const code$1_ = "<Checkbox\n    name=\"clicked\"\n    onChange={e => alert(`Nå er jeg ${e.target.checked ? 'på' : 'av'}!`)}\n>\n    Trykk for å lære litt om meg\n</Checkbox>";
const sourceCode$1_ = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox\n    name=\"clicked\"\n    onChange={e => alert(`Nå er jeg ${e.target.checked ? 'på' : 'av'}!`)}\n>\n    Trykk for å lære litt om meg\n</Checkbox>\n";
const sourceImports$1_ = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$1_ = ["@sb1/ffe-form-react"];
const sourceFileName$1_ = "form/Checkbox-onChange.jsx";

var form_Checkbox_onChange = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1_,
  code: code$1_,
  sourceCode: sourceCode$1_,
  sourceImports: sourceImports$1_,
  dependencies: dependencies$1_,
  sourceFileName: sourceFileName$1_
});

const scope$1Z = {InfoFieldMessage};
const code$1Z = "<InfoFieldMessage>Husk på det her</InfoFieldMessage>";
const sourceCode$1Z = "import { InfoFieldMessage } from '@sb1/ffe-form-react';\n\n<InfoFieldMessage>Husk på det her</InfoFieldMessage>\n";
const sourceImports$1Z = "import { InfoFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$1Z = ["@sb1/ffe-form-react"];
const sourceFileName$1Z = "form/InfoFieldMessage.jsx";

var form_InfoFieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1Z,
  code: code$1Z,
  sourceCode: sourceCode$1Z,
  sourceImports: sourceImports$1Z,
  dependencies: dependencies$1Z,
  sourceFileName: sourceFileName$1Z
});

const scope$1Y = {Input,ButtonGroup,PrimaryButton};
const code$1Y = "class Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <Input ref={this.inputRef} placeholder=\"Trykk på knappen\" />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}";
const sourceCode$1Y = "import { Input } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';\n\nclass Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <Input ref={this.inputRef} placeholder=\"Trykk på knappen\" />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}\n";
const sourceImports$1Y = "import { Input } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$1Y = ["@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$1Y = "form/Input-ref.jsx";

var form_Input_ref = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1Y,
  code: code$1Y,
  sourceCode: sourceCode$1Y,
  sourceImports: sourceImports$1Y,
  dependencies: dependencies$1Y,
  sourceFileName: sourceFileName$1Y
});

const scope$1X = {useState,RadioButtonInputGroup,RadioBlock,RadioSwitch,RadioButton,Tooltip,SecondaryButton};
const code$1X = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (<>\n        <div className=\"ffe-button-group\">\n            <SecondaryButton onClick={() => setShowErrors(!showErrors)} >\n                Skru feilmeldinger av/på\n            </SecondaryButton>\n        </div>\n        <RadioButtonInputGroup\n            extraMargin={false}\n            label=\"Hva er din favorittfarge?\"\n            inline={true}\n            name=\"color\"\n            fieldMessage={showErrors ? 'Feil farge.' : null}\n            tooltip={\n                <Tooltip>Din favorittfarge er viktig for oss. Vår er blå!</Tooltip>\n            }\n            selectedValue={selectedColor}\n            onChange={e => setSelectedColor(e.target.value )}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"red\">\n                        Rød\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"blue\">\n                        Blå\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"yellow\">\n                        Gul\n                    </RadioButton>\n                    <p>Ekstra innhold</p>\n                </>\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            extraMargin={false}\n            label=\"Hva er din favorittlukt?\"\n            inline={true}\n            name=\"smell\"\n            fieldMessage={showErrors ? 'Feil lukt.' : null}\n            selectedValue={selectedSmell}\n            onChange={e => setSelectedSmell(e.target.value )}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"grass\">\n                        Gress\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"asphalt\">\n                        Asfalt\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"pollen\">\n                        Pollen\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            extraMargin={false}\n            description=\"Du kan ikke velge begge\"\n            label=\"Velg ja eller nei\"\n            name=\"switch\"\n            fieldMessage={showErrors ? 'Feil valg' : null}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue={true}\n                    rightLabel=\"Nei\"\n                    rightValue={false}\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            extraMargin={false}\n            label=\"Velg ja eller nei\"\n            name=\"block1\"\n            selectedValue=\"yes\"\n            fieldMessage={showErrors ? 'Feil valg' : null}\n        >\n            {inputProps => (\n                <>\n                    <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Nei\"\n                        showChildren={true}\n                        value=\"no\"\n                    >\n                        Vil ikke!\n                    </RadioBlock>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    </>);\n}";
const sourceCode$1X = "import { useState } from 'react';\nimport { RadioButtonInputGroup, RadioBlock, RadioSwitch, RadioButton, Tooltip } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (<>\n        <div className=\"ffe-button-group\">\n            <SecondaryButton onClick={() => setShowErrors(!showErrors)} >\n                Skru feilmeldinger av/på\n            </SecondaryButton>\n        </div>\n        <RadioButtonInputGroup\n            extraMargin={false}\n            label=\"Hva er din favorittfarge?\"\n            inline={true}\n            name=\"color\"\n            fieldMessage={showErrors ? 'Feil farge.' : null}\n            tooltip={\n                <Tooltip>Din favorittfarge er viktig for oss. Vår er blå!</Tooltip>\n            }\n            selectedValue={selectedColor}\n            onChange={e => setSelectedColor(e.target.value )}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"red\">\n                        Rød\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"blue\">\n                        Blå\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"yellow\">\n                        Gul\n                    </RadioButton>\n                    <p>Ekstra innhold</p>\n                </>\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            extraMargin={false}\n            label=\"Hva er din favorittlukt?\"\n            inline={true}\n            name=\"smell\"\n            fieldMessage={showErrors ? 'Feil lukt.' : null}\n            selectedValue={selectedSmell}\n            onChange={e => setSelectedSmell(e.target.value )}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"grass\">\n                        Gress\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"asphalt\">\n                        Asfalt\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"pollen\">\n                        Pollen\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            extraMargin={false}\n            description=\"Du kan ikke velge begge\"\n            label=\"Velg ja eller nei\"\n            name=\"switch\"\n            fieldMessage={showErrors ? 'Feil valg' : null}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue={true}\n                    rightLabel=\"Nei\"\n                    rightValue={false}\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n\n        <RadioButtonInputGroup\n            extraMargin={false}\n            label=\"Velg ja eller nei\"\n            name=\"block1\"\n            selectedValue=\"yes\"\n            fieldMessage={showErrors ? 'Feil valg' : null}\n        >\n            {inputProps => (\n                <>\n                    <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Nei\"\n                        showChildren={true}\n                        value=\"no\"\n                    >\n                        Vil ikke!\n                    </RadioBlock>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    </>);\n}\n\n";
const sourceImports$1X = "import { useState } from 'react';\nimport { RadioButtonInputGroup, RadioBlock, RadioSwitch, RadioButton, Tooltip } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$1X = ["react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$1X = "form/RadioButtonInputGroup-extraMarginFalse.jsx";

var form_RadioButtonInputGroup_extraMarginFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1X,
  code: code$1X,
  sourceCode: sourceCode$1X,
  sourceImports: sourceImports$1X,
  dependencies: dependencies$1X,
  sourceFileName: sourceFileName$1X
});

const scope$1W = {useState,RadioButton,RadioButtonInputGroup};
const code$1W = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvordan vil du betale?\"\n            name=\"invoice\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.\"\n                        value=\"monthly\"\n                    >\n                        Månedlig fakturering\n                    </RadioButton>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Årlig fakturering er for deg som har stell på økonomien. Her sparer du mest penger!\"\n                        value=\"annually\"\n                    >\n                        Årlig fakturering\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n}";
const sourceCode$1W = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvordan vil du betale?\"\n            name=\"invoice\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.\"\n                        value=\"monthly\"\n                    >\n                        Månedlig fakturering\n                    </RadioButton>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Årlig fakturering er for deg som har stell på økonomien. Her sparer du mest penger!\"\n                        value=\"annually\"\n                    >\n                        Årlig fakturering\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n}\n";
const sourceImports$1W = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1W = ["react","@sb1/ffe-form-react"];
const sourceFileName$1W = "form/RadioButton-tooltip.jsx";

var form_RadioButton_tooltip = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1W,
  code: code$1W,
  sourceCode: sourceCode$1W,
  sourceImports: sourceImports$1W,
  dependencies: dependencies$1W,
  sourceFileName: sourceFileName$1W
});

const scope$1V = {useState,RadioSwitch,RadioButtonInputGroup};
const code$1V = "() => {\n    const [selected, setSelected] = useState('nei');\n    const fieldMessageLeasing = 'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Er bilen leaset?\"\n            name=\"hasLeasing\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage={fieldMessageLeasing}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$1V = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState('nei');\n    const fieldMessageLeasing = 'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Er bilen leaset?\"\n            name=\"hasLeasing\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage={fieldMessageLeasing}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n\n";
const sourceImports$1V = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1V = ["react","@sb1/ffe-form-react"];
const sourceFileName$1V = "form/RadioSwitch-fieldMessage.jsx";

var form_RadioSwitch_fieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1V,
  code: code$1V,
  sourceCode: sourceCode$1V,
  sourceImports: sourceImports$1V,
  dependencies: dependencies$1V,
  sourceFileName: sourceFileName$1V
});

const scope$1U = {InputGroup,Input};
const code$1U = "<InputGroup\n    label=\"Telefonnummer\"\n    description=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n>\n    <Input\n        type=\"tel\"\n        name=\"mobile\"\n        onChange={e => console.log('onChange', e.target.value)}\n        onBlur={e => console.log('onBlur', e.target.value)}\n    />\n</InputGroup>";
const sourceCode$1U = "import { InputGroup, Input } from '@sb1/ffe-form-react';\n\n<InputGroup\n    label=\"Telefonnummer\"\n    description=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n>\n    <Input\n        type=\"tel\"\n        name=\"mobile\"\n        onChange={e => console.log('onChange', e.target.value)}\n        onBlur={e => console.log('onBlur', e.target.value)}\n    />\n</InputGroup>\n";
const sourceImports$1U = "import { InputGroup, Input } from '@sb1/ffe-form-react';";
const dependencies$1U = ["@sb1/ffe-form-react"];
const sourceFileName$1U = "form/InputGroup-description.jsx";

var form_InputGroup_description = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1U,
  code: code$1U,
  sourceCode: sourceCode$1U,
  sourceImports: sourceImports$1U,
  dependencies: dependencies$1U,
  sourceFileName: sourceFileName$1U
});

const scope$1T = {useState,RadioSwitch,RadioButtonInputGroup};
const code$1T = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"true\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"false\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$1T = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"true\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"false\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$1T = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1T = ["react","@sb1/ffe-form-react"];
const sourceFileName$1T = "form/RadioSwitch.jsx";

var form_RadioSwitch = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1T,
  code: code$1T,
  sourceCode: sourceCode$1T,
  sourceImports: sourceImports$1T,
  dependencies: dependencies$1T,
  sourceFileName: sourceFileName$1T
});

const scope$1S = {useState,Collapse};
const code$1S = "() => {\n    const [isOpen, setOpen] = useState(false);\n    const [rand, setRand] = useState(Math.random());\n\n    return <>\n        <button onClick={() => setOpen(!isOpen)}>\n            {isOpen ? 'Collapse' : 'Expand'}\n        </button>\n        <Collapse isOpen={isOpen} onRest={() => setRand(Math.random())}>\n            <div>\n                <p>Hello world</p>\n                <p>Hello world</p>\n            </div>\n        </Collapse>\n        <p>This number will change on transition complete: {rand}</p>\n    </>;\n}";
const sourceCode$1S = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';\n\n() => {\n    const [isOpen, setOpen] = useState(false);\n    const [rand, setRand] = useState(Math.random());\n\n    return <>\n        <button onClick={() => setOpen(!isOpen)}>\n            {isOpen ? 'Collapse' : 'Expand'}\n        </button>\n        <Collapse isOpen={isOpen} onRest={() => setRand(Math.random())}>\n            <div>\n                <p>Hello world</p>\n                <p>Hello world</p>\n            </div>\n        </Collapse>\n        <p>This number will change on transition complete: {rand}</p>\n    </>;\n}\n\n";
const sourceImports$1S = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';";
const dependencies$1S = ["react","@sb1/ffe-collapse-react"];
const sourceFileName$1S = "collapse/Collapse-onRest.jsx";

var collapse_Collapse_onRest = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1S,
  code: code$1S,
  sourceCode: sourceCode$1S,
  sourceImports: sourceImports$1S,
  dependencies: dependencies$1S,
  sourceFileName: sourceFileName$1S
});

const scope$1R = {useState,Collapse};
const code$1R = "() => {\n    const [isOpen, setOpen] = useState(false);\n\n    return <>\n        <button onClick={() => setOpen(!isOpen)}>\n            {isOpen ? 'Collapse' : 'Expand'}\n        </button>\n        <Collapse isOpen={isOpen}>\n            <div>\n                <p>Hello world</p>\n                <p>Hello world</p>\n            </div>\n        </Collapse>\n    </>;\n}";
const sourceCode$1R = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';\n\n\n() => {\n    const [isOpen, setOpen] = useState(false);\n\n    return <>\n        <button onClick={() => setOpen(!isOpen)}>\n            {isOpen ? 'Collapse' : 'Expand'}\n        </button>\n        <Collapse isOpen={isOpen}>\n            <div>\n                <p>Hello world</p>\n                <p>Hello world</p>\n            </div>\n        </Collapse>\n    </>;\n}\n";
const sourceImports$1R = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';";
const dependencies$1R = ["react","@sb1/ffe-collapse-react"];
const sourceFileName$1R = "collapse/Collapse.jsx";

var collapse_Collapse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1R,
  code: code$1R,
  sourceCode: sourceCode$1R,
  sourceImports: sourceImports$1R,
  dependencies: dependencies$1R,
  sourceFileName: sourceFileName$1R
});

const scope$1Q = {DetailList,Detail,DetailContent,TertiaryButton};
const code$1Q = "<DetailList>\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n    </Detail>\n\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n</DetailList>";
const sourceCode$1Q = "import { DetailList, Detail, DetailContent } from '@sb1/ffe-details-list-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\n\n<DetailList>\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n    </Detail>\n\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n</DetailList>\n";
const sourceImports$1Q = "import { DetailList, Detail, DetailContent } from '@sb1/ffe-details-list-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$1Q = ["@sb1/ffe-details-list-react","@sb1/ffe-buttons-react"];
const sourceFileName$1Q = "details-list/DetailList.jsx";

var details_list_DetailList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1Q,
  code: code$1Q,
  sourceCode: sourceCode$1Q,
  sourceImports: sourceImports$1Q,
  dependencies: dependencies$1Q,
  sourceFileName: sourceFileName$1Q
});

const scope$1P = {Table,TertiaryButton,HakeIkon,KryssIkon};
const code$1P = "() => {\n    const generateCheckbox = value => {\n        return (\n            <div style={{ width: '100%', textAlign: 'center' }}>\n                {value ? (\n                    <HakeIkon className=\"ffe-table__expand-icon\" />\n                ) : (\n                    <KryssIkon className=\"ffe-table__expand-icon\" />\n                )}\n            </div>\n        );\n    };\n\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ].map(d => ({\n        syntetic: d.age > 18 && formatNumber(d.networth) > 10000,\n        ...d\n    }));\n\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const ageSum = data\n        .map(e => e.age)\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const networthSum = data\n        .map(e => formatNumber(e.networth))\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const columnsAdvanced = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        { key: 'email', header: 'E-post', hideOnTablet: true, hideOnMobile: true },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: ageSum / data.length,\n            alignRight: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {value} {value > 18 ? ' (voksen)' : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Syntetisk felt',\n            alignRight: true,\n            notSortable: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {props.cells.age > 18 &&\n                        formatNumber(props.cells.networth) > 10000\n                            ? 'voksen, formue > 10000'\n                            : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Sparing',\n            alignRight: true,\n            columnHeaderRender: (\n                value,\n                dataWindow,\n                spanProps,\n                thProps,\n                columns,\n            ) => {\n                const dataWindowSum = dataWindow\n                    .map(e => (e.syntetic ? 1 : 0))\n                    .reduce((total, num) => {\n                        return total + num;\n                    });\n                return (\n                    <th key={thProps.key} {...thProps}>\n                        <span {...spanProps}>\n                            {value} ({dataWindowSum})\n                        </span>\n                    </th>\n                );\n            },\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {' '}\n                        {value ? generateCheckbox(value) : generateCheckbox(false)}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n\n            columnFooterRender: (\n                value,\n                dataWindow,\n                tdPorps,\n                spanProps,\n                columns,\n                index,\n            ) => {\n                return (\n                    <th key={tdPorps.key} {...tdPorps}>\n                        <span {...spanProps}>\n                            {Number(networthSum / 4).toFixed(2)}\n                        </span>\n                    </th>\n                );\n            },\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n    <Table\n        columns={columnsAdvanced}\n        data={data}\n        expandedContentMapper={expandedContentMapper}\n        sortable={true}\n        sortBy={'age'}\n        descending={true}\n        condensed={true}\n        smallHeader={true}\n        columnLayoutMobile={true}\n        breakpoint={'none'}\n        caption=\"Masse spennende data\"\n        onSort={onSort}\n        headerRender={(trprops, columns) => {\n            return (\n                <>\n                    <tr {...trprops}>\n                        <th\n                            colSpan={3}\n                            className=\"ffe-table__heading\"\n                            style={{ textAlign: 'center' }}\n                        >\n                            Personlig\n                        </th>\n                        <th colSpan={2} className=\"ffe-table__heading\" />\n                        <th colSpan={3} className=\"ffe-table__heading\">\n                            Overskrift\n                        </th>\n                    </tr>\n                    <tr {...trprops} />\n                </>\n            );\n        }}\n        footerRender={(trprops, columns) => {\n            return (\n                <>\n                    <tr {...trprops} />\n                    <tr {...trprops}>\n                        <td className=\"ffe-table__cell\" data-th=\"Navn\">\n                            <span className=\"ffe-table__content\">Total</span>\n                        </td>\n                        <td className=\"ffe-table__cell\" data-th=\"E-post\">\n                            <span className=\"ffe-table__content\" />\n                        </td>\n                        <td className=\"ffe-table__cell\" data-th=\"Alder\">\n                            <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                        </td>\n                        <td className=\"ffe-table__cell\" data-th=\"Syntetisk felt\">\n                            <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                        </td>\n                        <td className=\"ffe-table__cell\" />\n                        <th className=\"ffe-table__cell\" data-th=\"Formue\">\n                            <span className=\"ffe-table__content ffe-table__content--text-right\">\n                                {networthSum}\n                            </span>\n                        </th>\n                        <td className=\"ffe-table__cell\" data-th=\"Poke\">\n                            <span className=\"ffe-table__content\" />\n                        </td>\n                        <td className=\"ffe-table__cell\" data-th=\"\">\n                            <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                        </td>\n                    </tr>\n                </>\n            );\n        }}\n        rowRender={(trprops, props, index) => {\n            const oddEvenClassName = index % 2 === 1 ? 'is-odd' : 'is-even';\n            return (\n                <tr\n                    {...trprops}\n                    className={`${trprops.className} ffe-table__row-expandable ${oddEvenClassName}`}\n                    onClick={event => {\n                        console.log('rowRenderClick!', index);\n                        trprops.onClick && trprops.onClick(event);\n                    }}\n                    title={props.cells.name}\n                >\n                    {trprops.children}\n                </tr>\n            );\n        }}\n    />);\n}";
const sourceCode$1P = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\nimport { HakeIkon, KryssIkon } from '@sb1/ffe-icons-react';\n\n\n() => {\n    const generateCheckbox = value => {\n        return (\n            <div style={{ width: '100%', textAlign: 'center' }}>\n                {value ? (\n                    <HakeIkon className=\"ffe-table__expand-icon\" />\n                ) : (\n                    <KryssIkon className=\"ffe-table__expand-icon\" />\n                )}\n            </div>\n        );\n    };\n\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ].map(d => ({\n        syntetic: d.age > 18 && formatNumber(d.networth) > 10000,\n        ...d\n    }));\n\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const ageSum = data\n        .map(e => e.age)\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const networthSum = data\n        .map(e => formatNumber(e.networth))\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const columnsAdvanced = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        { key: 'email', header: 'E-post', hideOnTablet: true, hideOnMobile: true },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: ageSum / data.length,\n            alignRight: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {value} {value > 18 ? ' (voksen)' : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Syntetisk felt',\n            alignRight: true,\n            notSortable: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {props.cells.age > 18 &&\n                        formatNumber(props.cells.networth) > 10000\n                            ? 'voksen, formue > 10000'\n                            : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Sparing',\n            alignRight: true,\n            columnHeaderRender: (\n                value,\n                dataWindow,\n                spanProps,\n                thProps,\n                columns,\n            ) => {\n                const dataWindowSum = dataWindow\n                    .map(e => (e.syntetic ? 1 : 0))\n                    .reduce((total, num) => {\n                        return total + num;\n                    });\n                return (\n                    <th key={thProps.key} {...thProps}>\n                        <span {...spanProps}>\n                            {value} ({dataWindowSum})\n                        </span>\n                    </th>\n                );\n            },\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {' '}\n                        {value ? generateCheckbox(value) : generateCheckbox(false)}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n\n            columnFooterRender: (\n                value,\n                dataWindow,\n                tdPorps,\n                spanProps,\n                columns,\n                index,\n            ) => {\n                return (\n                    <th key={tdPorps.key} {...tdPorps}>\n                        <span {...spanProps}>\n                            {Number(networthSum / 4).toFixed(2)}\n                        </span>\n                    </th>\n                );\n            },\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n    <Table\n        columns={columnsAdvanced}\n        data={data}\n        expandedContentMapper={expandedContentMapper}\n        sortable={true}\n        sortBy={'age'}\n        descending={true}\n        condensed={true}\n        smallHeader={true}\n        columnLayoutMobile={true}\n        breakpoint={'none'}\n        caption=\"Masse spennende data\"\n        onSort={onSort}\n        headerRender={(trprops, columns) => {\n            return (\n                <>\n                    <tr {...trprops}>\n                        <th\n                            colSpan={3}\n                            className=\"ffe-table__heading\"\n                            style={{ textAlign: 'center' }}\n                        >\n                            Personlig\n                        </th>\n                        <th colSpan={2} className=\"ffe-table__heading\" />\n                        <th colSpan={3} className=\"ffe-table__heading\">\n                            Overskrift\n                        </th>\n                    </tr>\n                    <tr {...trprops} />\n                </>\n            );\n        }}\n        footerRender={(trprops, columns) => {\n            return (\n                <>\n                    <tr {...trprops} />\n                    <tr {...trprops}>\n                        <td className=\"ffe-table__cell\" data-th=\"Navn\">\n                            <span className=\"ffe-table__content\">Total</span>\n                        </td>\n                        <td className=\"ffe-table__cell\" data-th=\"E-post\">\n                            <span className=\"ffe-table__content\" />\n                        </td>\n                        <td className=\"ffe-table__cell\" data-th=\"Alder\">\n                            <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                        </td>\n                        <td className=\"ffe-table__cell\" data-th=\"Syntetisk felt\">\n                            <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                        </td>\n                        <td className=\"ffe-table__cell\" />\n                        <th className=\"ffe-table__cell\" data-th=\"Formue\">\n                            <span className=\"ffe-table__content ffe-table__content--text-right\">\n                                {networthSum}\n                            </span>\n                        </th>\n                        <td className=\"ffe-table__cell\" data-th=\"Poke\">\n                            <span className=\"ffe-table__content\" />\n                        </td>\n                        <td className=\"ffe-table__cell\" data-th=\"\">\n                            <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                        </td>\n                    </tr>\n                </>\n            );\n        }}\n        rowRender={(trprops, props, index) => {\n            const oddEvenClassName = index % 2 === 1 ? 'is-odd' : 'is-even';\n            return (\n                <tr\n                    {...trprops}\n                    className={`${trprops.className} ffe-table__row-expandable ${oddEvenClassName}`}\n                    onClick={event => {\n                        console.log('rowRenderClick!', index);\n                        trprops.onClick && trprops.onClick(event);\n                    }}\n                    title={props.cells.name}\n                >\n                    {trprops.children}\n                </tr>\n            );\n        }}\n    />);\n}\n";
const sourceImports$1P = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\nimport { HakeIkon, KryssIkon } from '@sb1/ffe-icons-react';";
const dependencies$1P = ["@sb1/ffe-tables-react","@sb1/ffe-buttons-react","@sb1/ffe-icons-react"];
const sourceFileName$1P = "tables/Table-customRender.jsx";

var tables_Table_customRender = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1P,
  code: code$1P,
  sourceCode: sourceCode$1P,
  sourceImports: sourceImports$1P,
  dependencies: dependencies$1P,
  sourceFileName: sourceFileName$1P
});

const scope$1O = {Table,TertiaryButton};
const code$1O = "() => {\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ];\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        { key: 'email', header: 'E-post', hideOnTablet: true, hideOnMobile: true },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: '29',\n            alignRight: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            sortable={true}\n            sortBy={'age'}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data\"\n            onSort={onSort}\n        />\n    );\n}";
const sourceCode$1O = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ];\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        { key: 'email', header: 'E-post', hideOnTablet: true, hideOnMobile: true },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: '29',\n            alignRight: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            sortable={true}\n            sortBy={'age'}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data\"\n            onSort={onSort}\n        />\n    );\n}\n";
const sourceImports$1O = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$1O = ["@sb1/ffe-tables-react","@sb1/ffe-buttons-react"];
const sourceFileName$1O = "tables/Table-advanced.jsx";

var tables_Table_advanced = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1O,
  code: code$1O,
  sourceCode: sourceCode$1O,
  sourceImports: sourceImports$1O,
  dependencies: dependencies$1O,
  sourceFileName: sourceFileName$1O
});

const scope$1N = {Table};
const code$1N = "() => {\n    const columns = [\n        { key: 'name', header: 'Navn' },\n        { key: 'age', header: 'Alder' },\n    ];\n    const data = [\n        { name: 'Anders', age: 32 },\n        { name: 'Erik', age: 25 },\n        { name: 'Gunn', age: 29 },\n        { name: 'Safi', age: 42 },\n        { name: 'Sandra', age: 42 },\n    ];\n\n    return (<Table caption=\"Utviklere\" columns={columns} data={data} />);\n}";
const sourceCode$1N = "import Table from '@sb1/ffe-tables-react';\n\n() => {\n    const columns = [\n        { key: 'name', header: 'Navn' },\n        { key: 'age', header: 'Alder' },\n    ];\n    const data = [\n        { name: 'Anders', age: 32 },\n        { name: 'Erik', age: 25 },\n        { name: 'Gunn', age: 29 },\n        { name: 'Safi', age: 42 },\n        { name: 'Sandra', age: 42 },\n    ];\n\n    return (<Table caption=\"Utviklere\" columns={columns} data={data} />);\n}\n";
const sourceImports$1N = "import Table from '@sb1/ffe-tables-react';";
const dependencies$1N = ["@sb1/ffe-tables-react"];
const sourceFileName$1N = "tables/Table.jsx";

var tables_Table = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1N,
  code: code$1N,
  sourceCode: sourceCode$1N,
  sourceImports: sourceImports$1N,
  dependencies: dependencies$1N,
  sourceFileName: sourceFileName$1N
});

const scope$1M = {Table};
const code$1M = "() => {\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            info: 'mer spennende info',\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            info: 'mer spennende info',\n            defaultExpanded: true,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            info: 'mer spennende info',\n        },\n    ];\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        { key: 'email', header: 'E-post', hideOnTablet: true, hideOnMobile: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row => row.info && <span>Info: {row.info}</span>;\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data, med en rad som er ekspandert\"\n        />\n    );\n}";
const sourceCode$1M = "import Table from '@sb1/ffe-tables-react';\n\n() => {\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            info: 'mer spennende info',\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            info: 'mer spennende info',\n            defaultExpanded: true,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            info: 'mer spennende info',\n        },\n    ];\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        { key: 'email', header: 'E-post', hideOnTablet: true, hideOnMobile: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row => row.info && <span>Info: {row.info}</span>;\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data, med en rad som er ekspandert\"\n        />\n    );\n}\n";
const sourceImports$1M = "import Table from '@sb1/ffe-tables-react';";
const dependencies$1M = ["@sb1/ffe-tables-react"];
const sourceFileName$1M = "tables/Table-expandedContentMapper.jsx";

var tables_Table_expandedContentMapper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1M,
  code: code$1M,
  sourceCode: sourceCode$1M,
  sourceImports: sourceImports$1M,
  dependencies: dependencies$1M,
  sourceFileName: sourceFileName$1M
});

const scope$1L = {Accordion,AccordionItem};
const code$1L = "<Accordion headingLevel={2}>\n    <AccordionItem heading=\"Tittel\">Skjult innhold</AccordionItem>\n    <AccordionItem heading={<span>Enda en tittel</span>}>\n        Mer skjult innhold\n    </AccordionItem>\n    <AccordionItem heading=\"En siste tittel\">Enda mer innhold</AccordionItem>\n</Accordion>";
const sourceCode$1L = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';\n\n<Accordion headingLevel={2}>\n    <AccordionItem heading=\"Tittel\">Skjult innhold</AccordionItem>\n    <AccordionItem heading={<span>Enda en tittel</span>}>\n        Mer skjult innhold\n    </AccordionItem>\n    <AccordionItem heading=\"En siste tittel\">Enda mer innhold</AccordionItem>\n</Accordion>\n";
const sourceImports$1L = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';";
const dependencies$1L = ["@sb1/ffe-accordion-react"];
const sourceFileName$1L = "accordion/Accordion.jsx";

var accordion_Accordion = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1L,
  code: code$1L,
  sourceCode: sourceCode$1L,
  sourceImports: sourceImports$1L,
  dependencies: dependencies$1L,
  sourceFileName: sourceFileName$1L
});

const scope$1K = {useState,Accordion,AccordionItem};
const code$1K = "() => {\n    const [openElementId, setOpenElementId] = useState(0);\n\n    const createOnToggleOpenHandler = id => isOpen => {\n        if (isOpen) {\n            setOpenElementId(id);\n        }\n    };\n\n    return (\n        <Accordion headingLevel={3}>\n            <AccordionItem\n                isOpen={openElementId === 0}\n                onToggleOpen={createOnToggleOpenHandler(0)}\n                heading=\"Starter åpen\"\n            >\n                Element med ID=0\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 1}\n                onToggleOpen={createOnToggleOpenHandler(1)}\n                heading=\"Starter lukket\"\n            >\n                Element med ID=1\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 2}\n                onToggleOpen={createOnToggleOpenHandler(2)}\n                heading=\"Starter også lukket\"\n            >\n                Element med ID=2\n            </AccordionItem>\n        </Accordion>\n    );\n}";
const sourceCode$1K = "import { useState } from 'react';\nimport { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';\n\n() => {\n    const [openElementId, setOpenElementId] = useState(0);\n\n    const createOnToggleOpenHandler = id => isOpen => {\n        if (isOpen) {\n            setOpenElementId(id);\n        }\n    };\n\n    return (\n        <Accordion headingLevel={3}>\n            <AccordionItem\n                isOpen={openElementId === 0}\n                onToggleOpen={createOnToggleOpenHandler(0)}\n                heading=\"Starter åpen\"\n            >\n                Element med ID=0\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 1}\n                onToggleOpen={createOnToggleOpenHandler(1)}\n                heading=\"Starter lukket\"\n            >\n                Element med ID=1\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 2}\n                onToggleOpen={createOnToggleOpenHandler(2)}\n                heading=\"Starter også lukket\"\n            >\n                Element med ID=2\n            </AccordionItem>\n        </Accordion>\n    );\n}\n";
const sourceImports$1K = "import { useState } from 'react';\nimport { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';";
const dependencies$1K = ["react","@sb1/ffe-accordion-react"];
const sourceFileName$1K = "accordion/Accordion-managed.jsx";

var accordion_Accordion_managed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1K,
  code: code$1K,
  sourceCode: sourceCode$1K,
  sourceImports: sourceImports$1K,
  dependencies: dependencies$1K,
  sourceFileName: sourceFileName$1K
});

const scope$1J = {Accordion,AccordionItem};
const code$1J = "<Accordion headingLevel={3}>\n    <AccordionItem defaultOpen={true} heading=\"Åpen!\">\n        Her er info du kan se med EN gang!\n    </AccordionItem>\n    <AccordionItem heading=\"Lukket\">Skjult innhold</AccordionItem>\n    <AccordionItem heading=\"Denne er også lukket\">\n        Enda mer innhold\n    </AccordionItem>\n</Accordion>";
const sourceCode$1J = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';\n\n<Accordion headingLevel={3}>\n    <AccordionItem defaultOpen={true} heading=\"Åpen!\">\n        Her er info du kan se med EN gang!\n    </AccordionItem>\n    <AccordionItem heading=\"Lukket\">Skjult innhold</AccordionItem>\n    <AccordionItem heading=\"Denne er også lukket\">\n        Enda mer innhold\n    </AccordionItem>\n</Accordion>\n";
const sourceImports$1J = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';";
const dependencies$1J = ["@sb1/ffe-accordion-react"];
const sourceFileName$1J = "accordion/Accordion-open.jsx";

var accordion_Accordion_open = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1J,
  code: code$1J,
  sourceCode: sourceCode$1J,
  sourceImports: sourceImports$1J,
  dependencies: dependencies$1J,
  sourceFileName: sourceFileName$1J
});

const scope$1I = {IconCard,KryssSirkelIkon};
const code$1I = "<IconCard\n    icon={<KryssSirkelIkon style={{ transform: 'rotate(45deg)' }} />}\n    greyCharcoal={true}\n    condensed={true}\n>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Start ny sparing</Title>\n            <Subtext>Det er mange måter å spare på</Subtext>\n        </>\n    )}\n</IconCard>";
const sourceCode$1I = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { KryssSirkelIkon } from '@sb1/ffe-icons-react';\n\n<IconCard\n    icon={<KryssSirkelIkon style={{ transform: 'rotate(45deg)' }} />}\n    greyCharcoal={true}\n    condensed={true}\n>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Start ny sparing</Title>\n            <Subtext>Det er mange måter å spare på</Subtext>\n        </>\n    )}\n</IconCard>\n";
const sourceImports$1I = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { KryssSirkelIkon } from '@sb1/ffe-icons-react';";
const dependencies$1I = ["@sb1/ffe-cards-react","@sb1/ffe-icons-react"];
const sourceFileName$1I = "cards/IconCard-greyCharcoal.jsx";

var cards_IconCard_greyCharcoal = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1I,
  code: code$1I,
  sourceCode: sourceCode$1I,
  sourceImports: sourceImports$1I,
  dependencies: dependencies$1I,
  sourceFileName: sourceFileName$1I
});

const scope$1H = {IconCard,GrafOppIkon};
const code$1H = "<IconCard icon={<GrafOppIkon />}>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>Her kan man ha tekst</Text>\n        </>\n    )}\n</IconCard>";
const sourceCode$1H = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { GrafOppIkon } from '@sb1/ffe-icons-react';\n\n<IconCard icon={<GrafOppIkon />}>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>Her kan man ha tekst</Text>\n        </>\n    )}\n</IconCard>\n";
const sourceImports$1H = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { GrafOppIkon } from '@sb1/ffe-icons-react';";
const dependencies$1H = ["@sb1/ffe-cards-react","@sb1/ffe-icons-react"];
const sourceFileName$1H = "cards/IconCard.jsx";

var cards_IconCard = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1H,
  code: code$1H,
  sourceCode: sourceCode$1H,
  sourceImports: sourceImports$1H,
  dependencies: dependencies$1H,
  sourceFileName: sourceFileName$1H
});

const scope$1G = {CardBase};
const code$1G = "<CardBase>Dette er basisen for alle kort</CardBase>";
const sourceCode$1G = "import { CardBase } from '@sb1/ffe-cards-react';\n\n<CardBase>Dette er basisen for alle kort</CardBase>\n";
const sourceImports$1G = "import { CardBase } from '@sb1/ffe-cards-react';";
const dependencies$1G = ["@sb1/ffe-cards-react"];
const sourceFileName$1G = "cards/CardBase.jsx";

var cards_CardBase = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1G,
  code: code$1G,
  sourceCode: sourceCode$1G,
  sourceImports: sourceImports$1G,
  dependencies: dependencies$1G,
  sourceFileName: sourceFileName$1G
});

const scope$1F = {TextCard};
const code$1F = "<TextCard element=\"div\">\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext element=\"span\">Subtext er grå</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</TextCard>";
const sourceCode$1F = "import { TextCard } from '@sb1/ffe-cards-react';\n\n<TextCard element=\"div\">\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext element=\"span\">Subtext er grå</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</TextCard>\n";
const sourceImports$1F = "import { TextCard } from '@sb1/ffe-cards-react';";
const dependencies$1F = ["@sb1/ffe-cards-react"];
const sourceFileName$1F = "cards/TextCard.jsx";

var cards_TextCard = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1F,
  code: code$1F,
  sourceCode: sourceCode$1F,
  sourceImports: sourceImports$1F,
  dependencies: dependencies$1F,
  sourceFileName: sourceFileName$1F
});

const scope$1E = {IconCard,SparegrisIkon};
const code$1E = "<IconCard icon={<SparegrisIkon />} condensed={true}>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Sparekonto voksen 25</Title>\n            <Subtext>7 004,00</Subtext>\n        </>\n    )}\n</IconCard>";
const sourceCode$1E = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { SparegrisIkon } from '@sb1/ffe-icons-react';\n\n<IconCard icon={<SparegrisIkon />} condensed={true}>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Sparekonto voksen 25</Title>\n            <Subtext>7 004,00</Subtext>\n        </>\n    )}\n</IconCard>\n";
const sourceImports$1E = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { SparegrisIkon } from '@sb1/ffe-icons-react';";
const dependencies$1E = ["@sb1/ffe-cards-react","@sb1/ffe-icons-react"];
const sourceFileName$1E = "cards/IconCard-condensed.jsx";

var cards_IconCard_condensed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1E,
  code: code$1E,
  sourceCode: sourceCode$1E,
  sourceImports: sourceImports$1E,
  dependencies: dependencies$1E,
  sourceFileName: sourceFileName$1E
});

const scope$1D = {ImageCard};
const code$1D = "<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n            style={{ position: 'relative', bottom: '50px' }}\n        />\n    }\n>\n    {({ Title }) => <Title>Tittel</Title>}\n</ImageCard>";
const sourceCode$1D = "import { ImageCard } from '@sb1/ffe-cards-react';\n\n<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n            style={{ position: 'relative', bottom: '50px' }}\n        />\n    }\n>\n    {({ Title }) => <Title>Tittel</Title>}\n</ImageCard>\n";
const sourceImports$1D = "import { ImageCard } from '@sb1/ffe-cards-react';";
const dependencies$1D = ["@sb1/ffe-cards-react"];
const sourceFileName$1D = "cards/ImageCard-titleOnly.jsx";

var cards_ImageCard_titleOnly = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1D,
  code: code$1D,
  sourceCode: sourceCode$1D,
  sourceImports: sourceImports$1D,
  dependencies: dependencies$1D,
  sourceFileName: sourceFileName$1D
});

const scope$1C = {ImageCard};
const code$1C = "<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n        />\n    }\n>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                do eiusmod tempor incididunt ut labore et dolore magna\n                aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</ImageCard>";
const sourceCode$1C = "import { ImageCard } from '@sb1/ffe-cards-react';\n\n<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n        />\n    }\n>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                do eiusmod tempor incididunt ut labore et dolore magna\n                aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</ImageCard>\n";
const sourceImports$1C = "import { ImageCard } from '@sb1/ffe-cards-react';";
const dependencies$1C = ["@sb1/ffe-cards-react"];
const sourceFileName$1C = "cards/ImageCard.jsx";

var cards_ImageCard = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1C,
  code: code$1C,
  sourceCode: sourceCode$1C,
  sourceImports: sourceImports$1C,
  dependencies: dependencies$1C,
  sourceFileName: sourceFileName$1C
});

const scope$1B = {FileUpload};
const code$1B = "<FileUpload\n    id=\"ffe-file-upload-example\"\n    label={'Velg filer'}\n    title={'Dokumentasjon'}\n    infoText={\n        'Det kan være vanskelig å estimere fremtiden, derfor kan du laste opp eventuelle filer som viser til fremtidig budsjett eller inntjening.'\n    }\n    infoSubText={\n        'Husk å ikke laste opp personsensitive opplysninger eller dokumenter som bedriften ikke vil dele.'\n    }\n    uploadTitle={'Dra filene hit'}\n    uploadMicroText={'Eller'}\n    uploadSubText={'PDF-filer, maks 50 MB'}\n    files={{}}\n    cancelText={'Avbryt'}\n    deleteText={'Slett'}\n    onFileDeleted={() => {}}\n    onFilesSelected={() => {}}\n    onFilesDropped={() => {}}\n    multiple\n/>";
const sourceCode$1B = "import FileUpload from '@sb1/ffe-file-upload-react';\n\n<FileUpload\n    id=\"ffe-file-upload-example\"\n    label={'Velg filer'}\n    title={'Dokumentasjon'}\n    infoText={\n        'Det kan være vanskelig å estimere fremtiden, derfor kan du laste opp eventuelle filer som viser til fremtidig budsjett eller inntjening.'\n    }\n    infoSubText={\n        'Husk å ikke laste opp personsensitive opplysninger eller dokumenter som bedriften ikke vil dele.'\n    }\n    uploadTitle={'Dra filene hit'}\n    uploadMicroText={'Eller'}\n    uploadSubText={'PDF-filer, maks 50 MB'}\n    files={{}}\n    cancelText={'Avbryt'}\n    deleteText={'Slett'}\n    onFileDeleted={() => {}}\n    onFilesSelected={() => {}}\n    onFilesDropped={() => {}}\n    multiple\n/>\n";
const sourceImports$1B = "import FileUpload from '@sb1/ffe-file-upload-react';";
const dependencies$1B = ["@sb1/ffe-file-upload-react"];
const sourceFileName$1B = "file-upload/FileUpload.jsx";

var file_upload_FileUpload = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1B,
  code: code$1B,
  sourceCode: sourceCode$1B,
  sourceImports: sourceImports$1B,
  dependencies: dependencies$1B,
  sourceFileName: sourceFileName$1B
});

const scope$1A = {ContextErrorMessage};
const code$1A = "<ContextErrorMessage>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>";
const sourceCode$1A = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>\n";
const sourceImports$1A = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1A = ["@sb1/ffe-context-message-react"];
const sourceFileName$1A = "context-message/ContextErrorMessage.jsx";

var context_message_ContextErrorMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1A,
  code: code$1A,
  sourceCode: sourceCode$1A,
  sourceImports: sourceImports$1A,
  dependencies: dependencies$1A,
  sourceFileName: sourceFileName$1A
});

const scope$1z = {ContextSuccessMessage};
const code$1z = "<ContextSuccessMessage compact={true}>\n    En liten seier er fortsatt en seier!\n</ContextSuccessMessage>";
const sourceCode$1z = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage compact={true}>\n    En liten seier er fortsatt en seier!\n</ContextSuccessMessage>\n";
const sourceImports$1z = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1z = ["@sb1/ffe-context-message-react"];
const sourceFileName$1z = "context-message/ContextSuccessMessage-compact.jsx";

var context_message_ContextSuccessMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1z,
  code: code$1z,
  sourceCode: sourceCode$1z,
  sourceImports: sourceImports$1z,
  dependencies: dependencies$1z,
  sourceFileName: sourceFileName$1z
});

const scope$1y = {ContextInfoMessage};
const code$1y = "<ContextInfoMessage>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>";
const sourceCode$1y = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>\n\n";
const sourceImports$1y = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1y = ["@sb1/ffe-context-message-react"];
const sourceFileName$1y = "context-message/ContextInfoMessage.jsx";

var context_message_ContextInfoMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1y,
  code: code$1y,
  sourceCode: sourceCode$1y,
  sourceImports: sourceImports$1y,
  dependencies: dependencies$1y,
  sourceFileName: sourceFileName$1y
});

const scope$1x = {ContextInfoMessage};
const code$1x = "<ContextInfoMessage compact={true}>En liten beskjed</ContextInfoMessage>";
const sourceCode$1x = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage compact={true}>En liten beskjed</ContextInfoMessage>\n";
const sourceImports$1x = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1x = ["@sb1/ffe-context-message-react"];
const sourceFileName$1x = "context-message/ContextInfoMessage-compact.jsx";

var context_message_ContextInfoMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1x,
  code: code$1x,
  sourceCode: sourceCode$1x,
  sourceImports: sourceImports$1x,
  dependencies: dependencies$1x,
  sourceFileName: sourceFileName$1x
});

const scope$1w = {ContextTipMessage};
const code$1w = "<ContextTipMessage>\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>";
const sourceCode$1w = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\n\n<ContextTipMessage>\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>\n";
const sourceImports$1w = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1w = ["@sb1/ffe-context-message-react"];
const sourceFileName$1w = "context-message/ContextTipMessage.jsx";

var context_message_ContextTipMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1w,
  code: code$1w,
  sourceCode: sourceCode$1w,
  sourceImports: sourceImports$1w,
  dependencies: dependencies$1w,
  sourceFileName: sourceFileName$1w
});

const scope$1v = {ContextErrorMessage};
const code$1v = "<ContextErrorMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextErrorMessage>";
const sourceCode$1v = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextErrorMessage>\n";
const sourceImports$1v = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1v = ["@sb1/ffe-context-message-react"];
const sourceFileName$1v = "context-message/ContextErrorMessage-showCloseButton.jsx";

var context_message_ContextErrorMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1v,
  code: code$1v,
  sourceCode: sourceCode$1v,
  sourceImports: sourceImports$1v,
  dependencies: dependencies$1v,
  sourceFileName: sourceFileName$1v
});

const scope$1u = {ContextErrorMessage};
const code$1u = "<ContextErrorMessage headerText=\"Opps...\">\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>";
const sourceCode$1u = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage headerText=\"Opps...\">\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>\n";
const sourceImports$1u = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1u = ["@sb1/ffe-context-message-react"];
const sourceFileName$1u = "context-message/ContextErrorMessage-header.jsx";

var context_message_ContextErrorMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1u,
  code: code$1u,
  sourceCode: sourceCode$1u,
  sourceImports: sourceImports$1u,
  dependencies: dependencies$1u,
  sourceFileName: sourceFileName$1u
});

const scope$1t = {ContextInfoMessage,InfoIkon};
const code$1t = "<ContextInfoMessage icon={<InfoIkon />}>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;";
const sourceCode$1t = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\nimport { InfoIkon } from '@sb1/ffe-icons-react';\n\n<ContextInfoMessage icon={<InfoIkon />}>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;\n";
const sourceImports$1t = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\nimport { InfoIkon } from '@sb1/ffe-icons-react';";
const dependencies$1t = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$1t = "context-message/ContextInfoMessage-icon.jsx";

var context_message_ContextInfoMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1t,
  code: code$1t,
  sourceCode: sourceCode$1t,
  sourceImports: sourceImports$1t,
  dependencies: dependencies$1t,
  sourceFileName: sourceFileName$1t
});

const scope$1s = {ContextErrorMessage};
const code$1s = "<ContextErrorMessage compact={true}>\n    Det skjedde en liten feil\n</ContextErrorMessage>";
const sourceCode$1s = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage compact={true}>\n    Det skjedde en liten feil\n</ContextErrorMessage>\n";
const sourceImports$1s = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1s = ["@sb1/ffe-context-message-react"];
const sourceFileName$1s = "context-message/ContextErrorMessage-compact.jsx";

var context_message_ContextErrorMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1s,
  code: code$1s,
  sourceCode: sourceCode$1s,
  sourceImports: sourceImports$1s,
  dependencies: dependencies$1s,
  sourceFileName: sourceFileName$1s
});

const scope$1r = {ContextSuccessMessage};
const code$1r = "<ContextSuccessMessage headerText=\"Hurra!\">\n    Betalingen ble registrert!\n</ContextSuccessMessage>";
const sourceCode$1r = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage headerText=\"Hurra!\">\n    Betalingen ble registrert!\n</ContextSuccessMessage>\n";
const sourceImports$1r = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1r = ["@sb1/ffe-context-message-react"];
const sourceFileName$1r = "context-message/ContextSuccessMessage-header.jsx";

var context_message_ContextSuccessMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1r,
  code: code$1r,
  sourceCode: sourceCode$1r,
  sourceImports: sourceImports$1r,
  dependencies: dependencies$1r,
  sourceFileName: sourceFileName$1r
});

const scope$1q = {ContextSuccessMessage,HakeIkon};
const code$1q = "<ContextSuccessMessage icon={<HakeIkon />}>\n    Betalingen ble registrert!\n</ContextSuccessMessage>";
const sourceCode$1q = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\nimport { HakeIkon } from '@sb1/ffe-icons-react';\n\n<ContextSuccessMessage icon={<HakeIkon />}>\n    Betalingen ble registrert!\n</ContextSuccessMessage>\n";
const sourceImports$1q = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\nimport { HakeIkon } from '@sb1/ffe-icons-react';";
const dependencies$1q = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$1q = "context-message/ContextSuccessMessage-icon.jsx";

var context_message_ContextSuccessMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1q,
  code: code$1q,
  sourceCode: sourceCode$1q,
  sourceImports: sourceImports$1q,
  dependencies: dependencies$1q,
  sourceFileName: sourceFileName$1q
});

const scope$1p = {ContextTipMessage};
const code$1p = "<ContextTipMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextTipMessage>";
const sourceCode$1p = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\n\n<ContextTipMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextTipMessage>\n";
const sourceImports$1p = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1p = ["@sb1/ffe-context-message-react"];
const sourceFileName$1p = "context-message/ContextTipMessage-showCloseButton.jsx";

var context_message_ContextTipMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1p,
  code: code$1p,
  sourceCode: sourceCode$1p,
  sourceImports: sourceImports$1p,
  dependencies: dependencies$1p,
  sourceFileName: sourceFileName$1p
});

const scope$1o = {ContextErrorMessage};
const code$1o = "<ContextErrorMessage alert={false}>Slår av alert.</ContextErrorMessage>";
const sourceCode$1o = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage alert={false}>Slår av alert.</ContextErrorMessage>\n";
const sourceImports$1o = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1o = ["@sb1/ffe-context-message-react"];
const sourceFileName$1o = "context-message/ContextErrorMessage-alertFalse.jsx";

var context_message_ContextErrorMessage_alertFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1o,
  code: code$1o,
  sourceCode: sourceCode$1o,
  sourceImports: sourceImports$1o,
  dependencies: dependencies$1o,
  sourceFileName: sourceFileName$1o
});

const scope$1n = {ContextErrorMessage,UtropstegnIkon};
const code$1n = "<ContextErrorMessage icon={<UtropstegnIkon />}>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;";
const sourceCode$1n = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\nimport { UtropstegnIkon } from '@sb1/ffe-icons-react';\n\n<ContextErrorMessage icon={<UtropstegnIkon />}>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;\n";
const sourceImports$1n = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\nimport { UtropstegnIkon } from '@sb1/ffe-icons-react';";
const dependencies$1n = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$1n = "context-message/ContextErrorMessage-icon.jsx";

var context_message_ContextErrorMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1n,
  code: code$1n,
  sourceCode: sourceCode$1n,
  sourceImports: sourceImports$1n,
  dependencies: dependencies$1n,
  sourceFileName: sourceFileName$1n
});

const scope$1m = {ContextTipMessage,LyspareIkon};
const code$1m = "<ContextTipMessage icon={<LyspareIkon />}>\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;";
const sourceCode$1m = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\nimport { LyspareIkon } from '@sb1/ffe-icons-react';\n\n<ContextTipMessage icon={<LyspareIkon />}>\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;\n";
const sourceImports$1m = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\nimport { LyspareIkon } from '@sb1/ffe-icons-react';";
const dependencies$1m = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$1m = "context-message/ContextTipMessage-icon.jsx";

var context_message_ContextTipMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1m,
  code: code$1m,
  sourceCode: sourceCode$1m,
  sourceImports: sourceImports$1m,
  dependencies: dependencies$1m,
  sourceFileName: sourceFileName$1m
});

const scope$1l = {ContextTipMessage};
const code$1l = "<ContextTipMessage compact={true}>Et lite tips</ContextTipMessage>";
const sourceCode$1l = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\n\n<ContextTipMessage compact={true}>Et lite tips</ContextTipMessage>\n";
const sourceImports$1l = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1l = ["@sb1/ffe-context-message-react"];
const sourceFileName$1l = "context-message/ContextTipMessage-compact.jsx";

var context_message_ContextTipMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1l,
  code: code$1l,
  sourceCode: sourceCode$1l,
  sourceImports: sourceImports$1l,
  dependencies: dependencies$1l,
  sourceFileName: sourceFileName$1l
});

const scope$1k = {ContextTipMessage};
const code$1k = "<ContextTipMessage headerText=\"Tips\">\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>";
const sourceCode$1k = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\n\n<ContextTipMessage headerText=\"Tips\">\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>\n";
const sourceImports$1k = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1k = ["@sb1/ffe-context-message-react"];
const sourceFileName$1k = "context-message/ContextTipMessage-header.jsx";

var context_message_ContextTipMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1k,
  code: code$1k,
  sourceCode: sourceCode$1k,
  sourceImports: sourceImports$1k,
  dependencies: dependencies$1k,
  sourceFileName: sourceFileName$1k
});

const scope$1j = {ContextInfoMessage};
const code$1j = "<ContextInfoMessage headerText=\"Til info\">\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>";
const sourceCode$1j = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage headerText=\"Til info\">\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>\n";
const sourceImports$1j = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1j = ["@sb1/ffe-context-message-react"];
const sourceFileName$1j = "context-message/ContextInfoMessage-header.jsx";

var context_message_ContextInfoMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1j,
  code: code$1j,
  sourceCode: sourceCode$1j,
  sourceImports: sourceImports$1j,
  dependencies: dependencies$1j,
  sourceFileName: sourceFileName$1j
});

const scope$1i = {ContextInfoMessage};
const code$1i = "<ContextInfoMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextInfoMessage>";
const sourceCode$1i = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextInfoMessage>\n";
const sourceImports$1i = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1i = ["@sb1/ffe-context-message-react"];
const sourceFileName$1i = "context-message/ContextInfoMessage-showCloseButton.jsx";

var context_message_ContextInfoMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1i,
  code: code$1i,
  sourceCode: sourceCode$1i,
  sourceImports: sourceImports$1i,
  dependencies: dependencies$1i,
  sourceFileName: sourceFileName$1i
});

const scope$1h = {ContextSuccessMessage};
const code$1h = "<ContextSuccessMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextSuccessMessage>";
const sourceCode$1h = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextSuccessMessage>\n";
const sourceImports$1h = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1h = ["@sb1/ffe-context-message-react"];
const sourceFileName$1h = "context-message/ContextSuccessMessage-showCloseButton.jsx";

var context_message_ContextSuccessMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1h,
  code: code$1h,
  sourceCode: sourceCode$1h,
  sourceImports: sourceImports$1h,
  dependencies: dependencies$1h,
  sourceFileName: sourceFileName$1h
});

const scope$1g = {ContextSuccessMessage};
const code$1g = "<ContextSuccessMessage>Betalingen ble registrert!</ContextSuccessMessage>";
const sourceCode$1g = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage>Betalingen ble registrert!</ContextSuccessMessage>\n";
const sourceImports$1g = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1g = ["@sb1/ffe-context-message-react"];
const sourceFileName$1g = "context-message/ContextSuccessMessage.jsx";

var context_message_ContextSuccessMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1g,
  code: code$1g,
  sourceCode: sourceCode$1g,
  sourceImports: sourceImports$1g,
  dependencies: dependencies$1g,
  sourceFileName: sourceFileName$1g
});

const scope$1f = {Dropdown,InputGroup};
const code$1f = "<InputGroup\n    label=\"Måned\"\n    fieldMessage=\"Du må velge måned\"\n>\n    <Dropdown defaultValue=\"placeholder\">\n        <option value=\"placeholder\" disabled>Velg måned</option>\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</InputGroup>";
const sourceCode$1f = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\n\n<InputGroup\n    label=\"Måned\"\n    fieldMessage=\"Du må velge måned\"\n>\n    <Dropdown defaultValue=\"placeholder\">\n        <option value=\"placeholder\" disabled>Velg måned</option>\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</InputGroup>\n";
const sourceImports$1f = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup } from '@sb1/ffe-form-react';";
const dependencies$1f = ["@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$1f = "dropdown/Dropdown-invalid.jsx";

var dropdown_Dropdown_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1f,
  code: code$1f,
  sourceCode: sourceCode$1f,
  sourceImports: sourceImports$1f,
  dependencies: dependencies$1f,
  sourceFileName: sourceFileName$1f
});

const scope$1e = {Dropdown,Label};
const code$1e = "<>\n    <Label htmlFor=\"dropdown-example\">Måned</Label>\n    <Dropdown id=\"dropdown-example\">\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</>";
const sourceCode$1e = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n<>\n    <Label htmlFor=\"dropdown-example\">Måned</Label>\n    <Dropdown id=\"dropdown-example\">\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</>\n";
const sourceImports$1e = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$1e = ["@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$1e = "dropdown/Dropdown.jsx";

var dropdown_Dropdown = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1e,
  code: code$1e,
  sourceCode: sourceCode$1e,
  sourceImports: sourceImports$1e,
  dependencies: dependencies$1e,
  sourceFileName: sourceFileName$1e
});

const scope$1d = {ButtonGroup,ShortcutButton};
const code$1d = "<ButtonGroup thin={true}>\n    <ShortcutButton element=\"a\" href=\"#shortcutbutton\">\n        Snarvei\n    </ShortcutButton>\n</ButtonGroup>";
const sourceCode$1d = "import { ButtonGroup, ShortcutButton } from '@sb1/ffe-buttons-react';\n\n<ButtonGroup thin={true}>\n    <ShortcutButton element=\"a\" href=\"#shortcutbutton\">\n        Snarvei\n    </ShortcutButton>\n</ButtonGroup>\n";
const sourceImports$1d = "import { ButtonGroup, ShortcutButton } from '@sb1/ffe-buttons-react';";
const dependencies$1d = ["@sb1/ffe-buttons-react"];
const sourceFileName$1d = "buttons/ShortcutButton.jsx";

var buttons_ShortcutButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1d,
  code: code$1d,
  sourceCode: sourceCode$1d,
  sourceImports: sourceImports$1d,
  dependencies: dependencies$1d,
  sourceFileName: sourceFileName$1d
});

const scope$1c = {SecondaryButton,ButtonGroup,BindersIkon};
const code$1c = "<ButtonGroup thin={true}>\n    <SecondaryButton onClick={f => f}>Secondary knapp</SecondaryButton>\n    <SecondaryButton leftIcon={<BindersIkon />} onClick={f => f}>\n        Secondary m/ ikon\n    </SecondaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>";
const sourceCode$1c = "import { SecondaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { BindersIkon } from  '@sb1/ffe-icons-react';\n\n<ButtonGroup thin={true}>\n    <SecondaryButton onClick={f => f}>Secondary knapp</SecondaryButton>\n    <SecondaryButton leftIcon={<BindersIkon />} onClick={f => f}>\n        Secondary m/ ikon\n    </SecondaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>\n";
const sourceImports$1c = "import { SecondaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { BindersIkon } from  '@sb1/ffe-icons-react';";
const dependencies$1c = ["@sb1/ffe-buttons-react","@sb1/ffe-icons-react"];
const sourceFileName$1c = "buttons/SecondaryButton.jsx";

var buttons_SecondaryButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1c,
  code: code$1c,
  sourceCode: sourceCode$1c,
  sourceImports: sourceImports$1c,
  dependencies: dependencies$1c,
  sourceFileName: sourceFileName$1c
});

const scope$1b = {useState,ExpandButton};
const code$1b = "() => {\n    const [isExpanded, setExpanded] = useState(false);\n\n    return (\n        <div>\n            <ExpandButton\n                isExpanded={isExpanded}\n                onClick={() => setExpanded(!isExpanded)}\n            >\n                Vis mer\n            </ExpandButton>\n        </div>\n    );\n}";
const sourceCode$1b = "import { useState } from 'react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';\n\n\n() => {\n    const [isExpanded, setExpanded] = useState(false);\n\n    return (\n        <div>\n            <ExpandButton\n                isExpanded={isExpanded}\n                onClick={() => setExpanded(!isExpanded)}\n            >\n                Vis mer\n            </ExpandButton>\n        </div>\n    );\n}\n";
const sourceImports$1b = "import { useState } from 'react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';";
const dependencies$1b = ["react","@sb1/ffe-buttons-react"];
const sourceFileName$1b = "buttons/ExpandButton.jsx";

var buttons_ExpandButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1b,
  code: code$1b,
  sourceCode: sourceCode$1b,
  sourceImports: sourceImports$1b,
  dependencies: dependencies$1b,
  sourceFileName: sourceFileName$1b
});

const scope$1a = {useState,InlineExpandButton,Collapse,Paragraph};
const code$1a = "() => {\n    const [isExpanded, setExpanded] = useState(false);\n    return (<>\n        <Paragraph>\n            Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n            opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n            <InlineExpandButton\n                aria-controls=\"inline-expand-example-details\"\n                aria-expanded={isExpanded}\n                isExpanded={isExpanded}\n                onClick={() => setExpanded(!isExpanded)}\n            >\n                {isExpanded ? 'Vis mindre' : 'Vis mer'}\n            </InlineExpandButton>\n        </Paragraph>\n\n        <Collapse\n            id=\"inline-expand-example-details\"\n            isOpen={isExpanded}\n            role=\"region\"\n        >\n            <div>\n            <Paragraph>\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n            </Paragraph>\n            <Paragraph>\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n            </Paragraph>\n            <Paragraph>\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n            </Paragraph>\n            </div>\n        </Collapse>\n    </>);\n}";
const sourceCode$1a = "import { useState } from 'react';\nimport { InlineExpandButton } from '@sb1/ffe-buttons-react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n() => {\n    const [isExpanded, setExpanded] = useState(false);\n    return (<>\n        <Paragraph>\n            Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n            opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n            <InlineExpandButton\n                aria-controls=\"inline-expand-example-details\"\n                aria-expanded={isExpanded}\n                isExpanded={isExpanded}\n                onClick={() => setExpanded(!isExpanded)}\n            >\n                {isExpanded ? 'Vis mindre' : 'Vis mer'}\n            </InlineExpandButton>\n        </Paragraph>\n\n        <Collapse\n            id=\"inline-expand-example-details\"\n            isOpen={isExpanded}\n            role=\"region\"\n        >\n            <div>\n            <Paragraph>\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n            </Paragraph>\n            <Paragraph>\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n            </Paragraph>\n            <Paragraph>\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.\n            </Paragraph>\n            </div>\n        </Collapse>\n    </>);\n}\n";
const sourceImports$1a = "import { useState } from 'react';\nimport { InlineExpandButton } from '@sb1/ffe-buttons-react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$1a = ["react","@sb1/ffe-buttons-react","@sb1/ffe-collapse-react","@sb1/ffe-core-react"];
const sourceFileName$1a = "buttons/InlineExpandButton.jsx";

var buttons_InlineExpandButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1a,
  code: code$1a,
  sourceCode: sourceCode$1a,
  sourceImports: sourceImports$1a,
  dependencies: dependencies$1a,
  sourceFileName: sourceFileName$1a
});

const scope$19 = {ButtonGroup,ActionButton,PrimaryButton,SecondaryButton,TertiaryButton};
const code$19 = "<>\n    <ButtonGroup inline={true}>\n        <ActionButton>Neste</ActionButton>\n        <ActionButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </ActionButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n    <ButtonGroup inline={true}>\n        <PrimaryButton>Neste</PrimaryButton>\n        <PrimaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </PrimaryButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n</>";
const sourceCode$19 = "import { ButtonGroup, ActionButton, PrimaryButton, SecondaryButton, TertiaryButton } from '@sb1/ffe-buttons-react';\n\n<>\n    <ButtonGroup inline={true}>\n        <ActionButton>Neste</ActionButton>\n        <ActionButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </ActionButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n    <ButtonGroup inline={true}>\n        <PrimaryButton>Neste</PrimaryButton>\n        <PrimaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </PrimaryButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n</>\n";
const sourceImports$19 = "import { ButtonGroup, ActionButton, PrimaryButton, SecondaryButton, TertiaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$19 = ["@sb1/ffe-buttons-react"];
const sourceFileName$19 = "buttons/ButtonGroup-inline.jsx";

var buttons_ButtonGroup_inline = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$19,
  code: code$19,
  sourceCode: sourceCode$19,
  sourceImports: sourceImports$19,
  dependencies: dependencies$19,
  sourceFileName: sourceFileName$19
});

const scope$18 = {ButtonGroup,ActionButton,PrimaryButton,SecondaryButton,TertiaryButton};
const code$18 = "<>\n    <ButtonGroup>\n        <ActionButton>Neste</ActionButton>\n        <ActionButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </ActionButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n    <ButtonGroup>\n        <PrimaryButton>Neste</PrimaryButton>\n        <PrimaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </PrimaryButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n</>";
const sourceCode$18 = "import { ButtonGroup, ActionButton, PrimaryButton, SecondaryButton, TertiaryButton } from '@sb1/ffe-buttons-react';\n\n<>\n    <ButtonGroup>\n        <ActionButton>Neste</ActionButton>\n        <ActionButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </ActionButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n    <ButtonGroup>\n        <PrimaryButton>Neste</PrimaryButton>\n        <PrimaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </PrimaryButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n</>\n";
const sourceImports$18 = "import { ButtonGroup, ActionButton, PrimaryButton, SecondaryButton, TertiaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$18 = ["@sb1/ffe-buttons-react"];
const sourceFileName$18 = "buttons/ButtonGroup.jsx";

var buttons_ButtonGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$18,
  code: code$18,
  sourceCode: sourceCode$18,
  sourceImports: sourceImports$18,
  dependencies: dependencies$18,
  sourceFileName: sourceFileName$18
});

const scope$17 = {ButtonGroup,ActionButton,PrimaryButton,SecondaryButton,TertiaryButton};
const code$17 = "<>\n    <ButtonGroup thin={true}>\n        <ActionButton>Neste</ActionButton>\n        <ActionButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </ActionButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n    <ButtonGroup thin={true}>\n        <PrimaryButton>Neste</PrimaryButton>\n        <PrimaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </PrimaryButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n</>";
const sourceCode$17 = "import { ButtonGroup, ActionButton, PrimaryButton, SecondaryButton, TertiaryButton } from '@sb1/ffe-buttons-react';\n\n<>\n    <ButtonGroup thin={true}>\n        <ActionButton>Neste</ActionButton>\n        <ActionButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </ActionButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n    <ButtonGroup thin={true}>\n        <PrimaryButton>Neste</PrimaryButton>\n        <PrimaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </PrimaryButton>\n        <SecondaryButton>Avbryt</SecondaryButton>\n        <SecondaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </SecondaryButton>\n        <TertiaryButton>Hopp over</TertiaryButton>\n        <TertiaryButton element=\"a\" href=\"#buttongroup\">\n            Lenke\n        </TertiaryButton>\n    </ButtonGroup>\n</>\n";
const sourceImports$17 = "import { ButtonGroup, ActionButton, PrimaryButton, SecondaryButton, TertiaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$17 = ["@sb1/ffe-buttons-react"];
const sourceFileName$17 = "buttons/ButtonGroup-thin.jsx";

var buttons_ButtonGroup_thin = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$17,
  code: code$17,
  sourceCode: sourceCode$17,
  sourceImports: sourceImports$17,
  dependencies: dependencies$17,
  sourceFileName: sourceFileName$17
});

const scope$16 = {ActionButton,ButtonGroup};
const code$16 = "<>\n    <div>\n        <ButtonGroup thin={true}>\n            <ActionButton onClick={f => f}>Action knapp</ActionButton>\n            <ActionButton\n                isLoading={true}\n                onClick={f => f}\n                ariaLoadingMessage=\"Vennligst vent...\"\n            >\n                Action knapp\n            </ActionButton>\n        </ButtonGroup>\n    </div>\n    <div>\n        <ButtonGroup thin={true}>\n            <ActionButton onClick={f => f} ghost={true}>\n                Action knapp\n            </ActionButton>\n\n            <ActionButton\n                ariaLoadingMessage=\"Vennligst vent...\"\n                isLoading={true}\n                ghost={true}\n                onClick={f => f}\n            >\n                Action knapp\n            </ActionButton>\n        </ButtonGroup>\n    </div>\n</>";
const sourceCode$16 = "import { ActionButton, ButtonGroup } from '@sb1/ffe-buttons-react';\n\n<>\n    <div>\n        <ButtonGroup thin={true}>\n            <ActionButton onClick={f => f}>Action knapp</ActionButton>\n            <ActionButton\n                isLoading={true}\n                onClick={f => f}\n                ariaLoadingMessage=\"Vennligst vent...\"\n            >\n                Action knapp\n            </ActionButton>\n        </ButtonGroup>\n    </div>\n    <div>\n        <ButtonGroup thin={true}>\n            <ActionButton onClick={f => f} ghost={true}>\n                Action knapp\n            </ActionButton>\n\n            <ActionButton\n                ariaLoadingMessage=\"Vennligst vent...\"\n                isLoading={true}\n                ghost={true}\n                onClick={f => f}\n            >\n                Action knapp\n            </ActionButton>\n        </ButtonGroup>\n    </div>\n</>\n";
const sourceImports$16 = "import { ActionButton, ButtonGroup } from '@sb1/ffe-buttons-react';";
const dependencies$16 = ["@sb1/ffe-buttons-react"];
const sourceFileName$16 = "buttons/ActionButton.jsx";

var buttons_ActionButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$16,
  code: code$16,
  sourceCode: sourceCode$16,
  sourceImports: sourceImports$16,
  dependencies: dependencies$16,
  sourceFileName: sourceFileName$16
});

const scope$15 = {TaskButton,ButtonGroup,PlussIkon};
const code$15 = "<ButtonGroup thin={true}>\n    <TaskButton icon={<PlussIkon />}>Legg til bruker</TaskButton>\n    <TaskButton icon={<PlussIkon />} condensed={true}>\n        Legg til bruker\n    </TaskButton>\n</ButtonGroup>";
const sourceCode$15 = "import { TaskButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { PlussIkon } from  '@sb1/ffe-icons-react';\n\n<ButtonGroup thin={true}>\n    <TaskButton icon={<PlussIkon />}>Legg til bruker</TaskButton>\n    <TaskButton icon={<PlussIkon />} condensed={true}>\n        Legg til bruker\n    </TaskButton>\n</ButtonGroup>\n";
const sourceImports$15 = "import { TaskButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { PlussIkon } from  '@sb1/ffe-icons-react';";
const dependencies$15 = ["@sb1/ffe-buttons-react","@sb1/ffe-icons-react"];
const sourceFileName$15 = "buttons/TaskButton.jsx";

var buttons_TaskButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$15,
  code: code$15,
  sourceCode: sourceCode$15,
  sourceImports: sourceImports$15,
  dependencies: dependencies$15,
  sourceFileName: sourceFileName$15
});

const scope$14 = {PrimaryButton,ButtonGroup};
const code$14 = "<ButtonGroup thin={true}>\n    <PrimaryButton onClick={f => f}>Primary knapp</PrimaryButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n</ButtonGroup>";
const sourceCode$14 = "import { PrimaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\n\n<ButtonGroup thin={true}>\n    <PrimaryButton onClick={f => f}>Primary knapp</PrimaryButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n</ButtonGroup>\n";
const sourceImports$14 = "import { PrimaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';";
const dependencies$14 = ["@sb1/ffe-buttons-react"];
const sourceFileName$14 = "buttons/PrimaryButton.jsx";

var buttons_PrimaryButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$14,
  code: code$14,
  sourceCode: sourceCode$14,
  sourceImports: sourceImports$14,
  dependencies: dependencies$14,
  sourceFileName: sourceFileName$14
});

const scope$13 = {ButtonGroup,ActionButton,PrimaryButton,SecondaryButton};
const code$13 = "<ButtonGroup>\n    <ActionButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Action knapp\n    </ActionButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>";
const sourceCode$13 = "import { ButtonGroup, ActionButton, PrimaryButton, SecondaryButton } from '@sb1/ffe-buttons-react';\n\n<ButtonGroup>\n    <ActionButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Action knapp\n    </ActionButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>\n";
const sourceImports$13 = "import { ButtonGroup, ActionButton, PrimaryButton, SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$13 = ["@sb1/ffe-buttons-react"];
const sourceFileName$13 = "buttons/ariaLoadingMessage.jsx";

var buttons_ariaLoadingMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$13,
  code: code$13,
  sourceCode: sourceCode$13,
  sourceImports: sourceImports$13,
  dependencies: dependencies$13,
  sourceFileName: sourceFileName$13
});

const scope$12 = {BackButton};
const code$12 = "<BackButton onClick={f => f}>Tilbake</BackButton>";
const sourceCode$12 = "import { BackButton } from '@sb1/ffe-buttons-react';\n\n<BackButton onClick={f => f}>Tilbake</BackButton>\n";
const sourceImports$12 = "import { BackButton } from '@sb1/ffe-buttons-react';";
const dependencies$12 = ["@sb1/ffe-buttons-react"];
const sourceFileName$12 = "buttons/BackButton.jsx";

var buttons_BackButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$12,
  code: code$12,
  sourceCode: sourceCode$12,
  sourceImports: sourceImports$12,
  dependencies: dependencies$12,
  sourceFileName: sourceFileName$12
});

const scope$11 = {TertiaryButton,ButtonGroup};
const code$11 = "<ButtonGroup thin={true}>\n    <TertiaryButton onClick={f => f}>Tertiærknapp</TertiaryButton>\n</ButtonGroup>";
const sourceCode$11 = "import { TertiaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\n\n<ButtonGroup thin={true}>\n    <TertiaryButton onClick={f => f}>Tertiærknapp</TertiaryButton>\n</ButtonGroup>\n";
const sourceImports$11 = "import { TertiaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';";
const dependencies$11 = ["@sb1/ffe-buttons-react"];
const sourceFileName$11 = "buttons/TertiaryButton.jsx";

var buttons_TertiaryButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$11,
  code: code$11,
  sourceCode: sourceCode$11,
  sourceImports: sourceImports$11,
  dependencies: dependencies$11,
  sourceFileName: sourceFileName$11
});

const scope$10 = {ChartDonut};
const code$10 = "<ChartDonut\n    firstLabel=\"First label\"\n    lastLabel=\"Last label\"\n    name=\"Name\"\n    percentage={42}\n/>";
const sourceCode$10 = "import ChartDonut from '@sb1/ffe-chart-donut-react';\n\n<ChartDonut\n    firstLabel=\"First label\"\n    lastLabel=\"Last label\"\n    name=\"Name\"\n    percentage={42}\n/>\n";
const sourceImports$10 = "import ChartDonut from '@sb1/ffe-chart-donut-react';";
const dependencies$10 = ["@sb1/ffe-chart-donut-react"];
const sourceFileName$10 = "chart-donut/ChartDonut.jsx";

var chart_donut_ChartDonut = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$10,
  code: code$10,
  sourceCode: sourceCode$10,
  sourceImports: sourceImports$10,
  dependencies: dependencies$10,
  sourceFileName: sourceFileName$10
});

const scope$$ = {CheckList,CheckListItem};
const code$$ = "<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n    </CheckList>\n</div>";
const sourceCode$$ = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n    </CheckList>\n</div>\n";
const sourceImports$$ = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';";
const dependencies$$ = ["@sb1/ffe-lists-react"];
const sourceFileName$$ = "lists/CheckList.jsx";

var lists_CheckList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$$,
  code: code$$,
  sourceCode: sourceCode$$,
  sourceImports: sourceImports$$,
  dependencies: dependencies$$,
  sourceFileName: sourceFileName$$
});

const scope$_ = {DescriptionList,DescriptionListTerm,DescriptionListDescription};
const code$_ = "<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>";
const sourceCode$_ = "import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>\n";
const sourceImports$_ = "import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@sb1/ffe-lists-react';";
const dependencies$_ = ["@sb1/ffe-lists-react"];
const sourceFileName$_ = "lists/DescriptionList.jsx";

var lists_DescriptionList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$_,
  code: code$_,
  sourceCode: sourceCode$_,
  sourceImports: sourceImports$_,
  dependencies: dependencies$_,
  sourceFileName: sourceFileName$_
});

const scope$Z = {BulletList,BulletListItem};
const code$Z = "<div>\n    <h3 className=\"ffe-h4\">Våre forsikringer</h3>\n    <BulletList>\n        <BulletListItem>Bilforsikring</BulletListItem>\n        <BulletListItem>Reiseforsikring</BulletListItem>\n        <BulletListItem>Innboforsikring</BulletListItem>\n    </BulletList>\n</div>";
const sourceCode$Z = "import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Våre forsikringer</h3>\n    <BulletList>\n        <BulletListItem>Bilforsikring</BulletListItem>\n        <BulletListItem>Reiseforsikring</BulletListItem>\n        <BulletListItem>Innboforsikring</BulletListItem>\n    </BulletList>\n</div>\n";
const sourceImports$Z = "import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';";
const dependencies$Z = ["@sb1/ffe-lists-react"];
const sourceFileName$Z = "lists/BulletList.jsx";

var lists_BulletList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$Z,
  code: code$Z,
  sourceCode: sourceCode$Z,
  sourceImports: sourceImports$Z,
  dependencies: dependencies$Z,
  sourceFileName: sourceFileName$Z
});

const scope$Y = {DescriptionList,DescriptionListTerm,DescriptionListDescription};
const code$Y = "<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList horizontal={true}>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>";
const sourceCode$Y = "import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList horizontal={true}>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>\n";
const sourceImports$Y = "import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@sb1/ffe-lists-react';";
const dependencies$Y = ["@sb1/ffe-lists-react"];
const sourceFileName$Y = "lists/DescriptionList-horizontal.jsx";

var lists_DescriptionList_horizontal = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$Y,
  code: code$Y,
  sourceCode: sourceCode$Y,
  sourceImports: sourceImports$Y,
  dependencies: dependencies$Y,
  sourceFileName: sourceFileName$Y
});

const scope$X = {DescriptionListMultiCol,DescriptionListTerm,DescriptionListDescription};
const code$X = "<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionListMultiCol>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer</DescriptionListTerm>\n        <DescriptionListDescription>0362</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Oslo</DescriptionListDescription>\n    </DescriptionListMultiCol>\n</div>";
const sourceCode$X = "import { DescriptionListMultiCol, DescriptionListTerm, DescriptionListDescription } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionListMultiCol>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer</DescriptionListTerm>\n        <DescriptionListDescription>0362</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Oslo</DescriptionListDescription>\n    </DescriptionListMultiCol>\n</div>\n";
const sourceImports$X = "import { DescriptionListMultiCol, DescriptionListTerm, DescriptionListDescription } from '@sb1/ffe-lists-react';";
const dependencies$X = ["@sb1/ffe-lists-react"];
const sourceFileName$X = "lists/DescriptionListMultiCol.jsx";

var lists_DescriptionListMultiCol = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$X,
  code: code$X,
  sourceCode: sourceCode$X,
  sourceImports: sourceImports$X,
  dependencies: dependencies$X,
  sourceFileName: sourceFileName$X
});

const scope$W = {NumberedList,NumberedListItem};
const code$W = "<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <NumberedList>\n        <NumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </NumberedListItem>\n        <NumberedListItem>Importer pakken i koden din</NumberedListItem>\n        <NumberedListItem>Profit!</NumberedListItem>\n    </NumberedList>\n</div>";
const sourceCode$W = "import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <NumberedList>\n        <NumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </NumberedListItem>\n        <NumberedListItem>Importer pakken i koden din</NumberedListItem>\n        <NumberedListItem>Profit!</NumberedListItem>\n    </NumberedList>\n</div>\n";
const sourceImports$W = "import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react';";
const dependencies$W = ["@sb1/ffe-lists-react"];
const sourceFileName$W = "lists/NumberedList.jsx";

var lists_NumberedList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$W,
  code: code$W,
  sourceCode: sourceCode$W,
  sourceImports: sourceImports$W,
  dependencies: dependencies$W,
  sourceFileName: sourceFileName$W
});

const scope$V = {StylizedNumberedList,StylizedNumberedListItem};
const code$V = "<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <StylizedNumberedList>\n        <StylizedNumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>\n            Importer pakken i koden din\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>Profit!</StylizedNumberedListItem>\n    </StylizedNumberedList>\n</div>";
const sourceCode$V = "import { StylizedNumberedList, StylizedNumberedListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <StylizedNumberedList>\n        <StylizedNumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>\n            Importer pakken i koden din\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>Profit!</StylizedNumberedListItem>\n    </StylizedNumberedList>\n</div>\n";
const sourceImports$V = "import { StylizedNumberedList, StylizedNumberedListItem } from '@sb1/ffe-lists-react';";
const dependencies$V = ["@sb1/ffe-lists-react"];
const sourceFileName$V = "lists/StylizedNumberedList.jsx";

var lists_StylizedNumberedList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$V,
  code: code$V,
  sourceCode: sourceCode$V,
  sourceImports: sourceImports$V,
  dependencies: dependencies$V,
  sourceFileName: sourceFileName$V
});

const scope$U = {DescriptionList,DescriptionListTerm,DescriptionListDescription};
const code$U = "<div>\n    <h3 className=\"ffe-h5\">Medium</h3>\n    <DescriptionList horizontal={true} medium={true}>\n        <DescriptionListTerm>\n            This is a very long term, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n\n    <h3 className=\"ffe-h5\">Large</h3>\n    <DescriptionList horizontal={true} large={true}>\n        <DescriptionListTerm>\n            This is a very long description, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n</div>";
const sourceCode$U = "import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h5\">Medium</h3>\n    <DescriptionList horizontal={true} medium={true}>\n        <DescriptionListTerm>\n            This is a very long term, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n\n    <h3 className=\"ffe-h5\">Large</h3>\n    <DescriptionList horizontal={true} large={true}>\n        <DescriptionListTerm>\n            This is a very long description, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n</div>\n";
const sourceImports$U = "import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@sb1/ffe-lists-react';";
const dependencies$U = ["@sb1/ffe-lists-react"];
const sourceFileName$U = "lists/DescriptionList-mediumlarge.jsx";

var lists_DescriptionList_mediumlarge = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$U,
  code: code$U,
  sourceCode: sourceCode$U,
  sourceImports: sourceImports$U,
  dependencies: dependencies$U,
  sourceFileName: sourceFileName$U
});

const scope$T = {CheckList,CheckListItem};
const code$T = "<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList columns={2}>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n        <CheckListItem isCross={true}>Mindre tid</CheckListItem>\n    </CheckList>\n</div>";
const sourceCode$T = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList columns={2}>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n        <CheckListItem isCross={true}>Mindre tid</CheckListItem>\n    </CheckList>\n</div>\n";
const sourceImports$T = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';";
const dependencies$T = ["@sb1/ffe-lists-react"];
const sourceFileName$T = "lists/CheckList-columns.jsx";

var lists_CheckList_columns = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$T,
  code: code$T,
  sourceCode: sourceCode$T,
  sourceImports: sourceImports$T,
  dependencies: dependencies$T,
  sourceFileName: sourceFileName$T
});

const scope$S = {Spinner,Paragraph};
const code$S = "<>\n    <Spinner large={true}/>\n    <Paragraph>Vennligst vent litt</Paragraph>\n</>";
const sourceCode$S = "import Spinner from '@sb1/ffe-spinner-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<>\n    <Spinner large={true}/>\n    <Paragraph>Vennligst vent litt</Paragraph>\n</>\n";
const sourceImports$S = "import Spinner from '@sb1/ffe-spinner-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$S = ["@sb1/ffe-spinner-react","@sb1/ffe-core-react"];
const sourceFileName$S = "spinner/Spinner-large.jsx";

var spinner_Spinner_large = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$S,
  code: code$S,
  sourceCode: sourceCode$S,
  sourceImports: sourceImports$S,
  dependencies: dependencies$S,
  sourceFileName: sourceFileName$S
});

const scope$R = {Spinner};
const code$R = "<>\n    <Spinner /> Vennligst vent litt\n</>";
const sourceCode$R = "import Spinner from '@sb1/ffe-spinner-react';\n\n<>\n    <Spinner /> Vennligst vent litt\n</>\n";
const sourceImports$R = "import Spinner from '@sb1/ffe-spinner-react';";
const dependencies$R = ["@sb1/ffe-spinner-react"];
const sourceFileName$R = "spinner/Spinner.jsx";

var spinner_Spinner = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$R,
  code: code$R,
  sourceCode: sourceCode$R,
  sourceImports: sourceImports$R,
  dependencies: dependencies$R,
  sourceFileName: sourceFileName$R
});

const scope$Q = {Grid,GridRow,GridCol,DividerLine,Paragraph};
const code$Q = "<Grid>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe over</Paragraph>\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <DividerLine />\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe under</Paragraph>\n        </GridCol>\n    </GridRow>\n</Grid>";
const sourceCode$Q = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport { DividerLine, Paragraph } from '@sb1/ffe-core-react';\n\n<Grid>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe over</Paragraph>\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <DividerLine />\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe under</Paragraph>\n        </GridCol>\n    </GridRow>\n</Grid>\n";
const sourceImports$Q = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport { DividerLine, Paragraph } from '@sb1/ffe-core-react';";
const dependencies$Q = ["@sb1/ffe-grid-react","@sb1/ffe-core-react"];
const sourceFileName$Q = "typography/DividerLine.jsx";

var typography_DividerLine = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$Q,
  code: code$Q,
  sourceCode: sourceCode$Q,
  sourceImports: sourceImports$Q,
  dependencies: dependencies$Q,
  sourceFileName: sourceFileName$Q
});

const scope$P = {LinkText,SnakkebobleIkon};
const code$P = "<LinkText href=\"https://www.sparebank1.no\" underline={false} >\n    <SnakkebobleIkon alt=\"Snakk med oss\" style={{fill: 'darkblue', height: '80px'}} />\n</LinkText>";
const sourceCode$P = "import { LinkText } from '@sb1/ffe-core-react';\nimport { SnakkebobleIkon } from '@sb1/ffe-icons-react';\n\n<LinkText href=\"https://www.sparebank1.no\" underline={false} >\n    <SnakkebobleIkon alt=\"Snakk med oss\" style={{fill: 'darkblue', height: '80px'}} />\n</LinkText>\n";
const sourceImports$P = "import { LinkText } from '@sb1/ffe-core-react';\nimport { SnakkebobleIkon } from '@sb1/ffe-icons-react';";
const dependencies$P = ["@sb1/ffe-core-react","@sb1/ffe-icons-react"];
const sourceFileName$P = "typography/LinkText-icon.jsx";

var typography_LinkText_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$P,
  code: code$P,
  sourceCode: sourceCode$P,
  sourceImports: sourceImports$P,
  dependencies: dependencies$P,
  sourceFileName: sourceFileName$P
});

const scope$O = {EmphasizedText};
const code$O = "<EmphasizedText>\n    Dette bør utheves\n</EmphasizedText>";
const sourceCode$O = "import { EmphasizedText } from '@sb1/ffe-core-react';\n\n<EmphasizedText>\n    Dette bør utheves\n</EmphasizedText>\n";
const sourceImports$O = "import { EmphasizedText } from '@sb1/ffe-core-react';";
const dependencies$O = ["@sb1/ffe-core-react"];
const sourceFileName$O = "typography/EmphasizedText.jsx";

var typography_EmphasizedText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$O,
  code: code$O,
  sourceCode: sourceCode$O,
  sourceImports: sourceImports$O,
  dependencies: dependencies$O,
  sourceFileName: sourceFileName$O
});

const scope$N = {StrongText};
const code$N = "<StrongText>\n    Dette er en sterk type\n</StrongText>";
const sourceCode$N = "import { StrongText } from '@sb1/ffe-core-react';\n\n<StrongText>\n    Dette er en sterk type\n</StrongText>\n";
const sourceImports$N = "import { StrongText } from '@sb1/ffe-core-react';";
const dependencies$N = ["@sb1/ffe-core-react"];
const sourceFileName$N = "typography/StrongText.jsx";

var typography_StrongText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$N,
  code: code$N,
  sourceCode: sourceCode$N,
  sourceImports: sourceImports$N,
  dependencies: dependencies$N,
  sourceFileName: sourceFileName$N
});

const scope$M = {SmallText};
const code$M = "<>\n<div>\n<SmallText>Dette er en liten type</SmallText>\n</div>\n\n\n<SmallText element=\"p\">Dette er en liten type</SmallText>\n\n</>";
const sourceCode$M = "import { SmallText } from '@sb1/ffe-core-react';\n\n\n<>\n<div>\n<SmallText>Dette er en liten type</SmallText>\n</div>\n\n\n<SmallText element=\"p\">Dette er en liten type</SmallText>\n\n</>\n";
const sourceImports$M = "import { SmallText } from '@sb1/ffe-core-react';";
const dependencies$M = ["@sb1/ffe-core-react"];
const sourceFileName$M = "typography/SmallText.jsx";

var typography_SmallText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$M,
  code: code$M,
  sourceCode: sourceCode$M,
  sourceImports: sourceImports$M,
  dependencies: dependencies$M,
  sourceFileName: sourceFileName$M
});

const scope$L = {MicroText};
const code$L = "<MicroText>\n    Dette er den minste typen vi har\n</MicroText>";
const sourceCode$L = "import { MicroText } from '@sb1/ffe-core-react';\n\n<MicroText>\n    Dette er den minste typen vi har\n</MicroText>\n";
const sourceImports$L = "import { MicroText } from '@sb1/ffe-core-react';";
const dependencies$L = ["@sb1/ffe-core-react"];
const sourceFileName$L = "typography/MicroText.jsx";

var typography_MicroText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$L,
  code: code$L,
  sourceCode: sourceCode$L,
  sourceImports: sourceImports$L,
  dependencies: dependencies$L,
  sourceFileName: sourceFileName$L
});

const scope$K = {PreformattedText};
const code$K = "<PreformattedText>\n    {`Gammal dam\nEin frosk hoppar\nLyden av vatnet`}\n</PreformattedText>";
const sourceCode$K = "import { PreformattedText } from '@sb1/ffe-core-react';\n\n<PreformattedText>\n    {`Gammal dam\nEin frosk hoppar\nLyden av vatnet`}\n</PreformattedText>\n";
const sourceImports$K = "import { PreformattedText } from '@sb1/ffe-core-react';";
const dependencies$K = ["@sb1/ffe-core-react"];
const sourceFileName$K = "typography/PreformattedText.jsx";

var typography_PreformattedText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$K,
  code: code$K,
  sourceCode: sourceCode$K,
  sourceImports: sourceImports$K,
  dependencies: dependencies$K,
  sourceFileName: sourceFileName$K
});

const scope$J = {LinkText};
const code$J = "<LinkText href=\"https://www.sparebank1.no\">\n    sparebank1.no\n</LinkText>";
const sourceCode$J = "import { LinkText } from '@sb1/ffe-core-react';\n\n<LinkText href=\"https://www.sparebank1.no\">\n    sparebank1.no\n</LinkText>\n";
const sourceImports$J = "import { LinkText } from '@sb1/ffe-core-react';";
const dependencies$J = ["@sb1/ffe-core-react"];
const sourceFileName$J = "typography/LinkText.jsx";

var typography_LinkText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$J,
  code: code$J,
  sourceCode: sourceCode$J,
  sourceImports: sourceImports$J,
  dependencies: dependencies$J,
  sourceFileName: sourceFileName$J
});

const scope$I = {Heading1,Heading2,Heading3,Heading4,Heading5,Heading6};
const code$I = "<div>\n    <Heading1>Overskrift nivå 1</Heading1>\n    <Heading2>Overskrift nivå 2</Heading2>\n    <Heading3>Overskrift nivå 3</Heading3>\n    <Heading4>Overskrift nivå 4</Heading4>\n    <Heading5>Overskrift nivå 5</Heading5>\n    <Heading6>Overskrift nivå 6</Heading6>\n</div>";
const sourceCode$I = "import {\n    Heading1,\n    Heading2,\n    Heading3,\n    Heading4,\n    Heading5,\n    Heading6\n} from '@sb1/ffe-core-react';\n\n<div>\n    <Heading1>Overskrift nivå 1</Heading1>\n    <Heading2>Overskrift nivå 2</Heading2>\n    <Heading3>Overskrift nivå 3</Heading3>\n    <Heading4>Overskrift nivå 4</Heading4>\n    <Heading5>Overskrift nivå 5</Heading5>\n    <Heading6>Overskrift nivå 6</Heading6>\n</div>\n";
const sourceImports$I = "import {\n    Heading1,\n    Heading2,\n    Heading3,\n    Heading4,\n    Heading5,\n    Heading6\n} from '@sb1/ffe-core-react';";
const dependencies$I = ["@sb1/ffe-core-react"];
const sourceFileName$I = "typography/Heading.jsx";

var typography_Heading = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$I,
  code: code$I,
  sourceCode: sourceCode$I,
  sourceImports: sourceImports$I,
  dependencies: dependencies$I,
  sourceFileName: sourceFileName$I
});

const scope$H = {Paragraph};
const code$H = "<>\n<Paragraph>\n    Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n    mobilbank får du med en gang, og bankkortet kommer i posten om en ukes tid.\n</Paragraph>\n\n<Paragraph lead={true}>\n    Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n    mobilbank får du med en gang, og bankkortet kommer i posten om en ukes tid.\n</Paragraph>\n\n<Paragraph subLead={true}>\n    Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n    mobilbank får du med en gang, og bankkortet kommer i posten om en ukes tid.\n</Paragraph>\n\n</>";
const sourceCode$H = "import { Paragraph } from '@sb1/ffe-core-react';\n\n<>\n<Paragraph>\n    Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n    mobilbank får du med en gang, og bankkortet kommer i posten om en ukes tid.\n</Paragraph>\n\n<Paragraph lead={true}>\n    Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n    mobilbank får du med en gang, og bankkortet kommer i posten om en ukes tid.\n</Paragraph>\n\n<Paragraph subLead={true}>\n    Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n    mobilbank får du med en gang, og bankkortet kommer i posten om en ukes tid.\n</Paragraph>\n\n</>\n";
const sourceImports$H = "import { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$H = ["@sb1/ffe-core-react"];
const sourceFileName$H = "typography/Paragraph.jsx";

var typography_Paragraph = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$H,
  code: code$H,
  sourceCode: sourceCode$H,
  sourceImports: sourceImports$H,
  dependencies: dependencies$H,
  sourceFileName: sourceFileName$H
});

const scope$G = {InfoMessage,Paragraph};
const code$G = "<InfoMessage title=\"Du har ingen kort\">\n    <Paragraph>\n        Denne tjenesten er kun tilgjengelig for deg med et debitkort eller\n        kredittkort fra SpareBank 1.\n    </Paragraph>\n</InfoMessage>";
const sourceCode$G = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<InfoMessage title=\"Du har ingen kort\">\n    <Paragraph>\n        Denne tjenesten er kun tilgjengelig for deg med et debitkort eller\n        kredittkort fra SpareBank 1.\n    </Paragraph>\n</InfoMessage>\n";
const sourceImports$G = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$G = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$G = "message-box/InfoMessage.jsx";

var message_box_InfoMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$G,
  code: code$G,
  sourceCode: sourceCode$G,
  sourceImports: sourceImports$G,
  dependencies: dependencies$G,
  sourceFileName: sourceFileName$G
});

const scope$F = {InfoMessage,Paragraph,HandlevognIkon};
const code$F = "<InfoMessage title=\"Handlevognen din er tom\" icon={<HandlevognIkon/>}>\n    <Paragraph>\n        Du har ingenting i handlevognen din.\n    </Paragraph>\n</InfoMessage>;";
const sourceCode$F = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\nimport { HandlevognIkon } from '@sb1/ffe-icons-react';\n\n<InfoMessage title=\"Handlevognen din er tom\" icon={<HandlevognIkon/>}>\n    <Paragraph>\n        Du har ingenting i handlevognen din.\n    </Paragraph>\n</InfoMessage>;\n\n";
const sourceImports$F = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\nimport { HandlevognIkon } from '@sb1/ffe-icons-react';";
const dependencies$F = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react","@sb1/ffe-icons-react"];
const sourceFileName$F = "message-box/InfoMessage-customIcon.jsx";

var message_box_InfoMessage_customIcon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$F,
  code: code$F,
  sourceCode: sourceCode$F,
  sourceImports: sourceImports$F,
  dependencies: dependencies$F,
  sourceFileName: sourceFileName$F
});

const scope$E = {ErrorMessage,Paragraph};
const code$E = "<ErrorMessage title=\"Fikk ikke kalkulert pris\">\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>";
const sourceCode$E = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<ErrorMessage title=\"Fikk ikke kalkulert pris\">\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>\n";
const sourceImports$E = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$E = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$E = "message-box/ErrorMessage.jsx";

var message_box_ErrorMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$E,
  code: code$E,
  sourceCode: sourceCode$E,
  sourceImports: sourceImports$E,
  dependencies: dependencies$E,
  sourceFileName: sourceFileName$E
});

const scope$D = {InfoMessage,InfoMessageList,InfoMessageListItem};
const code$D = "<InfoMessage title=\"Viktige ting å huske på\">\n    <InfoMessageList>\n        <InfoMessageListItem>\n            SpareBank 1 gir deg full oversikt\n        </InfoMessageListItem>\n        <InfoMessageListItem>\n            Ikke vær redd for å ta kontakt\n        </InfoMessageListItem>\n    </InfoMessageList>\n</InfoMessage>";
const sourceCode$D = "import { InfoMessage, InfoMessageList, InfoMessageListItem } from '@sb1/ffe-message-box-react';\n\n<InfoMessage title=\"Viktige ting å huske på\">\n    <InfoMessageList>\n        <InfoMessageListItem>\n            SpareBank 1 gir deg full oversikt\n        </InfoMessageListItem>\n        <InfoMessageListItem>\n            Ikke vær redd for å ta kontakt\n        </InfoMessageListItem>\n    </InfoMessageList>\n</InfoMessage>\n";
const sourceImports$D = "import { InfoMessage, InfoMessageList, InfoMessageListItem } from '@sb1/ffe-message-box-react';";
const dependencies$D = ["@sb1/ffe-message-box-react"];
const sourceFileName$D = "message-box/InfoMessageList.jsx";

var message_box_InfoMessageList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$D,
  code: code$D,
  sourceCode: sourceCode$D,
  sourceImports: sourceImports$D,
  dependencies: dependencies$D,
  sourceFileName: sourceFileName$D
});

const scope$C = {TipsMessage,Paragraph};
const code$C = "<TipsMessage title=\"Reiseforsikringen dekker alt utenfor hjemmet!\">\n    <Paragraph>\n        Reiseforsikringen gjelder ikke bare når du er på ferie. Les mer om hva\n        som dekkes i vilkårene.\n    </Paragraph>\n</TipsMessage>";
const sourceCode$C = "import { TipsMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<TipsMessage title=\"Reiseforsikringen dekker alt utenfor hjemmet!\">\n    <Paragraph>\n        Reiseforsikringen gjelder ikke bare når du er på ferie. Les mer om hva\n        som dekkes i vilkårene.\n    </Paragraph>\n</TipsMessage>\n";
const sourceImports$C = "import { TipsMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$C = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$C = "message-box/TipsMessage.jsx";

var message_box_TipsMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$C,
  code: code$C,
  sourceCode: sourceCode$C,
  sourceImports: sourceImports$C,
  dependencies: dependencies$C,
  sourceFileName: sourceFileName$C
});

const scope$B = {ErrorMessage,Paragraph};
const code$B = "<ErrorMessage title=\"Fikk ikke kalkulert pris\" alert={false}>\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>";
const sourceCode$B = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<ErrorMessage title=\"Fikk ikke kalkulert pris\" alert={false}>\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>\n";
const sourceImports$B = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$B = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$B = "message-box/ErrorMessage-alertFalse.jsx";

var message_box_ErrorMessage_alertFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$B,
  code: code$B,
  sourceCode: sourceCode$B,
  sourceImports: sourceImports$B,
  dependencies: dependencies$B,
  sourceFileName: sourceFileName$B
});

const scope$A = {SuccessMessage,Paragraph};
const code$A = "<SuccessMessage title=\"Betalingen ble gjennomført\">\n    <Paragraph>Nå er du helt gjeldsfri! Hurra!</Paragraph>\n</SuccessMessage>";
const sourceCode$A = "import { SuccessMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<SuccessMessage title=\"Betalingen ble gjennomført\">\n    <Paragraph>Nå er du helt gjeldsfri! Hurra!</Paragraph>\n</SuccessMessage>\n";
const sourceImports$A = "import { SuccessMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$A = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$A = "message-box/SuccessMessage.jsx";

var message_box_SuccessMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$A,
  code: code$A,
  sourceCode: sourceCode$A,
  sourceImports: sourceImports$A,
  dependencies: dependencies$A,
  sourceFileName: sourceFileName$A
});

const scope$z = {useState,Grid,GridRow,GridCol,Dropdown,Label};
const code$z = "() => {\n    const backgroundColors = [\n        'blue-ice',\n        'blue-pale',\n        'green-mint',\n        'grey-cloud',\n        'sand',\n        'grey-warm',\n        'orange-salmon',\n        'red',\n        'blue-sky',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (<Grid>\n        <GridRow>\n            <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                <Label htmlFor=\"select-gridrow-bg\">\n                    Du kan velge bakgrunnsfarge på grid-kolonnen under her:\n                </Label>\n                <Dropdown\n                    id=\"select-gridrow-bg\"\n                    onChange={e => setBgColor(e.target.value)}\n                    value={bgColor}\n                >\n                    {backgroundColors.map(name => (\n                        <option key={name} value={name}>{name}</option>\n                    ))}\n                </Dropdown>\n            </GridCol>\n        </GridRow>\n        <GridRow>\n            <GridCol\n                sm={12}\n                lg={{ cols: 6, offset: 3 }}\n                background={bgColor}\n                bottomPadding={false}\n            >\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris\n                    sed est sit amet enim pretium finibus in id nibh. In orci massa,\n                    ultricies imperdiet laoreet et, rhoncus ut est. Integer nec\n                    magna ultricies, commodo urna ut, bibendum turpis. Curabitur nec\n                    ex sed lacus bibendum sollicitudin.\n                </p>\n            </GridCol>\n        </GridRow>\n        <GridRow>\n            <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                Merk at innholdet både over og under er i linje med grid-et.\n            </GridCol>\n        </GridRow>\n    </Grid>);\n}";
const sourceCode$z = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n() => {\n    const backgroundColors = [\n        'blue-ice',\n        'blue-pale',\n        'green-mint',\n        'grey-cloud',\n        'sand',\n        'grey-warm',\n        'orange-salmon',\n        'red',\n        'blue-sky',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (<Grid>\n        <GridRow>\n            <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                <Label htmlFor=\"select-gridrow-bg\">\n                    Du kan velge bakgrunnsfarge på grid-kolonnen under her:\n                </Label>\n                <Dropdown\n                    id=\"select-gridrow-bg\"\n                    onChange={e => setBgColor(e.target.value)}\n                    value={bgColor}\n                >\n                    {backgroundColors.map(name => (\n                        <option key={name} value={name}>{name}</option>\n                    ))}\n                </Dropdown>\n            </GridCol>\n        </GridRow>\n        <GridRow>\n            <GridCol\n                sm={12}\n                lg={{ cols: 6, offset: 3 }}\n                background={bgColor}\n                bottomPadding={false}\n            >\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris\n                    sed est sit amet enim pretium finibus in id nibh. In orci massa,\n                    ultricies imperdiet laoreet et, rhoncus ut est. Integer nec\n                    magna ultricies, commodo urna ut, bibendum turpis. Curabitur nec\n                    ex sed lacus bibendum sollicitudin.\n                </p>\n            </GridCol>\n        </GridRow>\n        <GridRow>\n            <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                Merk at innholdet både over og under er i linje med grid-et.\n            </GridCol>\n        </GridRow>\n    </Grid>);\n}\n\n";
const sourceImports$z = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$z = ["react","@sb1/ffe-grid-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$z = "grid/GridCol-background.jsx";

var grid_GridCol_background = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$z,
  code: code$z,
  sourceCode: sourceCode$z,
  sourceImports: sourceImports$z,
  dependencies: dependencies$z,
  sourceFileName: sourceFileName$z
});

const scope$y = {Grid,GridRow,GridCol};
const code$y = "<Grid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</Grid>";
const sourceCode$y = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</Grid>\n";
const sourceImports$y = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$y = ["@sb1/ffe-grid-react"];
const sourceFileName$y = "grid/Grid.jsx";

var grid_Grid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$y,
  code: code$y,
  sourceCode: sourceCode$y,
  sourceImports: sourceImports$y,
  dependencies: dependencies$y,
  sourceFileName: sourceFileName$y
});

const scope$x = {InlineGrid,GridRow,GridCol};
const code$x = "<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"12\" md=\"6\" background=\"grey-warm\">\n            Litt innhold til venstre\n        </GridCol>\n        <GridCol sm=\"12\" md=\"6\">\n            <InlineGrid>\n                <GridRow>\n                    <GridCol sm=\"6\" background=\"blue-ice\">\n                        Grid inni grid - venstre\n                    </GridCol>\n                    <GridCol sm=\"6\" background=\"green-mint\">\n                        Grid inni grid - høyre\n                    </GridCol>\n                </GridRow>\n            </InlineGrid>\n        </GridCol>\n    </GridRow>\n</InlineGrid>";
const sourceCode$x = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"12\" md=\"6\" background=\"grey-warm\">\n            Litt innhold til venstre\n        </GridCol>\n        <GridCol sm=\"12\" md=\"6\">\n            <InlineGrid>\n                <GridRow>\n                    <GridCol sm=\"6\" background=\"blue-ice\">\n                        Grid inni grid - venstre\n                    </GridCol>\n                    <GridCol sm=\"6\" background=\"green-mint\">\n                        Grid inni grid - høyre\n                    </GridCol>\n                </GridRow>\n            </InlineGrid>\n        </GridCol>\n    </GridRow>\n</InlineGrid>\n";
const sourceImports$x = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$x = ["@sb1/ffe-grid-react"];
const sourceFileName$x = "grid/InlineGrid-nested.jsx";

var grid_InlineGrid_nested = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$x,
  code: code$x,
  sourceCode: sourceCode$x,
  sourceImports: sourceImports$x,
  dependencies: dependencies$x,
  sourceFileName: sourceFileName$x
});

const scope$w = {Grid,GridRow,GridCol};
const code$w = "<Grid>\n    <GridRow>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n    </GridRow>\n</Grid>";
const sourceCode$w = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n    </GridRow>\n</Grid>\n";
const sourceImports$w = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$w = ["@sb1/ffe-grid-react"];
const sourceFileName$w = "grid/Grid-4col.jsx";

var grid_Grid_4col = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$w,
  code: code$w,
  sourceCode: sourceCode$w,
  sourceImports: sourceImports$w,
  dependencies: dependencies$w,
  sourceFileName: sourceFileName$w
});

const scope$v = {useState,Grid,GridRow,GridCol,Dropdown,Label};
const code$v = "() => {\n    const backgroundColors = [\n        'blue-ice',\n        'blue-pale',\n        'green-mint',\n        'grey-cloud',\n        'sand',\n        'grey-warm',\n        'orange-salmon',\n        'red',\n        'blue-sky',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (<Grid>\n        <GridRow>\n            <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                <Label htmlFor=\"select-gridrow-bg\">\n                    Du kan velge bakgrunnsfarge på grid-raden under her:\n                </Label>\n                <Dropdown\n                    id=\"select-gridrow-bg\"\n                    onChange={e => setBgColor(e.target.value)}\n                    value={bgColor}\n                >\n                    {backgroundColors.map(name => (\n                        <option key={name} value={name}>{name}</option>\n                    ))}\n                </Dropdown>\n            </GridCol>\n        </GridRow>\n        <GridRow background={bgColor}>\n            <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris\n                    sed est sit amet enim pretium finibus in id nibh. In orci massa,\n                    ultricies imperdiet laoreet et, rhoncus ut est.\n                </p>\n            </GridCol>\n        </GridRow>\n    </Grid>);\n}";
const sourceCode$v = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n() => {\n    const backgroundColors = [\n        'blue-ice',\n        'blue-pale',\n        'green-mint',\n        'grey-cloud',\n        'sand',\n        'grey-warm',\n        'orange-salmon',\n        'red',\n        'blue-sky',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (<Grid>\n        <GridRow>\n            <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                <Label htmlFor=\"select-gridrow-bg\">\n                    Du kan velge bakgrunnsfarge på grid-raden under her:\n                </Label>\n                <Dropdown\n                    id=\"select-gridrow-bg\"\n                    onChange={e => setBgColor(e.target.value)}\n                    value={bgColor}\n                >\n                    {backgroundColors.map(name => (\n                        <option key={name} value={name}>{name}</option>\n                    ))}\n                </Dropdown>\n            </GridCol>\n        </GridRow>\n        <GridRow background={bgColor}>\n            <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris\n                    sed est sit amet enim pretium finibus in id nibh. In orci massa,\n                    ultricies imperdiet laoreet et, rhoncus ut est.\n                </p>\n            </GridCol>\n        </GridRow>\n    </Grid>);\n}\n";
const sourceImports$v = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$v = ["react","@sb1/ffe-grid-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$v = "grid/GridRow-background.jsx";

var grid_GridRow_background = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$v,
  code: code$v,
  sourceCode: sourceCode$v,
  sourceImports: sourceImports$v,
  dependencies: dependencies$v,
  sourceFileName: sourceFileName$v
});

const scope$u = {InlineGrid,GridRow,GridCol};
const code$u = "<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</InlineGrid>";
const sourceCode$u = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</InlineGrid>\n\n";
const sourceImports$u = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$u = ["@sb1/ffe-grid-react"];
const sourceFileName$u = "grid/InlineGrid.jsx";

var grid_InlineGrid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$u,
  code: code$u,
  sourceCode: sourceCode$u,
  sourceImports: sourceImports$u,
  dependencies: dependencies$u,
  sourceFileName: sourceFileName$u
});

const scope$t = {Tab};
const code$t = "<Tab>Dette er en fane</Tab>";
const sourceCode$t = "import { Tab } from '@sb1/ffe-tabs-react';\n\n<Tab>Dette er en fane</Tab>\n";
const sourceImports$t = "import { Tab } from '@sb1/ffe-tabs-react';";
const dependencies$t = ["@sb1/ffe-tabs-react"];
const sourceFileName$t = "tabs/Tab.jsx";

var tabs_Tab = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$t,
  code: code$t,
  sourceCode: sourceCode$t,
  sourceImports: sourceImports$t,
  dependencies: dependencies$t,
  sourceFileName: sourceFileName$t
});

const scope$s = {Tab,TabGroup};
const code$s = "<TabGroup thin={true}>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>";
const sourceCode$s = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';\n\n<TabGroup thin={true}>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>\n";
const sourceImports$s = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';";
const dependencies$s = ["@sb1/ffe-tabs-react"];
const sourceFileName$s = "tabs/TabGroup-thin.jsx";

var tabs_TabGroup_thin = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$s,
  code: code$s,
  sourceCode: sourceCode$s,
  sourceImports: sourceImports$s,
  dependencies: dependencies$s,
  sourceFileName: sourceFileName$s
});

const scope$r = {Tab};
const code$r = "<Tab\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en fane\n</Tab>";
const sourceCode$r = "import { Tab } from '@sb1/ffe-tabs-react';\n\n<Tab\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en fane\n</Tab>\n";
const sourceImports$r = "import { Tab } from '@sb1/ffe-tabs-react';";
const dependencies$r = ["@sb1/ffe-tabs-react"];
const sourceFileName$r = "tabs/Tab-customProps.jsx";

var tabs_Tab_customProps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$r,
  code: code$r,
  sourceCode: sourceCode$r,
  sourceImports: sourceImports$r,
  dependencies: dependencies$r,
  sourceFileName: sourceFileName$r
});

const scope$q = {TabButton,Grid,GridRow,GridCol};
const code$q = "<Grid>\n    <GridRow background=\"sand\" topPadding={true}>\n        <GridCol sm={12}>\n            <div>\n                <TabButton ghost={true} condensed={true}>\n                    Dette er en transparent og kompakt tab button\n                </TabButton>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>";
const sourceCode$q = "import { TabButton } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow background=\"sand\" topPadding={true}>\n        <GridCol sm={12}>\n            <div>\n                <TabButton ghost={true} condensed={true}>\n                    Dette er en transparent og kompakt tab button\n                </TabButton>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>\n";
const sourceImports$q = "import { TabButton } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$q = ["@sb1/ffe-tabs-react","@sb1/ffe-grid-react"];
const sourceFileName$q = "tabs/TabButton-condensed.jsx";

var tabs_TabButton_condensed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$q,
  code: code$q,
  sourceCode: sourceCode$q,
  sourceImports: sourceImports$q,
  dependencies: dependencies$q,
  sourceFileName: sourceFileName$q
});

const scope$p = {Tab};
const code$p = "<Tab selected={true}>Dette er en valgt fane</Tab>";
const sourceCode$p = "import { Tab } from '@sb1/ffe-tabs-react';\n\n<Tab selected={true}>Dette er en valgt fane</Tab>\n";
const sourceImports$p = "import { Tab } from '@sb1/ffe-tabs-react';";
const dependencies$p = ["@sb1/ffe-tabs-react"];
const sourceFileName$p = "tabs/Tab-selected.jsx";

var tabs_Tab_selected = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$p,
  code: code$p,
  sourceCode: sourceCode$p,
  sourceImports: sourceImports$p,
  dependencies: dependencies$p,
  sourceFileName: sourceFileName$p
});

const scope$o = {useState,TabButton,TabButtonGroup,HusIkon,BilIkon,IconCard};
const code$o = "() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (<>\n        <TabButtonGroup>\n            <TabButton\n                selected={activeTabId === loan.house}\n                onClick={() => setActiveTabId(loan.house)}\n                aria-controls={loan.house}\n            >\n                Huslån\n            </TabButton>\n\n            <TabButton\n                selected={activeTabId === loan.car}\n                onClick={() => setActiveTabId(loan.car)}\n                aria-controls={loan.car}\n            >\n                Billån\n            </TabButton>\n        </TabButtonGroup>\n\n        <IconCard\n            icon={<HusIkon />}\n            id={loan.house}\n            style={activeTabId === loan.house ? null : displayNone}\n        >\n            {({ Title, Subtext }) => (\n                <>\n                    <Title>Huslån</Title>\n                    <Subtext>Ta opp huslån</Subtext>\n                </>\n            )}\n        </IconCard>\n\n        <IconCard\n            icon={<BilIkon />}\n            id={loan.car}\n            style={activeTabId === loan.car ? null : displayNone}\n        >\n            {({ Title, Subtext }) => (\n                <>\n                    <Title>Billån</Title>\n                    <Subtext>Ta opp billån</Subtext>\n                </>\n            )}\n        </IconCard>\n    </>);\n}";
const sourceCode$o = "import { useState } from 'react';\nimport { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';\n\n() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (<>\n        <TabButtonGroup>\n            <TabButton\n                selected={activeTabId === loan.house}\n                onClick={() => setActiveTabId(loan.house)}\n                aria-controls={loan.house}\n            >\n                Huslån\n            </TabButton>\n\n            <TabButton\n                selected={activeTabId === loan.car}\n                onClick={() => setActiveTabId(loan.car)}\n                aria-controls={loan.car}\n            >\n                Billån\n            </TabButton>\n        </TabButtonGroup>\n\n        <IconCard\n            icon={<HusIkon />}\n            id={loan.house}\n            style={activeTabId === loan.house ? null : displayNone}\n        >\n            {({ Title, Subtext }) => (\n                <>\n                    <Title>Huslån</Title>\n                    <Subtext>Ta opp huslån</Subtext>\n                </>\n            )}\n        </IconCard>\n\n        <IconCard\n            icon={<BilIkon />}\n            id={loan.car}\n            style={activeTabId === loan.car ? null : displayNone}\n        >\n            {({ Title, Subtext }) => (\n                <>\n                    <Title>Billån</Title>\n                    <Subtext>Ta opp billån</Subtext>\n                </>\n            )}\n        </IconCard>\n    </>);\n}\n";
const sourceImports$o = "import { useState } from 'react';\nimport { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';";
const dependencies$o = ["react","@sb1/ffe-tabs-react","@sb1/ffe-icons-react","@sb1/ffe-cards-react"];
const sourceFileName$o = "tabs/TabButtonGroup-advanced.jsx";

var tabs_TabButtonGroup_advanced = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$o,
  code: code$o,
  sourceCode: sourceCode$o,
  sourceImports: sourceImports$o,
  dependencies: dependencies$o,
  sourceFileName: sourceFileName$o
});

const scope$n = {Tab,Grid,GridRow,GridCol};
const code$n = "<Grid>\n    <GridRow>\n        <GridCol sm={12}>\n            <div>\n                <Tab condensed={true}>Dette er en kompakt fane</Tab>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>";
const sourceCode$n = "import { Tab } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow>\n        <GridCol sm={12}>\n            <div>\n                <Tab condensed={true}>Dette er en kompakt fane</Tab>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>\n";
const sourceImports$n = "import { Tab } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$n = ["@sb1/ffe-tabs-react","@sb1/ffe-grid-react"];
const sourceFileName$n = "tabs/Tab-condensed.jsx";

var tabs_Tab_condensed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$n,
  code: code$n,
  sourceCode: sourceCode$n,
  sourceImports: sourceImports$n,
  dependencies: dependencies$n,
  sourceFileName: sourceFileName$n
});

const scope$m = {useState,Tab,TabGroup,HusIkon,BilIkon,IconCard};
const code$m = "() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (<>\n        <TabGroup>\n            <Tab\n                selected={activeTabId === loan.house}\n                onClick={() => setActiveTabId(loan.house)}\n                aria-controls={loan.house}\n            >\n                Huslån\n            </Tab>\n\n            <Tab\n                selected={activeTabId === loan.car}\n                onClick={() => setActiveTabId(loan.car)}\n                aria-controls={loan.car}\n            >\n                Billån\n            </Tab>\n        </TabGroup>\n\n        <IconCard\n            icon={<HusIkon />}\n            id={loan.house}\n            style={activeTabId === loan.house ? null : displayNone}\n        >\n            {({ Title, Subtext }) => (\n                <>\n                    <Title>Huslån</Title>\n                    <Subtext>Ta opp huslån</Subtext>\n                </>\n            )}\n        </IconCard>\n\n        <IconCard\n            icon={<BilIkon />}\n            id={loan.car}\n            style={activeTabId === loan.car ? null : displayNone}\n        >\n            {({ Title, Subtext }) => (\n                <>\n                    <Title>Billån</Title>\n                    <Subtext>Ta opp billån</Subtext>\n                </>\n            )}\n        </IconCard>\n    </>);\n}";
const sourceCode$m = "import { useState } from 'react';\nimport { Tab, TabGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';\n\n() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (<>\n        <TabGroup>\n            <Tab\n                selected={activeTabId === loan.house}\n                onClick={() => setActiveTabId(loan.house)}\n                aria-controls={loan.house}\n            >\n                Huslån\n            </Tab>\n\n            <Tab\n                selected={activeTabId === loan.car}\n                onClick={() => setActiveTabId(loan.car)}\n                aria-controls={loan.car}\n            >\n                Billån\n            </Tab>\n        </TabGroup>\n\n        <IconCard\n            icon={<HusIkon />}\n            id={loan.house}\n            style={activeTabId === loan.house ? null : displayNone}\n        >\n            {({ Title, Subtext }) => (\n                <>\n                    <Title>Huslån</Title>\n                    <Subtext>Ta opp huslån</Subtext>\n                </>\n            )}\n        </IconCard>\n\n        <IconCard\n            icon={<BilIkon />}\n            id={loan.car}\n            style={activeTabId === loan.car ? null : displayNone}\n        >\n            {({ Title, Subtext }) => (\n                <>\n                    <Title>Billån</Title>\n                    <Subtext>Ta opp billån</Subtext>\n                </>\n            )}\n        </IconCard>\n    </>);\n}\n";
const sourceImports$m = "import { useState } from 'react';\nimport { Tab, TabGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';";
const dependencies$m = ["react","@sb1/ffe-tabs-react","@sb1/ffe-icons-react","@sb1/ffe-cards-react"];
const sourceFileName$m = "tabs/TabGroup-advanced.jsx";

var tabs_TabGroup_advanced = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$m,
  code: code$m,
  sourceCode: sourceCode$m,
  sourceImports: sourceImports$m,
  dependencies: dependencies$m,
  sourceFileName: sourceFileName$m
});

const scope$l = {TabButton};
const code$l = "<TabButton>Dette er en tab button</TabButton>";
const sourceCode$l = "import { TabButton } from '@sb1/ffe-tabs-react';\n\n<TabButton>Dette er en tab button</TabButton>\n";
const sourceImports$l = "import { TabButton } from '@sb1/ffe-tabs-react';";
const dependencies$l = ["@sb1/ffe-tabs-react"];
const sourceFileName$l = "tabs/TabButton.jsx";

var tabs_TabButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$l,
  code: code$l,
  sourceCode: sourceCode$l,
  sourceImports: sourceImports$l,
  dependencies: dependencies$l,
  sourceFileName: sourceFileName$l
});

const scope$k = {TabButton,TabButtonGroup};
const code$k = "<TabButtonGroup>\n    <TabButton>Dette er en tab</TabButton>\n    <TabButton selected={true}>Dette er en valgt tab</TabButton>\n    <TabButton>Dette er en annen tab</TabButton>\n</TabButtonGroup>";
const sourceCode$k = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\n\n<TabButtonGroup>\n    <TabButton>Dette er en tab</TabButton>\n    <TabButton selected={true}>Dette er en valgt tab</TabButton>\n    <TabButton>Dette er en annen tab</TabButton>\n</TabButtonGroup>\n";
const sourceImports$k = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';";
const dependencies$k = ["@sb1/ffe-tabs-react"];
const sourceFileName$k = "tabs/TabButtonGroup.jsx";

var tabs_TabButtonGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$k,
  code: code$k,
  sourceCode: sourceCode$k,
  sourceImports: sourceImports$k,
  dependencies: dependencies$k,
  sourceFileName: sourceFileName$k
});

const scope$j = {TabButton,TabButtonGroup};
const code$j = "<TabButtonGroup thin={true}>\n    <TabButton>Dette er en tab button</TabButton>\n    <TabButton>Dette er en annen tab button</TabButton>\n</TabButtonGroup>";
const sourceCode$j = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\n\n<TabButtonGroup thin={true}>\n    <TabButton>Dette er en tab button</TabButton>\n    <TabButton>Dette er en annen tab button</TabButton>\n</TabButtonGroup>\n";
const sourceImports$j = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';";
const dependencies$j = ["@sb1/ffe-tabs-react"];
const sourceFileName$j = "tabs/TabButtonGroup-thin.jsx";

var tabs_TabButtonGroup_thin = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$j,
  code: code$j,
  sourceCode: sourceCode$j,
  sourceImports: sourceImports$j,
  dependencies: dependencies$j,
  sourceFileName: sourceFileName$j
});

const scope$i = {TabButton};
const code$i = "<TabButton\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en tab button\n</TabButton>";
const sourceCode$i = "import { TabButton } from '@sb1/ffe-tabs-react';\n\n<TabButton\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en tab button\n</TabButton>\n";
const sourceImports$i = "import { TabButton } from '@sb1/ffe-tabs-react';";
const dependencies$i = ["@sb1/ffe-tabs-react"];
const sourceFileName$i = "tabs/TabButton-customProps.jsx";

var tabs_TabButton_customProps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$i,
  code: code$i,
  sourceCode: sourceCode$i,
  sourceImports: sourceImports$i,
  dependencies: dependencies$i,
  sourceFileName: sourceFileName$i
});

const scope$h = {TabButton};
const code$h = "<TabButton selected={true}>Dette er en valgt tab button</TabButton>";
const sourceCode$h = "import { TabButton } from '@sb1/ffe-tabs-react';\n\n<TabButton selected={true}>Dette er en valgt tab button</TabButton>\n";
const sourceImports$h = "import { TabButton } from '@sb1/ffe-tabs-react';";
const dependencies$h = ["@sb1/ffe-tabs-react"];
const sourceFileName$h = "tabs/TabButton-selected.jsx";

var tabs_TabButton_selected = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$h,
  code: code$h,
  sourceCode: sourceCode$h,
  sourceImports: sourceImports$h,
  dependencies: dependencies$h,
  sourceFileName: sourceFileName$h
});

const scope$g = {Tab,TabGroup};
const code$g = "<TabGroup>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>";
const sourceCode$g = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';\n\n<TabGroup>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>\n";
const sourceImports$g = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';";
const dependencies$g = ["@sb1/ffe-tabs-react"];
const sourceFileName$g = "tabs/TabGroup.jsx";

var tabs_TabGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$g,
  code: code$g,
  sourceCode: sourceCode$g,
  sourceImports: sourceImports$g,
  dependencies: dependencies$g,
  sourceFileName: sourceFileName$g
});

const scope$f = {useState,AccountSelectorMulti,Label};
const code$f = "() => {\n    const [value, setValue] = useState();\n    const [selectedAccounts, setSelectedAccounts] = useState([]);\n\n    const accounts = [\n        {\n            accountNumber: '123456789101',\n            name: 'Brukskonto',\n            currencyCode: 'NOK',\n            balance: 1337,\n        },\n        {\n            accountNumber: '123456789102',\n            name: 'Sparekonto',\n            currencyCode: 'NOK',\n            balance: 13337,\n        },\n    ];\n\n    const onAccountSelected = (acc) => {\n        const filteredAccounts = selectedAccounts\n            .filter(a => a.accountNumber !== acc.accountNumber);\n\n        const accountAlreadySelectedAndShouldBeRemoved =\n            filteredAccounts.length !== selectedAccounts.length;\n\n        if (accountAlreadySelectedAndShouldBeRemoved) {\n            setSelectedAccounts(filteredAccounts);\n        } else {\n            setSelectedAccounts([...selectedAccounts, acc]);\n        }\n    };\n\n    return (<>\n        <Label htmlFor=\"account-selector-multi\">Velg konto</Label>\n        <AccountSelectorMulti\n            id=\"account-selector-multi\"\n            locale=\"nb\"\n            accounts={accounts}\n            onAccountSelected={onAccountSelected}\n            onBlur={f => f}\n            selectedAccounts={selectedAccounts}\n            value={value}\n        />\n    </>);\n}";
const sourceCode$f = "import { useState } from 'react';\nimport { AccountSelectorMulti } from '@sb1/ffe-account-selector-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n\n() => {\n    const [value, setValue] = useState();\n    const [selectedAccounts, setSelectedAccounts] = useState([]);\n\n    const accounts = [\n        {\n            accountNumber: '123456789101',\n            name: 'Brukskonto',\n            currencyCode: 'NOK',\n            balance: 1337,\n        },\n        {\n            accountNumber: '123456789102',\n            name: 'Sparekonto',\n            currencyCode: 'NOK',\n            balance: 13337,\n        },\n    ];\n\n    const onAccountSelected = (acc) => {\n        const filteredAccounts = selectedAccounts\n            .filter(a => a.accountNumber !== acc.accountNumber);\n\n        const accountAlreadySelectedAndShouldBeRemoved =\n            filteredAccounts.length !== selectedAccounts.length;\n\n        if (accountAlreadySelectedAndShouldBeRemoved) {\n            setSelectedAccounts(filteredAccounts);\n        } else {\n            setSelectedAccounts([...selectedAccounts, acc]);\n        }\n    };\n\n    return (<>\n        <Label htmlFor=\"account-selector-multi\">Velg konto</Label>\n        <AccountSelectorMulti\n            id=\"account-selector-multi\"\n            locale=\"nb\"\n            accounts={accounts}\n            onAccountSelected={onAccountSelected}\n            onBlur={f => f}\n            selectedAccounts={selectedAccounts}\n            value={value}\n        />\n    </>);\n}\n\n";
const sourceImports$f = "import { useState } from 'react';\nimport { AccountSelectorMulti } from '@sb1/ffe-account-selector-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$f = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react"];
const sourceFileName$f = "account-selector/AccountSelectorMulti.jsx";

var account_selector_AccountSelectorMulti = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$f,
  code: code$f,
  sourceCode: sourceCode$f,
  sourceImports: sourceImports$f,
  dependencies: dependencies$f,
  sourceFileName: sourceFileName$f
});

const scope$e = {useState,AccountSelector,Label};
const code$e = "() => {\n    const [value, setValue] = useState('');\n    const [selectedAccount, setSelectedAccount] = useState();\n\n    return (<>\n        <Label htmlFor=\"account-selector-single\">Velg konto</Label>\n        <AccountSelector\n            accounts={[\n                {\n                    accountNumber: '1234 56 789101',\n                    name: 'Brukskonto',\n                    currencyCode: 'NOK',\n                    balance: 1337,\n                },\n                {\n                    accountNumber: '1234 56 789102',\n                    name: 'Brukskonto2',\n                    currencyCode: 'NOK',\n                    balance: 13337,\n                },\n                {\n                    accountNumber: '2234 56 789102',\n                    name: 'Sparekonto1',\n                    currencyCode: 'NOK',\n                    balance: 109236,\n                },\n                {\n                    accountNumber: '1253 47 789102',\n                    name: 'Sparekonto2',\n                    currencyCode: 'NOK',\n                    balance: 0,\n                },\n            ]}\n            id=\"account-selector-single\"\n            locale=\"nb\"\n            onAccountSelected={account => {\n                setSelectedAccount(account);\n                setValue(account.name);\n            }}\n            onChange={newValue => setValue(newValue)}\n            onReset={() => {\n                setSelectedAccount(null);\n                setValue('');\n            }}\n            value={value}\n            selectedAccount={selectedAccount}\n        />\n    </>);\n}";
const sourceCode$e = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n\n() => {\n    const [value, setValue] = useState('');\n    const [selectedAccount, setSelectedAccount] = useState();\n\n    return (<>\n        <Label htmlFor=\"account-selector-single\">Velg konto</Label>\n        <AccountSelector\n            accounts={[\n                {\n                    accountNumber: '1234 56 789101',\n                    name: 'Brukskonto',\n                    currencyCode: 'NOK',\n                    balance: 1337,\n                },\n                {\n                    accountNumber: '1234 56 789102',\n                    name: 'Brukskonto2',\n                    currencyCode: 'NOK',\n                    balance: 13337,\n                },\n                {\n                    accountNumber: '2234 56 789102',\n                    name: 'Sparekonto1',\n                    currencyCode: 'NOK',\n                    balance: 109236,\n                },\n                {\n                    accountNumber: '1253 47 789102',\n                    name: 'Sparekonto2',\n                    currencyCode: 'NOK',\n                    balance: 0,\n                },\n            ]}\n            id=\"account-selector-single\"\n            locale=\"nb\"\n            onAccountSelected={account => {\n                setSelectedAccount(account);\n                setValue(account.name);\n            }}\n            onChange={newValue => setValue(newValue)}\n            onReset={() => {\n                setSelectedAccount(null);\n                setValue('');\n            }}\n            value={value}\n            selectedAccount={selectedAccount}\n        />\n    </>);\n}\n";
const sourceImports$e = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$e = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react"];
const sourceFileName$e = "account-selector/AccountSelector.jsx";

var account_selector_AccountSelector = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$e,
  code: code$e,
  sourceCode: sourceCode$e,
  sourceImports: sourceImports$e,
  dependencies: dependencies$e,
  sourceFileName: sourceFileName$e
});

const scope$d = {useState,Datepicker};
const code$d = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"en\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}";
const sourceCode$d = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"en\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}\n\n";
const sourceImports$d = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$d = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$d = "datepicker/Datepicker-en.jsx";

var datepicker_Datepicker_en = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$d,
  code: code$d,
  sourceCode: sourceCode$d,
  sourceImports: sourceImports$d,
  dependencies: dependencies$d,
  sourceFileName: sourceFileName$d
});

const scope$c = {useState,Datepicker};
const code$c = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}";
const sourceCode$c = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}\n";
const sourceImports$c = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$c = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$c = "datepicker/Datepicker.jsx";

var datepicker_Datepicker = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$c,
  code: code$c,
  sourceCode: sourceCode$c,
  sourceImports: sourceImports$c,
  dependencies: dependencies$c,
  sourceFileName: sourceFileName$c
});

const scope$b = {Calendar};
const code$b = "<Calendar language=\"nn\" onDatePicked={f => console.log(f)} />";
const sourceCode$b = "import { Calendar } from '@sb1/ffe-datepicker-react';\n\n<Calendar language=\"nn\" onDatePicked={f => console.log(f)} />\n";
const sourceImports$b = "import { Calendar } from '@sb1/ffe-datepicker-react';";
const dependencies$b = ["@sb1/ffe-datepicker-react"];
const sourceFileName$b = "datepicker/Calendar-nn.jsx";

var datepicker_Calendar_nn = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$b,
  code: code$b,
  sourceCode: sourceCode$b,
  sourceImports: sourceImports$b,
  dependencies: dependencies$b,
  sourceFileName: sourceFileName$b
});

const scope$a = {useState,Datepicker};
const code$a = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            aria-invalid=\"true\"\n            inputProps={{ id: 'datepicker-example-aria-invalid' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}";
const sourceCode$a = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            aria-invalid=\"true\"\n            inputProps={{ id: 'datepicker-example-aria-invalid' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}\n";
const sourceImports$a = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$a = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$a = "datepicker/Datepicker-invalid.jsx";

var datepicker_Datepicker_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$a,
  code: code$a,
  sourceCode: sourceCode$a,
  sourceImports: sourceImports$a,
  dependencies: dependencies$a,
  sourceFileName: sourceFileName$a
});

const scope$9 = {useState,Datepicker};
const code$9 = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            calendarAbove={true}\n            inputProps={{ id: 'datepicker-example-calendar-above' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}";
const sourceCode$9 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            calendarAbove={true}\n            inputProps={{ id: 'datepicker-example-calendar-above' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}\n";
const sourceImports$9 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$9 = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$9 = "datepicker/Datepicker-calendarAbove.jsx";

var datepicker_Datepicker_calendarAbove = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$9,
  code: code$9,
  sourceCode: sourceCode$9,
  sourceImports: sourceImports$9,
  dependencies: dependencies$9,
  sourceFileName: sourceFileName$9
});

const scope$8 = {useState,Datepicker};
const code$8 = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            fullWidth={true}\n            inputProps={{ id: 'datepicker-example-full-width' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}";
const sourceCode$8 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            fullWidth={true}\n            inputProps={{ id: 'datepicker-example-full-width' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}\n\n";
const sourceImports$8 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$8 = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$8 = "datepicker/Datepicker-fullWidth.jsx";

var datepicker_Datepicker_fullWidth = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$8,
  code: code$8,
  sourceCode: sourceCode$8,
  sourceImports: sourceImports$8,
  dependencies: dependencies$8,
  sourceFileName: sourceFileName$8
});

const scope$7 = {Calendar};
const code$7 = "<Calendar language=\"nb\" onDatePicked={f => console.log(f)} />";
const sourceCode$7 = "import { Calendar } from '@sb1/ffe-datepicker-react';\n\n<Calendar language=\"nb\" onDatePicked={f => console.log(f)} />\n";
const sourceImports$7 = "import { Calendar } from '@sb1/ffe-datepicker-react';";
const dependencies$7 = ["@sb1/ffe-datepicker-react"];
const sourceFileName$7 = "datepicker/Calendar.jsx";

var datepicker_Calendar = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$7,
  code: code$7,
  sourceCode: sourceCode$7,
  sourceImports: sourceImports$7,
  dependencies: dependencies$7,
  sourceFileName: sourceFileName$7
});

const scope$6 = {useState,Datepicker};
const code$6 = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}";
const sourceCode$6 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n}\n\n";
const sourceImports$6 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$6 = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$6 = "datepicker/Datepicker-nn.jsx";

var datepicker_Datepicker_nn = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$6,
  code: code$6,
  sourceCode: sourceCode$6,
  sourceImports: sourceImports$6,
  dependencies: dependencies$6,
  sourceFileName: sourceFileName$6
});

const scope$5 = {Calendar};
const code$5 = "<Calendar language=\"en\" onDatePicked={f => console.log(f)} />";
const sourceCode$5 = "import { Calendar } from '@sb1/ffe-datepicker-react';\n\n<Calendar language=\"en\" onDatePicked={f => console.log(f)} />\n";
const sourceImports$5 = "import { Calendar } from '@sb1/ffe-datepicker-react';";
const dependencies$5 = ["@sb1/ffe-datepicker-react"];
const sourceFileName$5 = "datepicker/Calendar-en.jsx";

var datepicker_Calendar_en = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$5,
  code: code$5,
  sourceCode: sourceCode$5,
  sourceImports: sourceImports$5,
  dependencies: dependencies$5,
  sourceFileName: sourceFileName$5
});

const scope$4 = {SystemErrorMessage};
const code$4 = "<SystemErrorMessage>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>";
const sourceCode$4 = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';\n\n<SystemErrorMessage>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>\n";
const sourceImports$4 = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';";
const dependencies$4 = ["@sb1/ffe-system-message-react"];
const sourceFileName$4 = "system-message/SystemErrorMessage.jsx";

var system_message_SystemErrorMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$4,
  code: code$4,
  sourceCode: sourceCode$4,
  sourceImports: sourceImports$4,
  dependencies: dependencies$4,
  sourceFileName: sourceFileName$4
});

const scope$3 = {SystemNewsMessage};
const code$3 = "<SystemNewsMessage>\n    Velkommen til ny betaversjon av SpareBank 1!\n</SystemNewsMessage>";
const sourceCode$3 = "import { SystemNewsMessage } from '@sb1/ffe-system-message-react';\n\n<SystemNewsMessage>\n    Velkommen til ny betaversjon av SpareBank 1!\n</SystemNewsMessage>\n";
const sourceImports$3 = "import { SystemNewsMessage } from '@sb1/ffe-system-message-react';";
const dependencies$3 = ["@sb1/ffe-system-message-react"];
const sourceFileName$3 = "system-message/SystemNewsMessage.jsx";

var system_message_SystemNewsMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$3,
  code: code$3,
  sourceCode: sourceCode$3,
  sourceImports: sourceImports$3,
  dependencies: dependencies$3,
  sourceFileName: sourceFileName$3
});

const scope$2 = {SystemErrorMessage};
const code$2 = "<SystemErrorMessage alert={false}>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>";
const sourceCode$2 = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';\n\n<SystemErrorMessage alert={false}>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>\n";
const sourceImports$2 = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';";
const dependencies$2 = ["@sb1/ffe-system-message-react"];
const sourceFileName$2 = "system-message/SystemErrorMessage-alertFalse.jsx";

var system_message_SystemErrorMessage_alertFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2,
  code: code$2,
  sourceCode: sourceCode$2,
  sourceImports: sourceImports$2,
  dependencies: dependencies$2,
  sourceFileName: sourceFileName$2
});

const scope$1 = {SystemSuccessMessage};
const code$1 = "<SystemSuccessMessage>\n    Alle systemene våre funker!\n</SystemSuccessMessage>";
const sourceCode$1 = "import { SystemSuccessMessage } from '@sb1/ffe-system-message-react';\n\n<SystemSuccessMessage>\n    Alle systemene våre funker!\n</SystemSuccessMessage>\n";
const sourceImports$1 = "import { SystemSuccessMessage } from '@sb1/ffe-system-message-react';";
const dependencies$1 = ["@sb1/ffe-system-message-react"];
const sourceFileName$1 = "system-message/SystemSuccessMessage.jsx";

var system_message_SystemSuccessMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1,
  code: code$1,
  sourceCode: sourceCode$1,
  sourceImports: sourceImports$1,
  dependencies: dependencies$1,
  sourceFileName: sourceFileName$1
});

const scope = {SystemInfoMessage};
const code = "<SystemInfoMessage>\n    Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.\n</SystemInfoMessage>";
const sourceCode = "import { SystemInfoMessage } from '@sb1/ffe-system-message-react';\n\n<SystemInfoMessage>\n    Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.\n</SystemInfoMessage>\n";
const sourceImports = "import { SystemInfoMessage } from '@sb1/ffe-system-message-react';";
const dependencies = ["@sb1/ffe-system-message-react"];
const sourceFileName = "system-message/SystemInfoMessage.jsx";

var system_message_SystemInfoMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope,
  code: code,
  sourceCode: sourceCode,
  sourceImports: sourceImports,
  dependencies: dependencies,
  sourceFileName: sourceFileName
});

var index = { form_PhoneNumber, form_TextArea, form_Label, form_TextArea_ref, form_RadioSwitch_fieldMessageUnselected, form_RadioButtonInputGroup, form_RadioButton, form_ErrorFieldMessage, form_InputGroup_multiChildren, form_Checkbox_invalid, form_Checkbox_inlineFalse, form_RadioButton_inline, form_Tooltip_external, form_InputGroup_extraMarginFalse, form_InputGroup, form_SuccessFieldMessage, form_RadioBlock, form_Checkbox, form_Checkbox_renderProps, form_InputGroup_fieldMessage, form_Checkbox_hiddenLabel, form_Input_textLike, form_Input, form_Tooltip, form_RadioSwitch_selectedValue, form_Checkbox_onChange, form_InfoFieldMessage, form_Input_ref, form_RadioButtonInputGroup_extraMarginFalse, form_RadioButton_tooltip, form_RadioSwitch_fieldMessage, form_InputGroup_description, form_RadioSwitch, collapse_Collapse_onRest, collapse_Collapse, details_list_DetailList, tables_Table_customRender, tables_Table_advanced, tables_Table, tables_Table_expandedContentMapper, accordion_Accordion, accordion_Accordion_managed, accordion_Accordion_open, cards_IconCard_greyCharcoal, cards_IconCard, cards_CardBase, cards_TextCard, cards_IconCard_condensed, cards_ImageCard_titleOnly, cards_ImageCard, file_upload_FileUpload, context_message_ContextErrorMessage, context_message_ContextSuccessMessage_compact, context_message_ContextInfoMessage, context_message_ContextInfoMessage_compact, context_message_ContextTipMessage, context_message_ContextErrorMessage_showCloseButton, context_message_ContextErrorMessage_header, context_message_ContextInfoMessage_icon, context_message_ContextErrorMessage_compact, context_message_ContextSuccessMessage_header, context_message_ContextSuccessMessage_icon, context_message_ContextTipMessage_showCloseButton, context_message_ContextErrorMessage_alertFalse, context_message_ContextErrorMessage_icon, context_message_ContextTipMessage_icon, context_message_ContextTipMessage_compact, context_message_ContextTipMessage_header, context_message_ContextInfoMessage_header, context_message_ContextInfoMessage_showCloseButton, context_message_ContextSuccessMessage_showCloseButton, context_message_ContextSuccessMessage, dropdown_Dropdown_invalid, dropdown_Dropdown, buttons_ShortcutButton, buttons_SecondaryButton, buttons_ExpandButton, buttons_InlineExpandButton, buttons_ButtonGroup_inline, buttons_ButtonGroup, buttons_ButtonGroup_thin, buttons_ActionButton, buttons_TaskButton, buttons_PrimaryButton, buttons_ariaLoadingMessage, buttons_BackButton, buttons_TertiaryButton, chart_donut_ChartDonut, lists_CheckList, lists_DescriptionList, lists_BulletList, lists_DescriptionList_horizontal, lists_DescriptionListMultiCol, lists_NumberedList, lists_StylizedNumberedList, lists_DescriptionList_mediumlarge, lists_CheckList_columns, spinner_Spinner_large, spinner_Spinner, typography_DividerLine, typography_LinkText_icon, typography_EmphasizedText, typography_StrongText, typography_SmallText, typography_MicroText, typography_PreformattedText, typography_LinkText, typography_Heading, typography_Paragraph, message_box_InfoMessage, message_box_InfoMessage_customIcon, message_box_ErrorMessage, message_box_InfoMessageList, message_box_TipsMessage, message_box_ErrorMessage_alertFalse, message_box_SuccessMessage, grid_GridCol_background, grid_Grid, grid_InlineGrid_nested, grid_Grid_4col, grid_GridRow_background, grid_InlineGrid, tabs_Tab, tabs_TabGroup_thin, tabs_Tab_customProps, tabs_TabButton_condensed, tabs_Tab_selected, tabs_TabButtonGroup_advanced, tabs_Tab_condensed, tabs_TabGroup_advanced, tabs_TabButton, tabs_TabButtonGroup, tabs_TabButtonGroup_thin, tabs_TabButton_customProps, tabs_TabButton_selected, tabs_TabGroup, account_selector_AccountSelectorMulti, account_selector_AccountSelector, datepicker_Datepicker_en, datepicker_Datepicker, datepicker_Calendar_nn, datepicker_Datepicker_invalid, datepicker_Datepicker_calendarAbove, datepicker_Datepicker_fullWidth, datepicker_Calendar, datepicker_Datepicker_nn, datepicker_Calendar_en, system_message_SystemErrorMessage, system_message_SystemNewsMessage, system_message_SystemErrorMessage_alertFalse, system_message_SystemSuccessMessage, system_message_SystemInfoMessage };

export { index as examples, packageList as packages, reactdoc as reactDoc };
