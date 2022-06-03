import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Button,
	Header,
	Icon,
	Segment,
	Image,
	Form,
	Modal,
	Item,
	// Input,
	// TextArea,
} from "semantic-ui-react";

import AdminHeader from "./AdminHeader.js";
import AdminFooter from "./AdminFooter.js";
import ReviewCard from "./ReviewCard.js";

function Reviews() {
	const [open, setOpen] = React.useState(false);

	const [fullname, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [review, setReview] = useState("");
	const [content, setContent] = useState("");
	const [image, setImage] = useState("");
	const [show, setShow] = useState([{}]);
	const [rating, setRating] = useState("");
	const [updatedFullName, setUpdatedFullName] = useState("");
	const [updatedEmail, setUpdatedEmail] = useState("");
	const [updatedReview, setUpdatedReview] = useState("");
	const [updatedContent, setUpdatedContent] = useState("");
	const [updatedRating, setUpdatedRating] = useState("");
	const [updatedId, setUpdatedId] = useState("");
	const [id, setId] = useState(0);
	const [update, setUpdate] = useState([]);
	const data = {
		full_name: fullname,
		email: email,
		content: content,
		image: image,
		rating: rating,
		id: id,
	};

	const postSet = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	};

	function handleSubmit(event) {
		event.preventDefault();
		fetch("/reviews", postSet)
			.then((response) => response.json())
			.then((data) => setShow([...show, data]));
		setFullName("");
		setEmail("");
		setContent("");
		setImage("");
		setId("");
	}

	useEffect(() => {
		fetch("/reviews")
			.then((response) => response.json())
			.then((data) => setShow(() => data));
	}, []);

	console.log(show);

	function handleDelete(review) {
		const id = review.id;
		let newShow = show.filter((obj) => obj.id != review.id);
		fetch(`reviews/${id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((data) => setShow([...show, data]));
		setShow(newShow);
		alert("Review has been deleted, Please refresh the page");
	}
	useEffect(() => {
		fetch(`http://localhost:3000/reviews`)
			.then((resp) => resp.json())
			.then((data) => setUpdate(() => data));
	}, []);

	function handleChange(e) {
		e.preventDefault();

		const updatedRev = {
			full_name: updatedFullName,
			content: updatedContent,
		};

		const id = review.id;
		let newUpdate = show.map((obj) => {
			if (obj.id === id) {
				obj.full_name = updatedFullName;
				obj.content = updatedContent;
				return obj;
			} else {
				return obj;
			}
		});
		fetch(`/reviews/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedRev),
		})
			.then((resp) => resp.json())
			.then((data) => {
				setUpdatedFullName("");
				setUpdatedContent("");
				setShow(newUpdate);
			});
	}

	return (
		<>
			<AdminHeader />

			<div className='center'>
				<h1 className='centerp'>Reviews</h1>
			</div>
			<Container>
				<Segment style={{ marginTop: "3em", padding: "4em" }}>
					{show?.map((review) => (
						<>
							<ReviewCard
								content={review.content}
								full_name={review.full_name}
								email={review.email}
								rating={review.rating}
								image={review.image}
								id={review.id}
							/>
							<Button
								floated='right'
								size='mini'
								style={{ margin: ".25em" }}
								compact
								color='red'
								onClick={() => {
									handleDelete(review);
								}}
							>
								Delete
							</Button>

							<Modal
								onClose={() => setOpen(false)}
								onOpen={() => setOpen(true)}
								open={open}
								trigger={
									<Button
										floated='right'
										size='mini'
										style={{ margin: ".25em" }}
										compact
										color='blue'
									>
										Edit
									</Button>
								}
							>
								<Modal.Header>Edit Review</Modal.Header>
								<Modal.Content image>
									<Image
										size='medium'
										src='"https://via.placeholder.com/200x200.png"'
										wrapped
									/>
									<Modal.Description>
										<p>Current Review</p>

										{/* <Segment style={{ marginTop: "3em", padding: "4em" }}>
											{show?.map((review) => (
												<>
													<ReviewCard
														content={review.content}
														full_name={review.full_name}
														email={review.email}
														rating={review.rating}
														image={review.image}
													/>
												</>
											))}
										</Segment> */}
									</Modal.Description>
								</Modal.Content>
								<Modal.Actions>
									<Segment
										placeholder
										style={{ marginTop: "1em", marginBottom: "10em" }}
									>
										<Form style={{ marginTop: "1em" }}>
											<Form.Input
												fluid
												label='Full Name'
												placeholder='Full name'
												value={updatedFullName}
												type='text'
												required
												onChange={(event) => {
													setUpdatedFullName(event.target.value);
												}}
											/>
											<Form.TextArea
												label='Review'
												placeholder='Tell us more about your order...'
												type='text'
												required
												value={updatedContent}
												onChange={(event) => {
													setUpdatedContent(event.target.value);
												}}
											/>
											<Form.Input
												label='id'
												placeholder='Review Id'
												type='id'
												required
												value={updatedId}
												onChange={(event) => {
													setUpdatedId(event.target.value);
												}}
											/>
										</Form>
									</Segment>

									<Button onClick={(e) => handleChange(e, id)} positive>
										Update
									</Button>
									<Button onClick={() => setOpen(false)}>Close</Button>
								</Modal.Actions>
							</Modal>
						</>
					))}
				</Segment>

				<Header as='h3' style={{ fontSize: "1.5em" }}>
					Submit A Review
				</Header>

				<Segment placeholder style={{ marginTop: "1em", marginBottom: "10em" }}>
					<Header icon>
						<Icon name='image outline' />
						Upload Image
					</Header>
					<Button
						primary
						name='image'
						value={image}
						onChange={(e) => setImage(e.target.value)}
					>
						Add Image
					</Button>

					<Form style={{ marginTop: "1em" }}>
						<Form.Input
							fluid
							label='Full Name'
							placeholder='First name'
							value={fullname}
							type='text'
							required
							onChange={(event) => setFullName(event.target.value)}
						/>

						<Form.TextArea
							label='Review'
							placeholder='Tell us more about your order...'
							type='text'
							required
							value={content}
							onChange={(event) => setContent(event.target.value)}
						/>
						<Form.Input
							label='Rating'
							placeholder='1-5'
							type='rating'
							required
							value={rating}
							onChange={(event) => setRating(event.target.value)}
						/>

						<Form.Input
							label='Email'
							placeholder='E-mail '
							type='email'
							required
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>

						<Form.Button primary onClick={handleSubmit}>
							Submit Review
						</Form.Button>
					</Form>
				</Segment>
			</Container>
			<AdminFooter />
		</>
	);
}

export default Reviews;

// function Reviews() {
// 	const [review, setReview] = useState([]);
// 	// const [errors, setErrors] = useState("");
// 	const [image, setImage] = useState("");
// 	const [fullname, setFullName] = useState("");
// 	const [content, setContent] = useState("");
// 	const [rating, setRating] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [id, setId] = useState("");

// 	useEffect(() => {
// 		reviewGet();
// 	}, []);

// 	const reviewGet = () => {
// 		fetch("/reviews")
// 			.then((res) => res.json())
// 			.then((result) => {
// 				setReview(result);
// 			});
// 	};

// 	// const UpdateReview = (id) => {
// 	// 	window.location = "/update/" + id;
// 	// };

// 	// const ReviewDelete = (id) => {
// 	// 	var data = {
// 	// 		id: id,
// 	// 	};
// 	// 	fetch("/reviews/delete", {
// 	// 		method: "DELETE",
// 	// 		headers: {
// 	// 			Accept: "application/form-data",
// 	// 			"Content-Type": "application/json",
// 	// 		},
// 	// 		body: JSON.stringify(data),
// 	// 	})
// 	// 		.then((res) => res.json())
// 	// 		.then((result) => {
// 	// 			alert(result["message"]);
// 	// 			if (result["status"] === "ok") {
// 	// 				reviewGet();
// 	// 			}
// 	// 		});
// 	// };

// 	return (
// 		<>
// 			<MainHeader />

// 			<div className='center'>
// 				<h1 className='centerp'>Reviews</h1>
// 			</div>
// 			<Container>
// 				<Segment style={{ marginTop: "2em" }}>
// 					{/* ------------------------- Reviews --------------------*/}

// 					{review?.map((item) => (
// 						<ReviewCard
// 							content={item.content}
// 							full_name={item.full_name}
// 							// email={item.email}
// 							// rating={item.rating}
// 							image={item.image}
// 						/>
// 					))}

// 					{/* ------------------------- Review Form Start -------------------- */}
// 				</Segment>
// 				<Header as='h3' style={{ fontSize: "1.5em" }}>
// 					Submit A Review
// 				</Header>

// 				<Segment placeholder style={{ marginTop: "1em", marginBottom: "10em" }}>
// 					<Header icon>
// 						<Icon name='image outline' />
// 						Upload Image
// 					</Header>
// 					<Button
// 						primary
// 						name='image'
// 						value={image}
// 						onChange={(e) => setImage(e.target.value)}
// 					>
// 						Add Image
// 					</Button>

// 					<Form style={{ marginTop: "1em" }}>
// 						<Form.Input
// 							fluid
// 							label='Full Name'
// 							placeholder='First name'
// 							value={fullname}
// 							type='text'
// 							required
// 							onChange={(event) => setFullName(event.target.value)}
// 						/>

// 						<Form.TextArea
// 							label='Review'
// 							placeholder='Tell us more about your order...'
// 							type='text'
// 							required
// 							value={content}
// 							onChange={(event) => setContent(event.target.value)}
// 						/>
// 						<Form.Input
// 							label='Rating'
// 							placeholder='1-5'
// 							type='rating'
// 							required
// 							value={rating}
// 							onChange={(event) => setRating(event.target.value)}
// 						/>

// 						<Form.Input
// 							label='Email'
// 							placeholder='E-mail '
// 							type='email'
// 							required
// 							value={email}
// 							onChange={(event) => setEmail(event.target.value)}
// 						/>

// 						<Form.Button primary>Submit Review</Form.Button>
// 					</Form>
// 				</Segment>
// 			</Container>
// 			<MainFooter />
// 		</>
// 	);
// }

// export default Reviews
