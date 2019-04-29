/*
============================================
; Title:  thomason-header.js
; Author: Professor Krasso 
; Date:   13 December 2017
; Modified By: William T. Thomason
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' + 
	new Date().toLocaleDateString();

	return output; 
}
