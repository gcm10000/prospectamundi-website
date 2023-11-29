import { FormControl, InputLabel, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import React, { ReactNode, useEffect, useState } from 'react';
import './style.css';
import { setShowError } from '@/handlers/errorHandling';

export interface GroupedSelectProps {
    label: string,
    name: string,
    children: ReactNode,
    renderValue?: (value: any[]) => void,
    value: string[],
    onChange: (value: string[]) => void
}

function GroupedSelect({ label, name, children, renderValue, value, onChange }: GroupedSelectProps) {
    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
        setShowError((errorObject) => {
            const errorArray : string[] = errorObject[name];
            console.log(errorArray);
            if (errorArray) {
                setErrors(errorArray);
            }
        });
        }, []);
        
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

const handleChange = (event: SelectChangeEvent<string>) => {
    const { target: { value } } = event;
    const result = (typeof value === 'string' ? value.split(',') : value);
    onChange(result);
};

  return (
    <>
        <FormControl sx={{ m: 0, width: '100%' }}>
            <InputLabel id="demo-multiple-checkbox-label" sx={{color: 'black', '&.Mui-focused': {
            color: 'black'
            }}}>{label}</InputLabel>
            <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={value as any}
            onChange={handleChange}
            // renderValue={(selected) => selected.map(x => categoriesFromAPI.items.find(y => y.id == x)?.name).join(', ')}
            renderValue={renderValue as any}
            input={<OutlinedInput label={label} />}
            MenuProps={MenuProps}
            sx={{
                color: "black",
                background: 'white',
                '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
                },
                '.MuiSvgIcon-root ': {
                fill: "black !important",
                }
            }}
            onOpen={() => {
                document.documentElement.classList.add('hide-html-scroll');
            }}
            onClose={() => {
                document.documentElement.classList.remove('hide-html-scroll');
            }}
            >
                { children }
            </Select>
        </FormControl>
        {errors.map((x, index) => (<p key={index} style={{color: 'red', fontWeight: 500}}>{x}</p>))}
    </>
  )
}

export default GroupedSelect;
