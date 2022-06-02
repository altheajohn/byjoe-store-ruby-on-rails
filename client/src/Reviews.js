import React, { useEffect, useState } from "react";
import {
	Container,
	Button,
	Header,
	Icon,
	Segment,
	Image,
	Form,
	// Input,
	// TextArea,
} from "semantic-ui-react";

import MainHeader from "./Header.js";
import MainFooter from "./Footer.js";
import ReviewCard from "./ReviewCard.js";

function Reviews() {

	const [review, setReview] = useState([]);
	const [errors, setErrors] = useState("");

	useEffect(() => {
		fetch(`/reviews`).then((res) => {
			if (res.ok) {
				res.json().then((review) => {
					setReview(review);
				});
			} else {
				res.json().then((json) => setErrors(json.error));
			}
		});
	}, []);

	return (
		<>
			<MainHeader />

			<div className='center'>
				<h1 className='centerp'>Reviews</h1>
			</div>
			<Container>
				<Segment style={{ marginTop: "2em" }}>
					{/* ------------------------- Reviews --------------------*/}

					{review?.map((item) => (
						<ReviewCard
							content={item.content}
							full_name={item.full_name}
							// email={item.email}
							// rating={item.rating}
							image={item.image}
						/>
					))}

					{/* ------------------------- Review Form -------------------- */}
				</Segment>
				<Header as='h3' style={{ fontSize: "1.5em" }}>
					Submit A Review
				</Header>

				<Segment placeholder style={{ marginTop: "1em", marginBottom: "10em" }}>
					<Header icon>
						<Icon name='image outline' />
						Upload Image
					</Header>
					<Button primary>Add Image</Button>

					<Form style={{ marginTop: "1em" }}>
						<Form.Input fluid label='First name' placeholder='First name' />
						<Form.Input fluid label='Last name' placeholder='Last name' />

						<Form.TextArea
							label='Review'
							placeholder='Tell us more about your order...'
						/>

						<Form.Button primary>Submit Review</Form.Button>
					</Form>
				</Segment>
			</Container>
			<MainFooter />
		</>
	);
}

export default Reviews;
