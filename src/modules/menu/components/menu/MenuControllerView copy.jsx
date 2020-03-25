import React from 'react';
import Popup from "reactjs-popup";
import microphone_icon from './microphone.png';
import price18_icon from '../../../../assets/18.png';

function Speech2text(callback) {
	// Pull in the required packages.
	var sdk = require("microsoft-cognitiveservices-speech-sdk");


	// Replace with your own subscription key, service region (e.g., "westus"), and
	// the name of the file you want to run through the speech recognizer.
	var subscriptionKey = "ad7d715ddae548c2999b9e21ca58e08d";
	var serviceRegion = "southeastasia"; // e.g., "westus"

	// Create the audio-config pointing to our stream and
	// the speech config specifying the language.
	var audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
	var speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);

	// Setting the recognition language to English.
	speechConfig.speechRecognitionLanguage = "zh-HK";

	// Create the speech recognizer.
	var recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

	// Start the recognizer and wait for a result.
	recognizer.recognizeOnceAsync(
		function (result) {
			console.log(result);
			//console.log(result.privText)
			recognizer.close();
			recognizer = undefined;
			callback(result.privText);
		},
		function (err) {
			console.trace("err - " + err);

			recognizer.close();
			recognizer = undefined;
			callback(err);
		});
	
}
const MenuControllerView = (props) => {

	return(
		<div className="coluna-1">
      <ul className="menu">
				{props.menu.map(item => {
					return (
						<li className="menu__lista" key={item.id}>
							<img className="menu__lista--img" src={item.imagem} alt={item.nome} />
							<div className="menu__lista-descricao">
								<h2 className="menu__lista-descricao--nome">{item.nome}</h2>
								<img src={item.pIcon} width="20%" height="20%" alt="microphone icon" />
							</div>
							<div className="menu__lista--btn" align="right">
								<Popup trigger={<button className="btn btn-lg btn-rp btn--red " onClick={() => {
								console.log("hihi")}}><b>落order</b></button>} modal position="center">
									{close => (
										<div className="modal">
											<a className="close" onClick={close}>
											&times;
											</a>
											<div className="header">落order</div>
											<div className="content" id="result">
											{" "}
											㩒下個麥克風制嚟落單啦
											<br />
											
											</div>
											<div className="actions">
												<button className="btn btn-md btn--grey" onClick={ async() =>{
												Speech2text(function(audio){
													console.log(audio);
													let resultField = document.getElementById("result");
													//cehck if audio contains the item name
													if(audio.includes(item.name)){
														resultField.innerHTML = "正確！答案係：" + item.name;
														props.addItem(item);
													}
													else{
														resultField.innerHTML = "答案不正確, 提示：" + item.hint;
													}
													
												});
												}}><img src={'./microphone.png'} width="10vh" height="10vh" alt="microphone icon"/></button>
											</div>
										</div>
										)}
								</Popup>
								{/**/}
							</div>
							
						</li>
					)
				})}
			</ul>
    </div>
	);

}

export default MenuControllerView;
