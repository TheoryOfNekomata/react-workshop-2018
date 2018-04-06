import React from 'react';
import BIRD_SRC from '../chapter-02/assets/bird.jpeg';
import LIZARD_SRC from '../chapter-02/assets/lizard.png';
import PEACH_SRC from '../chapter-02/assets/peach.png';
import RABBIT_SRC from '../chapter-02/assets/rabbit.png';

function HenloImage({ src, caption }) {
	return (
		<figure className="card">
			<img className="card-img-top" src={src} alt={caption}/>
			<figcaption className="card-body">
				<span className="card-title">{ caption }</span>
			</figcaption>
		</figure>
	);
}

const IMAGES = [
	{
		src: BIRD_SRC,
		caption: 'Bird',
	},
	{
		src: LIZARD_SRC,
		caption: 'Lizard',
	},
	{
		src: PEACH_SRC,
		caption: 'Peach',
	},
	{
		src: RABBIT_SRC,
		caption: 'Rabbit',
	}
];

const App = (
	<React.Fragment>
		<div className="my-5">
			<div className="container">
				<h1>Henlo</h1>
			</div>
		</div>
		<div className="my-5">
			<div className="container">
				<div className="row">
					{
						IMAGES.map(image => (
							<div className="col-6">
								<div className="my-2">
									<HenloImage src={image.src} caption={image.caption} />
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default App;
