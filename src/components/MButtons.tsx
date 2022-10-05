import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export const MButtons = () => {
  return (
    <div>
        {/* Types of Button */}
        <Button variant='text'>Click Here</Button>
        <br /><br />
        <Button variant='contained'>Contained</Button>
        <br /><br />
        <Button variant='outlined'>Outlined</Button>

        {/* Using HREF in Button */}
        <br /><br />
        <Button variant='contained' href='https://google.com'>Go to Google</Button>
        <br /><br />

        {/* Disabled Button */}
        <Button disabled variant='contained'>Disabled Button</Button>

        <br /><br /><br /><br />
        <Button variant='contained' color='primary'>Primary</Button>
        <br /><br />
        <Button variant='contained' color='secondary'>Secondary</Button>
        <br /><br />
        <Button variant='contained' color='error'>Error</Button>
        <br /><br />
        <Button variant='contained' color='warning'>Warning</Button>
        <br /><br />
        <Button variant='contained' color='info'>Info</Button>
        <br /><br />
        <Button variant='contained' color='success'>Success</Button>

        <br /><br /><br /><br />
        <Button variant='contained' size='small' color='error'>Small</Button>
        <br /><br />
        <Button variant='contained' size='medium'>Medium</Button>
        <br /><br />
        <Button variant='contained' size='large'>Large</Button>

        <br /><br /><br /><br />
        <Button variant='contained' startIcon={<DeleteIcon />}>Delete</Button>
        <br /><br />
        <Button variant='outlined' endIcon={<SendIcon />}>Send</Button>
        <br /><br />
        <IconButton color='error' size='large'>
            <SendIcon />
        </IconButton>
    </div>
  )
}
