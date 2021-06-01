import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchableDropdown from './SearchableDropdown';

describe('SearchableDropdown', () => {
    beforeAll(() => {
        /*
         * Mocking offsetHeight and offsetWidth makes AutoSizer from react-virtualized work as expected.
         * Based on https://github.com/bvaughn/react-virtualized/issues/493#issuecomment-640084107.
         */
        jest.spyOn(
            HTMLElement.prototype,
            'offsetHeight',
            'get',
        ).mockReturnValue(50);
        jest.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(
            50,
        );
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    const companies = [
        {
            organizationName: 'Bedriften',
            organizationNumber: '912602370',
            quantityUnprocessedMessages: 5,
        },
        {
            organizationName: 'Sønn & co',
            organizationNumber: '812602372',
            quantityUnprocessedMessages: 3,
        },
        {
            organizationName: 'Beslag skytter',
            organizationNumber: '812602552',
            quantityUnprocessedMessages: 1,
        },
    ];

    it('should show filtered result', () => {
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        userEvent.type(input, 'Be');

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.queryByText('Sønn & co')).toBeNull();
        expect(screen.queryByText('812602372')).toBeNull();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();

        userEvent.clear(input);
        userEvent.type(input, '8126023');

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.queryByText('Beslag skytter')).toBeNull();
        expect(screen.queryByText('812602552')).toBeNull();
    });

    it('should select clicked element', () => {
        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        userEvent.type(input, 'Be');

        userEvent.click(screen.getByText('Bedriften'), { button: 1 });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[0]);
        expect(input.value).toEqual('Bedriften');
    });

    it('should be possible to select item with keyboard', () => {
        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        userEvent.click(input);

        userEvent.type(input, '{arrowdown}');
        userEvent.type(input, '{arrowdown}');
        userEvent.type(input, '{enter}');

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[1]);
        expect(input.value).toEqual('Sønn & co');
    });

    it('should show "noMatch" values', () => {
        const noMatchDropDownList = [
            {
                organizationName: 'Rør og sånt',
                organizationNumber: '812602399',
                quantityUnprocessedMessages: 7,
            },
            {
                organizationName: 'Kaffekoppen',
                organizationNumber: '812602222',
                quantityUnprocessedMessages: 8,
            },
        ];
        const noMatchText = 'No result';

        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                noMatch={{
                    text: noMatchText,
                    dropdownList: noMatchDropDownList,
                }}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        userEvent.click(input);
        userEvent.type(input, 'some thing without a match');

        expect(screen.getByText(noMatchText)).toBeInTheDocument();
        expect(screen.getByText('Rør og sånt')).toBeInTheDocument();
        expect(screen.getByText('812602399')).toBeInTheDocument();
        expect(screen.getByText('Kaffekoppen')).toBeInTheDocument();
        expect(screen.getByText('812602222')).toBeInTheDocument();

        userEvent.clear(input);

        expect(screen.queryByText(noMatchText)).toBeNull();
        expect(screen.queryByText('Rør og sånt')).toBeNull();
        expect(screen.queryByText('812602399')).toBeNull();
        expect(screen.queryByText('Kaffekoppen')).toBeNull();
        expect(screen.queryByText('812602222')).toBeNull();
    });

    it('should have clear button', () => {
        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        userEvent.type(input, 'Be');

        userEvent.click(screen.getByText('Bedriften'), { button: 1 });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith(companies[0]);
        expect(input.value).toEqual('Bedriften');

        const clearButton = screen.getByRole('button', {
            name: /fjern valgt/i,
        });

        userEvent.click(clearButton);

        expect(onChange).toHaveBeenCalledTimes(2);
        expect(onChange).toHaveBeenLastCalledWith(null);
        expect(input.value).toEqual('');
    });

    it('should render custom elements', () => {
        /* eslint-disable react/prop-types */
        const CustomListItemBody = ({ item, isHighlighted }) => {
            return (
                <div
                    data-testid={item.organizationNumber}
                    data-is-higlighted={isHighlighted}
                >
                    {item.organizationName},{item.organizationNumber},
                    {item.quantityUnprocessedMessages}
                </div>
            );
        };
        /* eslint-enable react/prop-types */

        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                listElementBody={CustomListItemBody}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        userEvent.click(input);

        userEvent.type(input, '{arrowdown}');

        const listItemBody0 = screen.getByTestId(
            companies[0].organizationNumber,
        );
        expect(listItemBody0).toBeInTheDocument();
        expect(listItemBody0.getAttribute('data-is-higlighted')).toEqual(
            'true',
        );
        expect(screen.getByText('Bedriften,912602370,5')).toBeInTheDocument();

        const listItemBody1 = screen.getByTestId(
            companies[1].organizationNumber,
        );
        expect(listItemBody1).toBeInTheDocument();
        expect(listItemBody1.getAttribute('data-is-higlighted')).toEqual(
            'false',
        );
        expect(screen.getByText('Sønn & co,812602372,3')).toBeInTheDocument();

        const listItemBody2 = screen.getByTestId(
            companies[2].organizationNumber,
        );
        expect(listItemBody2).toBeInTheDocument();
        expect(listItemBody2.getAttribute('data-is-higlighted')).toEqual(
            'false',
        );
        expect(
            screen.getByText('Beslag skytter,812602552,1'),
        ).toBeInTheDocument();
    });

    it('should open and close', function() {
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const openButton = screen.getByRole('button', {
            name: /åpne alternativer/i,
        });

        userEvent.click(openButton, { button: 1 });

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();

        const closeButton = screen.getByRole('button', {
            name: /lukk alternativer/i,
        });

        userEvent.click(closeButton, { button: 1 });

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.queryByText('Sønn & co')).toBeNull();
        expect(screen.queryByText('812602372')).toBeNull();
        expect(screen.queryByText('Beslag skytter')).toBeNull();
        expect(screen.queryByText('812602552')).toBeNull();
    });

    it('should filter only when value is changed', () => {
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        userEvent.click(input);

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();

        userEvent.type(input, 'Sønn');

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.queryByText('Beslag skytter')).toBeNull();
        expect(screen.queryByText('812602552')).toBeNull();

        userEvent.clear(input);

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();
    });

    it('should be a wai-aria 1.0 combobox', () => {
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        userEvent.click(input);
        userEvent.type(input, '{arrowdown}');
        userEvent.type(input, '{arrowdown}');

        const listBox = screen.getByRole('listbox');
        const options = screen.getAllByRole('option');

        expect(input.getAttribute('aria-autocomplete')).toEqual('list');
        expect(input.getAttribute('autocomplete')).toEqual('off');
        expect(input.getAttribute('aria-activedescendant')).toEqual(
            options[1].getAttribute('id'),
        );
        expect(input.getAttribute('aria-controls')).toEqual(
            listBox.getAttribute('id'),
        );
        expect(input.getAttribute('aria-haspopup')).toEqual('listbox');

        options.forEach((option, index) =>
            expect(option.getAttribute('aria-selected')).toEqual(
                index === 1 ? 'true' : 'false',
            ),
        );
    });

    it('should highlight the first element when typing', () => {
        const onChange = jest.fn();
        const { container } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        userEvent.click(input);

        userEvent.type(input, 'Be');

        const highlightedElements = container.querySelectorAll(
            '.ffe-searchable-dropdown__list-item-body--highlighted',
        );
        expect(highlightedElements).toHaveLength(1);
        expect(highlightedElements[0].innerHTML).toContain('Bedriften');
    });

    it('should call onChange(null) when emptying the input field and moving focus away', () => {
        const onChange = jest.fn();
        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelId="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={companies}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                />
            </div>,
        );

        const input = screen.getByRole('combobox');

        userEvent.type(input, 'Be');

        userEvent.click(screen.getByText('Bedriften'), { button: 1 });

        userEvent.clear(input);

        act(() => {
            userEvent.click(screen.getByText('Knapp'));
        });

        expect(onChange).toHaveBeenCalledTimes(2);
        expect(onChange).toHaveBeenCalledWith(null);
        expect(input.value).toEqual('');
    });

    it('should reset the input field value to the saved selected element when pressing Escape', () => {
        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        userEvent.type(input, 'Be');

        userEvent.click(screen.getByText('Bedriften'), { button: 1 });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[0]);
        expect(input.value).toEqual('Bedriften');

        userEvent.clear(input);
        userEvent.type(input, 'Sø');
        expect(input.value).toEqual('Sø');

        userEvent.type(input, '{esc}');
        expect(input.value).toEqual('Bedriften');
    });

    it('should move focus to input field when selecting from dropdown, and to toggle button when clicking clear button', () => {
        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        userEvent.click(input);
        userEvent.click(screen.getByText('Bedriften'), { button: 1 });
        expect(document.activeElement).toEqual(input);

        const clearButton = screen.getByLabelText('fjern valgt');
        userEvent.click(clearButton, { button: 1 });
        const toggleButton = screen.getByLabelText('åpne alternativer');
        expect(document.activeElement).toEqual(toggleButton);
    });

    it('should reset the input value to the selected item when losing focus', () => {
        const onChange = jest.fn();
        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelId="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={companies}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                />
            </div>,
        );

        const input = screen.getByRole('combobox');

        userEvent.type(input, 'Be');
        userEvent.click(screen.getByText('Bedriften'), { button: 1 });
        expect(input.value).toEqual('Bedriften');

        userEvent.clear(input);
        userEvent.type(input, 'Besla');
        expect(input.value).toEqual('Besla');

        act(() => {
            userEvent.click(screen.getByText('Knapp'));
        });
        expect(input.value).toEqual('Bedriften');
    });

    it('should format input value when passing formatter', () => {
        const onChange = jest.fn();
        const formatter = jest.fn(text => {
            return text
                .split('')
                .map(char => `${char}!?_`)
                .join('');
        });

        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                formatter={formatter}
            />,
        );

        const input = screen.getByRole('combobox');
        userEvent.type(input, 'H');
        expect(input.value).toEqual('H!?_');
    });

    it('allows using a custom search matcher', () => {
        const onChange = jest.fn();
        const cleanString = value => `${value}`.replace(/h/g, 'sky');

        const searchMatcher = jest.fn(
            (inputValue, searchAttributes) => item => {
                const cleanedInputValue = cleanString(inputValue);
                return searchAttributes
                    .map(searchAttribute => cleanString(item[searchAttribute]))
                    .some(cleanedItemAttribute =>
                        cleanedItemAttribute.includes(cleanedInputValue),
                    );
            },
        );

        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                searchMatcher={searchMatcher}
            />,
        );

        const input = screen.getByRole('combobox');
        userEvent.type(input, 'Beslag htter');
        expect(input.value).toEqual('Beslag htter');

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.queryByText('Sønn & co')).toBeNull();
        expect(screen.queryByText('812602372')).toBeNull();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();
    });

    it('allows passing a selected item', () => {
        const onChange = jest.fn();

        const { rerender } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        expect(input.value).toBe('');

        rerender(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                selectedItem={companies[2]}
            />,
        );

        expect(input.value).toBe('Beslag skytter');
    });

    it('allows for writing and selecting even when passing selectedItem', () => {
        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                selectedItem={companies[1]}
            />,
        );

        const input = screen.getByRole('combobox');

        expect(input.value).toBe('Sønn & co');

        userEvent.clear(input);
        userEvent.type(input, 'Be');

        userEvent.click(screen.getByText('Beslag skytter'), { button: 1 });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[2]);
        expect(input.value).toEqual('Beslag skytter');
    });

    it('clears selected item dropdownList changes so that it no longer contains the item in the selectedItem prop', () => {
        const onChange = jest.fn();

        const { rerender } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                selectedItem={companies[2]}
            />,
        );

        const input = screen.getByRole('combobox');

        expect(input.value).toBe('Beslag skytter');

        rerender(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies.slice(0, 2)}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                selectedItem={companies[2]}
            />,
        );

        expect(input.value).toBe('');
    });

    it('clears selected item if the selectedItem prop changes to something that does not exist in dropdownList', () => {
        const onChange = jest.fn();

        const { rerender } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                selectedItem={companies[2]}
            />,
        );

        const input = screen.getByRole('combobox');

        expect(input.value).toBe('Beslag skytter');

        rerender(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                selectedItem={{
                    organizationName: 'Min nye bedrift',
                    organizationNumber: '8888',
                    quantityUnprocessedMessages: 9,
                }}
            />,
        );

        expect(input.value).toBe('');
    });

    it('should set selected item to the single item matching element in dropdown list when losing focus', () => {
        const onChange = jest.fn();
        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelId="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={companies}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                />
            </div>,
        );

        const input = screen.getByRole('combobox');
        userEvent.type(input, 'Bedriften');

        act(() => {
            userEvent.click(screen.getByText('Knapp'));
        });

        expect(input.value).toEqual('Bedriften');
    });

    it('should set input value as the selected item if specified', () => {
        const onChange = jest.fn();
        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelId="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={companies}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                    allowCustomItem={true}
                />
            </div>,
        );

        const input = screen.getByRole('combobox');
        userEvent.type(input, 'Hallopådeg');

        act(() => {
            userEvent.click(screen.getByText('Knapp'));
        });

        expect(input.value).toEqual('Hallopådeg');
    });
});
