import React, {FC} from 'react';
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionPropsType {
    title: string,
    children: React.ReactNode,
}

const AccordionComponent: FC<AccordionPropsType> = ({title, children}) => {
    return (
        <Accordion sx={{boxShadow: 'none'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <div className={'bold-16'}>{title}</div>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionComponent;
