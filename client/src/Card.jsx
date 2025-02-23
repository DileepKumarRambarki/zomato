import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Location from '@mui/icons-material/LocationOnSharp';
import { MdCall } from "react-icons/md";
export default function BasicCard(props) {
  return (
    <Card sx={{ width:"320px","&:hover":{transform:"scale(1.1)"} ,"transition":"transform 0.3s ease-in-out"}}>
      <div>
        <Typography level="title-lg">{props.name}</Typography>
        <Typography level="body-sm">{props.address}</Typography>
        <a href={`https://www.google.com/maps?q=${props.location[1]},${props.location[0]}
`} target='_blank'>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <Location />
        </IconButton>
        </a>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={props.image}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Rating:{props.rating}</Typography>
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}><MdCall/>mobile</Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Book Table
        </Button>
      </CardContent>
    </Card>
  );
}
