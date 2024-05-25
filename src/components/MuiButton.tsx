import React from 'react';
import { Button} from '@mui/material'
import Tooltip from '@mui/material/Tooltip';

type Props = {
    title : string,
    caption : string,
    placement: 'top-start'|'top'|'top-end'|'left-start'|'left'|'left-end'|'right-start'|'right'|'right-end'|'bottom-start'|'bottom'|'bottom-end',
    color : 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    size: 'small' | 'medium' | 'large',
    startIcon : React.ReactNode,
    endIcon : React.ReactNode,
    onClick?: () => void
}

const MuiButton = (props: Props) => {

  return (
    <Tooltip title={props.title} placement={props.placement}>
        <Button 
            variant='contained' 
            size={props.size} 
            startIcon={props.startIcon} 
            endIcon={props.endIcon} 
            color={props.color} 
            onClick={props.onClick}
        >
            {props.caption}
        </Button>
    </Tooltip>
  )
}

MuiButton.defaultProps = {
    title: '',
    caption: 'this button',
    placement: 'bottom-end',
    color: 'inherit',
    size: 'medium',
    startIcon: "",
    endIcon: "",
    onclick: undefined

}

export default MuiButton
