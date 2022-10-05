import Typography from '@mui/material/Typography';



export const MTypography = () => {
  return (
    <div>
        <Typography>Hello World</Typography>
        <Typography variant='h1' component='h6'>Hello H1</Typography>
        <Typography variant='h2'>Hello H2</Typography>
        <Typography variant='h3'>Hello H3</Typography>
        <Typography variant='h4'>Hello H4</Typography>
        <Typography variant='h5'>Hello H5</Typography>
        <Typography variant='h6'>Hello H6</Typography>
        
        <Typography variant='body1'>Hello World How are you!!!!</Typography>
        <Typography variant='body2'>Hello World again How are you!!!!</Typography>

        <Typography variant='subtitle1'>This is subtitle 1</Typography>
        <Typography variant='subtitle2'>This is subtitle 2</Typography>
    </div>
  )
}
