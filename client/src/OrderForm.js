import React from "react";
import {
	Form,
	Message,
	Icon,
	Button,
} from "semantic-ui-react";
import MainHeader from "./Header.js";
import MainFooter from "./Footer.js";

    
function OrderForm(){
    	const options = [
				{ key: "s", text: "Self", value: "self" },
				{ key: "f", text: "Friend", value: "friend" },
				{ key: "o", text: "Other", value: "other" },
			];

    return (
    <>
        <div><MainHeader />
		
            <Message
                attached
                header='Custom Order Form '
                content='Fill out the form below to for a custom order qoute.'
            />
            <Form className='attached fluid segment'>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label='First Name'
                        placeholder='First Name'
                        type='text'
                    />
                    <Form.Input
                        fluid
                        label='Last Name'
                        placeholder='Last Name'
                        type='text'
                    />
                </Form.Group>
                <Form.Input label='E-mail' placeholder='E-mail' type='text' />
                <Form.Input
                    label='Phone Number'
                    type='phone number'
                    placeholder='000-000-0000'
                />

                <Form.Select
                    fluid
                    label='Who is this Order for?'
                    options={options}
                    placeholder='Select One'
                />
                <Form.TextArea
                    label='Order Details'
                    placeholder='Please Fill this form out sizes and a decription of what you want to order...
					
Example: Hello! I am intresed in the Coral Set, large. My ring size is 7.5 and necklace length is 24 inchs. '
                />

                <Form.Checkbox
                    inline
                    label='I acknowledge the Sizes listed in the form are Correct'
                />
                <Button color='blue'>Submit</Button>
            </Form>
            <Message attached='bottom' warning>
                <Icon name='warning' />
                Reminder: All Custom Orders ONCE STARTED are NON REFUNDABLE.
            </Message>
            </div>
            
            <MainFooter />
        </>
    );
}

export default OrderForm;
