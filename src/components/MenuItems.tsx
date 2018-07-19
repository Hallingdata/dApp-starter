import * as React from "react"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import {
  Send as SendIcon,
  Star as StarIcon,
  Drafts as DraftsIcon,
  Inbox as InboxIcon,
} from "@material-ui/icons"

export default (
  <div>
    <ListItem button={true}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
)
