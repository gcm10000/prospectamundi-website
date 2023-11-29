import React, { MouseEventHandler } from 'react';
import './style.css';

import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { Avatar, Chip } from '@mui/material';

export interface DropdownButtonProps {
  text: string,
  onClick: () => void,
  deleteflag: boolean
};


function ChipWithDropdown({
    label,
    srcURL,
    dropdownButtons,
}: {
    label?: string,
    srcURL?: string,
    dropdownButtons: DropdownButtonProps[],
}) {

    const blue = {
        50: '#F0F7FF',
        100: '#C2E0FF',
        200: '#99CCF3',
        300: '#66B2FF',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E6',
        700: '#0059B3',
        800: '#004C99',
        900: '#003A75',
      };
      
      const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
      };
      
      const Listbox = styled('ul')(
        ({ theme }) => `
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        box-sizing: border-box;
        padding: 6px;
        margin: 12px 0;
        min-width: 200px;
        border-radius: 12px;
        overflow: auto;
        outline: 0px;
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
        z-index: 999;
        `,
      );
      
      const MenuItem = styled(BaseMenuItem)<{ deleteflag: 'true' | 'false' }>(
        ({ theme, deleteflag  }) => `
        list-style: none;
        padding: 8px;
        border-radius: 8px;
        cursor: default;
        user-select: none;
        z-index: 999;
        ${
          deleteflag !== undefined && deleteflag.toString() === 'true'
            ? 'color: red;'
            : ''
        }

        &:last-of-type {
          border-bottom: none;
        }
      
        &.${menuItemClasses.focusVisible} {
          outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
          background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
          color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        }
      
        &.${menuItemClasses.disabled} {
          color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
        }
      
        &:hover:not(.${menuItemClasses.disabled}) {
          background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[50]};
          color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
          ${deleteflag == 'true' ? 'color: red;' : ''}
        }
        `,
      );
      
      const MenuButton = styled(BaseMenuButton)(
        ({ theme }) => `
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.5;
        transition: all 150ms ease;
        cursor: pointer;
        background: transparent;
        border: 0px;
        `,
      );


  return (
    <Dropdown>
      <MenuButton sx={{cursor: (dropdownButtons.length == 0) ? 'no-drop' : ''}}>
            <Chip 
                label={label} 
                color="warning" 
                avatar={<Avatar src={srcURL} />} 
                style={{marginTop: 'auto'}}
            />
      </MenuButton>
      {
        dropdownButtons.length > 0 && 
            <Menu slots={{ listbox: Listbox }}>
            { 
                dropdownButtons.map((x, index) => 
                    <MenuItem onClick={() => {x.onClick()}} 
                              key={index}
                              deleteflag={(x.deleteflag?.toString() || false) as any}>
                        {x.text}
                    </MenuItem>
            )}
          </Menu>
      }
    </Dropdown>
  )
}

export default ChipWithDropdown;
