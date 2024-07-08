import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export default function TodoItems({ todo, removeTodo, toggle }) {
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        <ListItem

            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                    <HighlightOffIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggle}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
        </ListItem>
    );
}