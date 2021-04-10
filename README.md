# Sign Language Avatar
Use a 3d generated avatar for Sign Language learning and translation

To do translation from voice to sign language we need several steps:

1. Voice to text - transform voice to text
2. Translate the text to an abstract langugage used to represent the signs
3. Deliver the signs to the end user

To the the opposite process:

4. Register the sign language
5. Translate to text
6. Transform to voice

The actual solution is focused on steps 1 to 3.
Some guiding principles:

- use as less client technology as possible - as less expensive as possible
- transformation means no change of content
- translation means adaptation to the context of the message if possible
- solution should be international - not country dependent
- solution should be able to learn new symbols/words/sentences
- use as many built services as possible

## Implementation details

1. Voice to text

- Use the existing web technology to capture the microphone sound.
- Call a cognitive service to translate sound into text (AI into play)

2. Translate text to sign language

- AI/ML into play with dictionairies and context analysis.

3. Deliver the sign language

    Three options are possible:
    - Sequence of images
    - Video snippets in sequence
    - 3D Avatar

Images and Video have the disavantage of not enabling a seamless experience and also present challenges on new words.

After experimenting with the 3 options, the one with more fluid behavior was the 3D Avatar. With the advance in speed processing in the client we can produce very realistic avatars. It also has the advantage of enabling the change of the character to someone that mimics the cultural background, race and look of the audience. This can create empathy and help overcome disconfort.

To implement an Avatar the first challenge to overcome is the inexistence of a library of movements. As we need to have the possibility to create new words, the starting task for the project is the creation of "Learning Avatar".


## Project zero: Learning Avatar

The expected user experience is:
- Select a word or expression
- Identify keyframes in the movement
- Record/Teach each keyframe with the desired speed
- Play the full movement and tweak until we achieve the desired feeling and understanding

The movement is morphed between keyframes.

The teaching should be possible to do by anyone. This could lead to an extreme situation where a person could have a translator that would do movements that are better recognized by that person. Let's consider it as "pesonalization in steroids" and something that could be implemented if the user has control over the delivery message. Imagine reading a book where you select the translator.

### Implementation

There are many 3D characters available for use by many 3D designers. This enable us to pick free models or buy some nice and appealing models to use.

The important feature is that they need to be rigged and they must have all the customization possible: we should be able to move any bone and perform as many facial expressions as possible.

There is a mixed solution that consists of having video of a human face to overlap the face of the avatar providing a very human and natural view. This is a possibility to explore later. I'm building a fully 3D solution for now.

To enable coherence between characters movement, they need to have a common bone and muscles naming. Otherwise we will not be able to replace the characters by others.

The interface was built using:
- [threeJS](https://threejs.org/)
- Client: modern browser
- Models in FBX format

Interface screenshot:
![Screen1](./sample1.png)

You can test it live [here](https://lamsign.blob.core.windows.net/learn/SignRecorder.html)

#### Instalation

Clone the repo and launch a live-server or http-server and browse to SignRecorder.html

## Under development

Current backlog:

Project Zero - Learning Avatar
1. option to select pose speed
2. option to select different models
3. define playback speed
4. playback sentences

Project Voice to Text:
1. <s>Voice to text - transform voice to text</s> (done)
2. <s>Translate the text to an abstract langugage used to represent the signs</s> (done)
3. Deliver the signs to the end user 

Far fetched:
1. Replicate movements from webcam

### Notes
List of Requisites for a sustainable solution:

- 3D Characters need to have coherence in bones and muscles naming
- Client must be able to run a modern browser(HTML5, Chromium engine)