// Prevent scrolling
document.body.addEventListener('touchstart', function(e){  
	// allow clicks on links within the moveable area
	if($(e.target).is('a, iframe')) {
		return true;
	}
	e.preventDefault();
});


document.body.addEventListener('touchmove', function(e){ 
	e.preventDefault();
});














var json = [{
				title: '<hr>A1 - Application',
				description: "<blockquote>Claim #<i>n</i> as originally drafted by the applicant.</blockquote> " ,
				source: 'claim_v1.png',
				activeParty: 'applicant',
				startDate: (new Date('June 15, 1999 10:29:00 am GMT+0')),
				endDate: null
				 
			},
			{   title: '<hr>R1 - FOAM',
				description: "<blockquote>Examiner rejections to Claim #<i>n</i></p><br><p><i>102(b) over Smith</i></blockquote>",
				source: 'claim_v1.png',
				activeParty: 'PTO',
				startDate: (new Date('September 14, 1999 00:00:00 am GMT+0')),
				endDate: null
			},
			{   title: '<hr>R2 - Amendment / Response',
				description: "<blockquote>Remarks by Applicant regarding amendment to Claim #<i>n</i></p><br><p><i>Smith doesn’t teach <br>colored X or widget</i></blockquote> ",
				source: 'claim_v2.png',
				activeParty: 'applicant',
				startDate: (new Date('December 15, 1999 00:00:00 am GMT+0')),
				endDate: null
			},
            {   title: '<hr>R3 - FINAL ',
				description: "<blockquote>Examiner rejections to Claim #<i>n</i></p> <p><i>103(a) over Smith in view of Jone’s <br>widget and color as mere choice</i></blockquote>",
				source: 'claim_v2.png',
				activeParty: 'PTO',
				startDate: (new Date('January 30, 2000 00:00:00 am GMT+0')),
				endDate: null
			},
            {     title: '<hr>R4 - Amendment / Response',
				description: "<blockquote>Remarks by Applicant regarding amendment to Claim #<i>n</i></p><p><i>Neither Smith nor Jones <br>teach 2 color X</i></blockquote>",
				source: 'claim_v3.png',
				activeParty: 'applicant',
				startDate: (new Date('May 05, 2000 00:00:00 am GMT+0')),
				endDate: null
			}, {     title: '<hr>R5 - Office Action',
				description: "<blockquote>Examiner rejections to Claim #<i>n</i></p><i>103(a) over Smith <br>Maintained: <br>mere addition of color obvious <br>in view of Jone’s widget</i></blockquote>",
				source: 'claim_v3.png',
				activeParty: 'PTO',
				startDate: (new Date('August 24, 2000 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: "<hr>R6 - Supplemental Application",
				description: "<blockquote>Remarks by Applicant regarding amendment to Claim #<i>n</i></p><p><i>3 color X is unprecedented</i></blockquote>",
				source: 'claim_v4.png',
				activeParty: 'applicant',
				startDate: (new Date('October 31, 2000 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: "<hr>R7 - Office Action",
				description: "<blockquote>Examiner rejections to Claim #<i>n</i></p><i>103(a) over Smith in view of Jone’s<br> widget maintained: 3 colors obvious <br>in view of state of art</i></blockquote>",
				source: 'claim_v4.png',
				activeParty: 'PTO',
				startDate: (new Date('January 2, 2001 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: "<hr>R8 - Amendment / Response",
				description: "<blockquote>Remarks by Applicant regarding amendment to Claim #<i>n</i></p><p><i>Art does not teach gadget</i></blockquote>",
				source: 'claimFINAL.png',
				activeParty: 'applicant',
				startDate: (new Date('February 3, 2001 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: '<hr>R9 - Notice of Allowance',
				description: "So what do we think?",
				source: 'claimFINAL.png',
				activeParty: 'PTO_allow',
				startDate: (new Date('May 5, 2001 00:00:00 am GMT+0')),
				endDate: null
			}];





$("#timeline").timeCube({
	data: json,
	granularity: "year",
	startDate: new Date('June 1, 1999 10:20:00 pm GMT+0'),
	endDate: new Date('June 1, 2001 02:20:00 am GMT+0'),
	nextButton: $("#next-link"),
	previousButton: $("#prev-link"),
	showDate: true
});
