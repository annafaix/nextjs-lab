import React, {Component} from 'react'
import Head from '../components/head'
import Sidebar from '../components/Sidebar'
import { Button, Icon, Image, Item, Label, Modal } from 'semantic-ui-react'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

class ContactList extends Component{
  state = { open: false }

    open = () => this.setState({open: true })
    close = () => this.setState({ open: false })

  render(){
    const {open} = this.state

    return (<div>
      <Head title="ContactList" />
      <Sidebar/>
      <Item.Group divided>
        <Item>
          <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header>Name</Item.Header>
            <Item.Meta>
              <span className='cinema'>Group</span>
            </Item.Meta>
            <Item.Description>
              70673267123
              <br/>
              jon.doe@email.com
            </Item.Description>
            <Item.Extra>
            <Button color="green" floated='right' icon labelPosition='left'>
              Edit
              <Icon name='edit' />
            </Button>
              <Button onClick={this.open} color="red" floated='right' icon labelPosition='left'>
                Delete
                <Icon name='trash alternate outline' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

      <Modal size="tiny" open={open} onClose={this.close}>
              <Modal.Header>Delete Contact</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to delete this contact</p>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={this.open}  negative>No</Button>
                <Button positive icon='checkmark' labelPosition='right' content='Yes' />
              </Modal.Actions>
            </Modal>
      </div>)
    }
}

export default ContactList
