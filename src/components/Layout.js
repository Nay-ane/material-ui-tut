import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useHistory, useLocation } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { format } from 'date-fns';
import avatarNinja from '../assets/cartoon-ninja.png'

const drawerWidth = 180
const heightAppBar = 110

const useStyles = makeStyles((theme) =>{
    return {
        root: {
            display: 'flex'
        },
    
        page: {
            background: "#f9f9f9",
            width: '100%',
            padding: theme.spacing(3)
        },
    
        drawer: {
            width: drawerWidth,
            background: '#F0F0F5',
        },
        
        drawerPaper: {
            width: drawerWidth,
        },

        active: {
            background: '#f4f4f4'
        },

        title: {
            padding: theme.spacing(2)
        },

        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            height: heightAppBar
        },

        toolbar: theme.mixins.toolbar,

        date: {
            flexGrow: 1
        },

        avatar: {
            marginLeft: theme.spacing(1)
        }

    }
})


const Layout = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItens = [
        {
            text:'My notes',
            icon: <SubjectOutlinedIcon color="secondary"/>,
            path: '/'
        },
        {
            text:'Create notes',
            icon: <AddCircleOutlineOutlinedIcon color="secondary"/>,
            path: '/create'
        }
    ]

    return ( 
        <div className={classes.root}>
            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is {format(new Date(), 'dd/MMM/yyyy' )}
                    </Typography>
                    <Typography>
                        Nina
                    </Typography>
                    <Avatar src={avatarNinja} className={classes.avatar}/>
                </Toolbar>
            </AppBar>
            <Drawer  
                variant="permanent" 
                className={classes.drawer}
                anchor="left"
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                     Ninja Notes
                    </Typography>
                </div>

              <List>
                 {
                    menuItens.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={()=> history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))
                 }
              </List>

            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
       
        </div>
    );
}
 
export default Layout;