import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { blue, green, pink, yellow } from '@material-ui/core/colors';


const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if(note.category == 'reminders'){
                return pink[500]
            }
            if(note.category == 'shopping'){
                return yellow[700]
            }
            if(note.category == 'work'){
                return green[700]
            }
            return blue[700]
        }
    }
})

const NoteCard = ({note, handleDelete}) => {
    const classes = useStyles(note)
    return ( 
        <div>
            <Card elevation={1}>
                <CardHeader 
                    avatar={
                      <Avatar className={classes.avatar}>
                          {note.category[0].toUpperCase()}
                      </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlineIcon/>
                        </IconButton>
                    }
                  title={note.title}
                  subheader={note.category}
                />
                <CardContent>
                    <Typography variant='body2' color='text-secondary'>
                         {note.details}
                    </Typography>
                </CardContent>
            </Card>
           
        </div>
    );
}
 
export default NoteCard;