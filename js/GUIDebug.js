import { GUI } from '../jsm/libs/dat.gui.module.js';

var GUIDebug=function(){

    var _skeletonHelper=null;
    var _character=null;

this.toggleSkeleton=function( visibility ) {
    _skeletonHelper.visible = visibility;
}
this.toggleCharacter = function( visibility ) {
    _character.visible = visibility;
}

this.init=function(skeletonHelper, character) {
    _skeletonHelper=skeletonHelper;
    _character=character;

	var gui = new GUI();

    let folder = gui.addFolder( "General Options" );
    var settings = {
                    'show skeleton': false,
                    'show character':true}
    folder.add(settings, "show skeleton" ).onChange( this.toggleSkeleton );
    folder.add(settings, "show character" ).onChange( this.toggleCharacter );


    const bones = skeletonHelper.bones;

    for ( let i = 0; i < bones.length; i ++ ) {

        const bone = bones[ i ];

        folder = gui.addFolder( "Bone " + bone.id + " " +bone.name);

        folder.add( bone.position, 'x', - 10 + bone.position.x, 10 + bone.position.x );
        folder.add( bone.position, 'y', - 10 + bone.position.y, 10 + bone.position.y );
        folder.add( bone.position, 'z', - 10 + bone.position.z, 10 + bone.position.z );

        folder.add( bone.rotation, 'x', - Math.PI * 0.9, Math.PI * 0.9 );
        folder.add( bone.rotation, 'y', - Math.PI * 0.9, Math.PI * 0.9 );
        folder.add( bone.rotation, 'z', - Math.PI * 0.9, Math.PI * 0.9 );

        // folder.add( bone.scale, 'x', 0, 2 );
        // folder.add( bone.scale, 'y', 0, 2 );
        // folder.add( bone.scale, 'z', 0, 2 );

        folder.__controllers[ 0 ].name( "position.x" );
        folder.__controllers[ 1 ].name( "position.y" );
        folder.__controllers[ 2 ].name( "position.z" );

        folder.__controllers[ 3 ].name( "rotation.x" );
        folder.__controllers[ 4 ].name( "rotation.y" );
        folder.__controllers[ 5 ].name( "rotation.z" );

        // folder.__controllers[ 6 ].name( "scale.x" );
        // folder.__controllers[ 7 ].name( "scale.y" );
        // folder.__controllers[ 8 ].name( "scale.z" );

    }
}

}

export {GUIDebug};