$(document).ready(function() {
	initComment();
});

function initComment() {
	var commentSection,
		commentBox,
		commentBoxClone,
		form,
		commentField,
		commentText,
		commentList;


	$('.footer-form .button-submit').on('click', function(){
		event.preventDefault();

		commentSection = $(this).closest('.reviews-section');
		form = $(this).closest('form');
		commentList = commentSection.find('.reviews-wrapper');
		commentField = form.find('.feedback-input');
		commentText = commentField.val();


		commentBoxClone = $(commentSection.find('.comment')[0]).clone();

		if(commentText) {
			commentBoxClone.find('.comment-content p').html(commentText);
			commentList.append(commentBoxClone);
		}


		commentField.val('');
	});	
}