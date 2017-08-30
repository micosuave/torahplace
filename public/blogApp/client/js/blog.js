
var matter_constructor = ['$firebaseObject', 'FIREBASE_URL',
		function ($firebaseObject, FIREBASE_URL) {
				return function (matterId, groupId) {


						var ref = new Firebase(FIREBASE_URL + 'matters/' + groupId + '/').child(matterId);
						return $firebaseObject(ref);
				};
		}
];
	var app = angular.module( "lexspacedemo", [
			"adf",
			"adf.structures.base",
			"auth0",
			"angular-storage",
			"angular-jwt",
			"adf.widget.clock",
			"adf.widget.github",
			"adf.widget.iframe",
			"adf.widget.linklist",
			"adf.widget.markdown",
			"adf.widget.news",
			"adf.widget.wysiwyg",
			"adf.widget.testwidget",
			"adf.widget.collectionwidget",
			"adf.widget.pagebuilder",
			"adf.widget.tweet",
			"adf.widget.version",
			"angular-filepicker",
			"adf.widget.treewidget",
			"adf.widget.getphd",
			"admin",
			"angular.filter",
			"angular-clipboard",
			"angular-loading-bar",
			"angularMoment",
			"angularResizable",
			"angular-md5",
			"angularUtils.directives.dirPagination",
			"as.sortable",
			"authentication",
			"box",
			"build",
			"ChartsApp",
			"checklist-model",
			"ClaimLab",
			"claimworkshop",
			"commonServices",
			"ct.ui.router.extras",
			"door3.css",
			"delve",
			"diff",
			"EnterprisePhD",
			"dragularModule",
			"firebase",
			"fireBase",
			"growlNotifications",
			//'icons',
			"input-highlight",
			"issuelab",
			"jsonFormatter",
			"lionpad",
			"lk-google-picker",
			"mentio",
			"ngAnimate",
			"ngAnnotateText",
			"ngCkeditor",
			"ngContextMenu",
			"ngDialog",
			"ngDraggable",
			"ngImgCrop",	
			"ngMessages",
			"ngResource",
			"ngSanitize",
			"ngScrollbar",
			"NGSelectLink",
			"ngSidepanel",
			"ng-showdown",
			"ng-sortable",
			"ngTouch",
			"offClick",
			"pageslide-directive",
			"pdf",
			"phd",
			"roarmap",
			"toastr",
			"ui.mention",
			"ui",
			"ui.bootstrap",
			"ui.calendar",
			"ui.router",
			"ui.select",
			"ui.select2",
			"ui.tree",
			"ui.utils",
			"xeditable",
			"lionlawlabs",
			"yaru22.hovercard",
			"xml"
	]);
	 
	app.config( function( $stateProvider, $urlRouterProvider ) {
		$stateProvider.state( "bloghome", 
					{ url: "", 
						views: { "blogcontent": { 
											templateUrl: "/llp_core/partial/projectshowcase/projectshowcase.html", controller: "BlogController as blog" } 
											} 
					} )
					.state( "blogpost", 
								{ parent: "bloghome", 
									url: "/:postId", 
									"views":{ 
										"blogcontent@":{ templateUrl:"/lexlab-starter/public/blogApp/client/partials/home.html",
										controller:"BlogPostController as post" }
										}
								} );
			} )

			.constant( "FIREBASE_URL", "https://lexlab.firebaseio.com/" )

			.run( [ "$rootScope", "$state", function( $rootScope, $state ) {
							$rootScope.$on( "$stateChangeError", 
										function( event, toState, toParams, fromState, fromParams, error ) {
												// We can catch the error thrown when the $requireAuth promise is rejected
												// and redirect the user back to the home page
												if ( error === "AUTH_REQUIRED" ) {
														$state.go( "bloghome" );
												} else {
														$state.go( "bloghome" );
												}
								} );
					}
					] )
			.config( function( $locationProvider ) {
								$locationProvider.html5Mode(false);
							} )
			.config( function( $sceDelegateProvider ) {
								$sceDelegateProvider.resourceUrlWhitelist( [
										'self',
										//Allow loading from assets domain. Note the difference between * and **
		'https://*.filepicker.io/**',
		'/**',
		'/**',
		'//lexspace.net:8000/**',
		'//lexspace.net:3000/**',
		'//lexspace.net:3030/**',
		'http://micoff.local:8000/**',
		'https://drive.google.com/**',
		'http://drive.google.com/**',
		'https://docs.google.com/**',
		'http://docs.google.com/**',
		'https://*.google.com/**',
		'http://*.google.com/**',
		'https://*.firebaseio.com/**',
		'https://*.firebaseapp.com/**',
		'http://d3js.org/**',
		'//*.mylionlaw.com/**',
		'https://patentimages.storage.googleapis.com/**',
		'http://storage.googleapis.com/**',
		'https://storage.googleapis.com/**',
		'https://*.mypatentphd.com/**',
		'http://*.mypatentphd.com/**',
		'//*.youtube.com/**',
		'//*.vimeo.com/**',
		'//*.uspto.gov/**',
		'//*.jsfiddle.net/**',
		'//*.github.com/**',
		'//*.codepen.com',
		'//*.npmjs.com/**',
		'//*.tonicdev.com',
		'//tonicdev.com/**',
		'//gist.githubusercontent.com/**',
		'https://raw.githubusercontent.com/**',
		'//*.local/**',
		'https://**.s3.amazonaws.com/**',
		'//*.mylionsden.com/**',
		'https://lexlab.firebaseapp.com/**',
		'https://lexlab.firebaseio.com/**',
		'//**.lexspace.net/**',
		'//milbank-patentphd.firebaseapp.com/**',
		'https://cloud.gonitro.com/**',
		'https://www.dropbox.com/**',
		'https://app.box.com/**',
		'https://dl.dropboxusercontent.com/**',
		'http://fliphtml5.com/**',
		'https://fliphtml5.com/**',
		'https://talky.io/**',
		'//casetext.com/**',
		'https://casetext-pdfs.s3.amazonaws.com/**'


	]);
}).run(function($rootScope) {

	$rootScope.safeApply = function(fn) {
		var phase = $rootScope.$$phase;
		if (phase === '$apply' || phase === '$digest') {
			if (fn && (typeof(fn) === 'function')) {
				fn();
			}
		} else {
			this.$apply(fn);
		}
	};

}).run(
	['$rootScope',
		'$state',
		'$stateParams',
		function($rootScope,
			$state,
			$stateParams) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		}
	]
).config(function($httpProvider) {
		//Enable cross domain calls
		$httpProvider.defaults.useXDomain = true;
}) .value('$ACTIVEROAR', {})

 
		.controller('BlogController', ['dataService', '$stateParams', '$compile','$templateCache', '$scope', '$sce', function (dataService, $stateParams, $compile, $templateCache, $scope, $sce) {
			var blog	= this;
			blog.posts = dataService.getAll().then(function(data){return blog.posts = data; } );
			blog.checked=false;
			blog.toggle = function(){return blog.checked = !blog.checked};
			$scope.posts = blog.posts;
			$scope.$sce = $sce;
			
			
			// var post = dataService.get(postId);
			
			// $scope.template = template;									 
		
	}]).controller('BlogPostController', ['dataService', '$stateParams', '$compile','$templateCache', '$scope', '$sce', function (dataService, $stateParams, $compile, $templateCache, $scope, $sce) {
			var postCtrl	= this;
			postCtrl.posts = dataService.getAll().then(function(data){return postCtrl.posts = data});
			// $scope.posts = post.posts;
			postCtrl.post = $scope.$parent.post;
			$scope.phd = $scope.post.body;
			$scope.config = {};
			$scope.config.id = $scope.post.body.$id;
			var template = $templateCache.get("{widgetsPath}/getphd/src/view.html");
			var render = $compile(template)($scope);
			
			$scope.$sce = $sce;
			
			postCtrl.body = $sce.trustAsHtml(render);
											 
		
	}]).service('dataService', function($http, $q, _csrfToken){
	return {
		getAll: function(){
		
		return $http.get('/data_api/posts')
			.then(function(resp){
				return resp.data;
			});
		},
		get: function(id){
		return $http.get('/data_api/posts/'+id)
					.then(function(resp){
							return resp.data;
					});
		}
	};
	}).directive('collection', ['Collection', function(Collection) {
					return {
							restrict: 'A',
							replace: false,
							// transclude: true,
							//template: '<ng-transclude></ng-transclude>',
							link: function($scope, $element, $attrs, fn) {
									var roarId = $attrs.collection;
									var collection = Collection(roarId);
									collection.$bindTo($scope, 'collection');
							}
					};
			}
			])
			.factory('Collection', ['$firebaseObject', 'FIREBASE_URL', function($firebaseObject, FIREBASE_URL) {
				return function(roarId) {

						var ref = new Firebase(FIREBASE_URL + 'content/').child(roarId);
						return $firebaseObject(ref);
				};
		}])
		.factory('Collections', ['$firebaseArray', 'FIREBASE_URL', function($firebaseArray, FIREBASE_URL) {
				return function() {
						var ref = new Firebase(FIREBASE_URL + 'content/');
						return $firebaseArray(ref);
				};
		}])
		.factory('ROARevent', ['$firebaseObject', 'FIREBASE_URL', function($firebaseObject, FIREBASE_URL) {
				return function(eventId) {

						var eventId = eventId;
						var ref = new Firebase(FIREBASE_URL + 'content/').child(eventId);
						return $firebaseObject(ref);
				};
		}]).factory('PHD', ['$firebaseObject', 'FIREBASE_URL', function($firebaseObject, FIREBASE_URL) {
				return function(appnum) {
						var ref = new Firebase(FIREBASE_URL + 'phd/').child(appnum);
						return $firebaseObject(ref);
				};
		}])
			.factory('Matter', matter_constructor).factory('ROARevents', ['$firebaseArray', 'FIREBASE_URL', function($firebaseArray, FIREBASE_URL) {
				return function() {

						var ref = new Firebase(FIREBASE_URL + 'content/');
						return $firebaseArray(ref);
				};
		}])
.value('APPDOCCODES', ['136A','371P','3P.PUB.EVDNC','3P.RELEVANCE','3P.TRANS.FOR','3P.TRANS.NPL','A...','A.I.','A.LA','A.NA','A.NE','A.NQ','A.PE','A.QU','ABST','ABST.NE','ACPA','ADS','AF/D','AMSB','AP.B','AP.PRE.REQ','AP/A','AP/W','APAF','APCH','APOH','APP.TXT.CHEM','APP.TXT.MATH','APP.TXT.PDB','APPENDIX','APPH','APRB','APWH','ARTIFACT','BD.A','BDRR','C.AD','C105','C680','C694','CAFC.AP.BR','CAFC.AP.NTC','CAFC.CAP.BR','CAFC.CAP.NTC','CAFC.DEC.AFF','CAFC.DEC.AIP','CAFC.DEC.DIS','CAFC.DEC.REV','CAFC.DEC.RMD','CAFC.EXT.TM','CAFC.MN.PET','CAFC.MN.PETD','CAFC.MN.PETG','CAFC.MN.PETW','CAFC.MN.PTDS','CAFC.MN.RSP','CAFC.RH.AFF','CAFC.RH.PBR','CAFC.RH.PET','CAFC.RH.PETD','CAFC.RH.PETG','CAFC.RH.RBR','CAFC.RH.REV','CAFC.RH.RSP','CAFC.RPLY.BR','CFILE','CLM','CLM.NE','COCIN','COCX','COMPUTER','CRF.TRNS.REQ','CRFL','CRFS','DC.COMPLAINT','DC.CV.AFF','DC.CV.AIP','DC.CV.COM','DC.CV.DIS','DC.CV.REM','DC.CV.REV','DC.CV.TRN','DC.DEC.AFF','DC.DEC.AIP','DC.DEC.DIS','DC.DEC.REV','DC.DEC.RMD','DC.MPI','DC.MSJ.D','DC.MSJ.G','DC.MSJ.PL','DC.MSJ.PLD','DC.MSJ.PLG','DC.MTI','DCPA','DEPOSIT','DERIV.PET','DIST','DIST.E.FILE','DRW','DRW.NE','DRW.NONBW','E.RECORD.COR','EABN','EARLYPUB','ELC.','FAI.A..','FAI.REQ','FAI.REQ.INTV','FAI.REQ.WD','FRTRANS','FRPR','IACN','IACS','IDS','IFEE','IRFND','L_RIN','LET.','M852','M856','M865','N/AP','N427','NDRW','NOCODE','NPL','NTC.CONCPROC','O501','P.134','P.13TER.STMT','P.202.IN','P.210.IN','P.217.IN','P.224.IN','P.225.IN','P.234.IN','P.237.IN','P.306','P.307','P.313','P.315','P.316','P.317','P.318','P.319','P.320','P.321','P.323','P.336','P.337','P.339','P.344','P.345','P.350','P.353','P.368','P.369','P.370','P.371','P.374','P.399','P.409.IN','P.92BIS','P.APP.INCORP','P.ART19.CLM','P.ART19.STMT','P.CONF.DES','P.CORP.RES','P.EXP.MAIL','P.FEE.PYMT','P.FORISA.LET','P.FOSC.FEE','P.IB.LET','P.INFO.PC','P.LATEPUB.PC','P.LET','P.N.101.ANX','P.N.101.CONV','P.N.101.FOSC','P.N.101.SAFE','P.N.NO101','P.PAMPHLET','P.R20.6.CONF','P.REQ.RECON','P.REQ.RECT','P.RESP.206','P.RESP.225','P.RESTORE.PC','P.RULE26BIS','P.SAFE.LOG','P.SELECT.ISA','P.SIG.STMT','P.SUB.SH.101','P.SUB.SH.DRW','P.SUB.SHEET','P.TR','P.TRAN.CERT','P.TRAN.COPY','P.URGENT','P.WD.APPL','P.WD.ATTY','P.WD.DES','P.WD.PRIORIT','P.WD.US.DES','P2.401','P2.401.ANX','P2.92BIS','P2.ART34.A','P2.ART34.CLM','P2.FEE.PYMT','P2.IB.LET','P2.LET','P2.REQ.RECON','P2.REQ.RECT','P2.RESP.404','P2.RESP.405','P2.RESP.408','P2.WD.ATTY','P2.WD.DES','P2.WD.PRRITY','PA..','PA.LIST','PC/I','PD.REQ.RETR','PD.TO.AUTH','PEER.CONSENT','PEER.IDS','PEER.SB423','PEFR','PEFRREISS','PEFRSEQ','PET.','PET.41.3','PET.AUTO','PET.GREEN','PET.LAWSCHOL','PET.OP','PET.OP.AGE','PET.OP.SPAC','PET.OPLA','PET.P2.PCT','PET.PCT','PET.POA.WDRW','PET.PTA','PET.PTA.RCAL','PET.RELIEF','PET.ROUTE','PET.SPRE','PET.SPRE.ACX','PET.STATUS','PETWDISS','PG.NONPUB.RQ','PGA9','PGEA','PGPDRAWINGS','PGREF','PPH.PCT.652','PPH.PET.652','PREX.SRCH','PREX.SUP.DOC','PRIA','PRIB','PROTRANS','PROTEST','QPIDS.REQ','R129','R251.RES','R3.73B','R48.REQ','RCE.NE','RCEX','RCONVP','REF.OTHER','REIS.CONSENT','REIS.DECL','REIS.SUPDECL','REM','REQ.MIS.PART','RESC','RETMAIL','RFN.REQ','ROCKET','RXAAF.','RXAF/DR','RXAP/W','RXAPBI','RXAPRR','RXC.ADR','RXC/M.','RXC/SR','RXCAFC','RXCTAP','RXFEE','RXIDS.R','RXLET.','RXNOCA','RXNOCP','RXOPPPET','RXOR.T','RXOR.U','RXOSUB','RXOSUB.C','RXOSUB.R','RXPA..R','RXPATENT','RXPET.','RXRPET','RXRQ/T','RXRQ4FP','RXRQMP','RXRQS.','RXRR.T','RXRR.U','RXTRLTR','SA..','SAFR','SAPB','SC.AMICUS.BR','SC.CERT.PET','SC.CERT.PETD','SC.CERT.PETG','SC.CERT.RSP','SC.DEC','SC.MERTIT.BR','SE.COURT.DOC','SE.DECL.AFF','SE.ITEM.LIST','SE.ITEM.MISC','SE.ITEM.PAT','SE.OFF.PROC','SE.PATENT','SE.PET','SE.REQ.COR','SE.REQ.ORIG','SE.REQ.ORIG','SE.SALE.RCPT','SE.TRANS','SE.TRNSCRPT','SEQ.TXT','SEQLIST','SIR.','SOL.NTC.SUIT','SPEC','SPEC.NE','SPECNO','SREXR141','STAT.DISCLMR','STATUS.LET','T501','T844','TABLE','TERM.AGC.180','TERM.AGC.LET','TERM.AGC.RRP','TERM.ELC.RES','TERM.INF.RES','TERM.ITM.G','TERM.PTO.C','TERM.PTO.DIS','TERM.PTO.ELC','TERM.PTO.IE','TERM.PTO.NFD','TERM.RCN.REQ','TERM.REQ','TERM.REQ.ITM','TERM.WAIVE','TERM.WD','TR.PROV','TR.RESP.ACX','TRACK1.REQ','TRAN.LET','TRIAL.PET.RQ','TRIWAY.IN','TRNA','TRREISS','VOL.TABLE','XI.A…','XI.ACPOC','XI.ACPRC','XI.AP.BO','XI.AP.BR','XI.AP/W','XI.APCTO','XI.APCTR','XI.APDOC','XI.APDRC','XI.APOHO','XI.APOHR','XI.N/APD','XI.N/APR','XI.NCAPO','XI.NCAPR','XI.OSUB','XI.OSUB.C','XI.RBBO','XI.RBBR','XI.RNFRC','XI.RPET','XI.RQRHO','XI.RQRHR','XI.RRHOC','XI.RRHRC','XI.RSBO','XI.RSBR','XI.XDTOC','XI.XDTOR','XI.XDTRC','XI.XDTRR','XI.XRRAN','XT'])

.value('PTODOCCODES', ['892','1449','371.CNV.UTIL','371.FEE.M912','371.FEE.M923','371.NT.C.APN','371.RES.DEF','371.RQ.M922','ABN','ABN.EXPRESS','AISP','ANE.I','AP_DK_M','AP.PRE.DEC','AP.PRE.DEF','APAR','APBD','APD1','APD2','APD3','APDA','APDN','APDP','APDR','APDS','APDT','APE2','APEA','APLR','APLW','APND','APNH','APNR','APP.FILE.REC','APPD','APPG','APPR','APRD','ASIR','BIB','C105-I','C105D','CAFC.SOL.BR','CDEN','COCOUT','CPA-AMD','CRF.TRNS.IMP','CRFD','CRFE','CRFR','CTAV','CTEQ','CTFR','CTMS','CTNF','CTRS','DC.CV.ANS','DC.MSJ','DC.SOL.ANS','DED.','DERIV.D','DERIV.DIS','DERIV.FWD','DERIV.G','DISQ','DISQ.E.FILE','DR..','DRQS','DRRI','DSIR','EBCC.AD','EX.A','EXPD.L.DEC.D','EXPD.L.DEC.G','FAI.RQ.NNCPL','FOR','FREF','FWCLM','ICPA','IIFW','IMIS','INT.DEC.ADV','INT.DEC.FAV','INT.DECL','INT.MISC','INT.REDECL','ISSUE.WD.NTC','L_ROUT','L.SP','LR501','LRO501','LRT501','M327','M903','M905','MCPA','MISCOIPE','N271','N416','N417','N459','N570','N572','N578','NAPI','NFDR','NFEE','NRES','NT.AE.A.NONC','NT.CR.APP.PA','NT.INC.REPLY','NT.INCPL.APP','NT.WD.NONCPL','NTC.A.NONCPL','NTC.MISS.PRT','NTC.OMIT.APP','NTC.PUB','NTC.PUB.DATE','NTC.RCE.DEF','NTRM','NUNT','OA.APPENDIX','OA.EMAIL','OA.FAI.OPT.O','OA.POSTCARD','OATH','P.102','P.102B','P.103','P.104','P.105','P.106','P.107','P.108','P.109','P.110','P.111','P.112','P.113','P.114','P.115','P.117','P.118','P.119','P.120','P.123','P.124','P.126','P.127','P.132','P.133','P.135','P.136','P.138','P.143','P.145','P.146','P.147','P.151','P.152','P.153','P.154','P.155','P.156','P.158','P.159','P.202.OUT','P.203','P.205','P.206','P.209','P.210.OUT','P.212','P.216','P.217.OUT','P.220','P.224.OUT','P.225.OUT','P.234.OUT','P.237.OUT','P.299','P.372','P2.402','P2.403','P2.403B','P2.404','P2.405','P2.407','P2.408','P2.409','P2.411','P2.412','P2.416','P2.420','P2.424','P2.424N','P2.425','P2.428','P2.430','P2.431','P2.436','P2.440','P2.441','P2.499','P2.FILECOPY','P2.MISC','PATENT.GRANT','PD.AUTH.NTC','PD.FILED.E','PD.PRE.NTC','PD.RETR.FAIL','PEER.CNS.RSP','PEER.IDS.ACK','PEFN','PET.DEC.RTE','PGA9.DEC','PPH.DECISION','Q.DEC.REOP','R251.NTC','RBNE','REIS.REVFORM','RFND','RXADV.','RXAPDFA','RXAPDRN','RXAPHC','RXBDAF','RXBDAP','RXBDRR','RXBDRV','RXCERT','RXDCDS','RXDCLS','RXDCMP','RXDOR','RXDSMP','RXEPQ.','RXEXTD','RXEXTG','RXFILJKT','RXFR..','RXINCR','RXL/RD','RXLITSR','RXMISC','RXMRRD','RXMRRI','RXMRRT','RXMRRX','RXMRXD','RXNDEFCT','RXNFDACC','RXNINA','RXNIRC','RXNREQ.U','RXNREQAU','RXNREQFD','RXNRES','RXNRQREC','RXOGNOTC','RXR.NF','RXREXD','RXREXO','RXTD.NE','RXTD.OK','RXTERM','RXTTLRPT','RXVACATE','RXWDNIRC','SADV','SE.ABEYANCE','SE.CRT.SNQ.N','SE.CRT.SNQ.Y','SE.DEC.MISC','SE.EXPUNGE','SE.FD.VACATE','SE.FILE.DATE','SE.POA.D','SE.REASN.SNQ','SE.REQ.NCOMP','SE.TERMINATE','SEPQ','SEQ.REQ.DISC','SFR.','SOL.DC.NFD','SOL.NTC.ARB','SR..','SRES','SRFW','SRNT','TERM.PTO.LT1','TERM.PTO.LT2','TERM.RQR.INF','TRACK1.DENY','TRACK1.GRANT','TRDD','TRIAL.CERT','TRIAL.REQ.D','TRIAL.REQ.G','TRIAL.REQ.GP','TRIAL.RQ.DIS','TRIAL.TRMFWD','TRIWAY.OUT','VACATE.PROC','W/AC','WCLM','WFEE','WSIR','XI.ACP','XI.AP.DA','XI.AP.DP','XI.AP.DR','XI.APDFA','XI.APDN','XI.APDRN','XI.APXDT','XI.NREQI','XI.RAN.'])

.value('INTVDOCCODES', ['EXIN','INTRVIEW.APP','INTV.SUM.APP','INTV.SUM.EX','OA.FAI','OA.FAI.PRELM'])

.value('NOADOCCODES', ['ISSUE.NTF','NOA'])

.value('PETDOCCODES', ['CAFC.EXT.TMD','CAFC.EXT.TMG','CAFC.EXT.TMW','PET.DEC.AUTO','PET.DEC.COCI','PET.DEC.OIPE','PET.DEC.PUBS','PET.DEC.RTE','PET.DEC.TC','PETDEC','PGEA.D','PGEA.G','RXPETD','RXPETG','RXPTDE','RXPTDI','RXPTGP','RXPTGR','SE.PET.D','SE.PET.DIS','SE.PET.G','SE.PET.GIP'])
.value('OWNERSHIPDOCS', ['R3.73B','REIS.CONSENT','REIS.DECL','REIS.SUPDECL','OATH'])
.value('ARTDOCS', ['1449','FOR','P.210.OUT','P.220','P.237.OUT','P2.409','PD.FILED.E','3P.RELEVANCE','IDS','NPL','P.202.IN','P.210.IN','P.237.IN','P.374','P.409.IN','P.FORISA.LET','QPIDS.REQ','RXIDS.R'])
.value('MERITSDOCS', ['EXIN','INTRVIEW.APP','INTV.SUM.APP','INTV.SUM.EX','OA.FAI','OA.FAI.PRELM','ISSUE.NTF','NOA','892','ABN','ANE.I','AP.PRE.DEC','AP.PRE.DEF','APAR','APBD','APD1','APD2','APD3','APDA','APDN','APDP','APDR','APDS','APDT','APE2','APEA','APLR','APLW','APND','APNH','APNR','APPD','APPG','APPR','APRD','CAFC.SOL.BR','CDEN','COCOUT','CPA-AMD','CTAV','CTEQ','CTFR','CTMS','CTNF','CTRS','DC.CV.ANS','DC.MSJ','DC.SOL.ANS','DISQ','DISQ.E.FILE','DR..','EX.A','FWCLM','INT.DEC.ADV','INT.DEC.FAV','INT.DECL','INT.MISC','INT.REDECL','ISSUE.WD.NTC','N271','N416','NAPI','NRES','NT.AE.A.NONC','NT.CR.APP.PA','NT.INC.REPLY','NT.INCPL.APP','NT.WD.NONCPL','NTC.A.NONCPL','OA.APPENDIX','OA.FAI.OPT.O','PPH.DECISION','Q.DEC.REOP','RXADV.','RXAPDFA','RXAPDRN','RXAPHC','RXBDAF','RXBDAP','RXBDRR','RXBDRV','RXCERT','RXDCDS','RXDCLS','RXDCMP','RXDOR','RXDSMP','RXEPQ.','RXEXTD','RXEXTG','RXFILJKT','RXFR..','RXINCR','RXL/RD','RXLITSR','RXMISC','RXMRRD','RXMRRI','RXMRRT','RXMRRX','RXMRXD','RXNDEFCT','RXNFDACC','RXNINA','RXNIRC','RXNREQ.U','RXNREQAU','RXNREQFD','RXNRES','RXNRQREC','RXOGNOTC','RXR.NF','RXREXD','RXREXO','RXTD.NE','RXTD.OK','RXTERM','RXVACATE','RXWDNIRC','SADV','SE.ABEYANCE','SE.CRT.SNQ.N','SE.CRT.SNQ.Y','SE.DEC.MISC','SE.EXPUNGE','SE.FD.VACATE','SE.FILE.DATE','SE.POA.D','SE.REASN.SNQ','SE.REQ.NCOMP','SE.TERMINATE','SEPQ','SFR.','SOL.DC.NFD','SOL.NTC.ARB','SR..','SRES','TRIAL.REQ.D','TRIAL.REQ.G','TRIAL.REQ.GP','TRIAL.RQ.DIS','TRIAL.TRMFWD','VACATE.PROC','W/AC','XI.ACP','XI.AP.DA','XI.AP.DP','XI.AP.DR','XI.APDFA','XI.APDN','XI.APDRN','XI.APXDT','XI.NREQI','A.I.','A.LA','A.NA','A.NE','A.NQ','A.PE','A.QU','ABST','ABST.NE','ACPA','AF/D','AMSB','AP.B','AP.PRE.REQ','AP/W','APAF','APCH','APOH','APPENDIX','APPH','APRB','APWH','BD.A','BDRR','C105','C680','C694','CAFC.AP.BR','CAFC.AP.NTC','CAFC.CAP.BR','CAFC.CAP.NTC','CAFC.DEC.AFF','CAFC.DEC.AIP','CAFC.DEC.DIS','CAFC.DEC.REV','CAFC.DEC.RMD','CAFC.EXT.TM','CAFC.MN.PET','CAFC.MN.PETD','CAFC.MN.PETG','CAFC.MN.PETW','CAFC.MN.PTDS','CAFC.MN.RSP','CAFC.RH.AFF','CAFC.RH.PBR','CAFC.RH.PET','CAFC.RH.PETD','CAFC.RH.PETG','CAFC.RH.RBR','CAFC.RH.REV','CAFC.RH.RSP','CAFC.RPLY.BR','CLM','CLM.NE','COCIN','COCX','DC.COMPLAINT','DC.CV.AFF','DC.CV.AIP','DC.CV.COM','DC.CV.DIS','DC.CV.REM','DC.CV.REV','DC.CV.TRN','DC.DEC.AFF','DC.DEC.AIP','DC.DEC.DIS','DC.DEC.REV','DC.DEC.RMD','DC.MPI','DC.MSJ.D','DC.MSJ.G','DC.MSJ.PL','DC.MSJ.PLD','DC.MSJ.PLG','DC.MTI','DCPA','DEPOSIT','DERIV.PET','DIST','DIST.E.FILE','EABN','ELC.','FAI.A..','FAI.REQ','FAI.REQ.INTV','FAI.REQ.WD','FRTRANS','FRPR','IACN','IACS','INTRVIEW.APP','LET.','M856','M865','N/AP','N427','NTC.CONCPROC','O501','P.134','P.316','P.317','P.318','P.321','P.323','P.336','P.337','P.339','P.344','P.353','P.APP.INCORP','P.ART19.CLM','P.ART19.STMT','P.R20.6.CONF','P.REQ.RECON','P.REQ.RECT','P.RESP.206','P.RESP.225','P.RESTORE.PC','P.RULE26BIS','P.TR','P.TRAN.CERT','P.TRAN.COPY','P.URGENT','P2.ART34.CLM','P2.REQ.RECON','P2.REQ.RECT','P2.RESP.404','P2.RESP.405','P2.RESP.408','P2.WD.ATTY','P2.WD.DES','P2.WD.PRRITY','PD.REQ.RETR','PD.TO.AUTH','PEER.CONSENT','PEER.IDS','PEER.SB423','PET.POA.WDRW','PET.PTA','PET.PTA.RCAL','PET.SPRE','PET.SPRE.ACX','PPH.PCT.652','PPH.PET.652','PREX.SRCH','PRIA','PRIB','PROTRANS','PROTEST','R129','R251.RES','R48.REQ','RCE.NE','RCEX','RCONVP','REM','RXAAF.','RXAF/DR','RXAP/W','RXAPBI','RXAPRR','RXC/M.','RXC/SR','RXCAFC','RXCTAP','RXLET.','RXNOCA','RXNOCP','RXOPPPET','RXOR.T','RXOR.U','RXOSUB','RXOSUB.C','RXOSUB.R','RXPA..R','RXPATENT','RXPET.','RXRPET','RXRQ4FP','RXRQMP','RXRQS.','RXRR.T','RXRR.U','RXTRLTR','SA..','SAFR','SAPB','SC.AMICUS.BR','SC.CERT.PET','SC.CERT.PETD','SC.CERT.PETG','SC.CERT.RSP','SC.DEC','SC.MERTIT.BR','SE.COURT.DOC','SE.DECL.AFF','SE.ITEM.LIST','SE.ITEM.MISC','SE.ITEM.PAT','SE.OFF.PROC','SE.PATENT','SE.PET','SE.TRNSCRPT','SPEC','SPEC.NE','SREXR141','STAT.DISCLMR','STATUS.LET','T501','T844','TABLE','TERM.AGC.180','TERM.AGC.LET','TERM.AGC.RRP','TERM.ELC.RES','TERM.ITM.G','TERM.PTO.C','TERM.PTO.DIS','TERM.PTO.ELC','TERM.PTO.IE','TERM.PTO.NFD','TERM.RCN.REQ','TERM.REQ','TERM.REQ.ITM','TERM.WAIVE','TERM.WD','TR.RESP.ACX','TRACK1.REQ','TRIAL.PET.RQ','TRNA','TRREISS','XI.ACPOC','XI.ACPRC','XI.AP.BO','XI.AP.BR','XI.AP/W','XI.APCTO','XI.APCTR','XI.APDOC','XI.APDRC','XI.APOHO','XI.APOHR','XI.N/APD','XI.N/APR','XI.NCAPO','XI.NCAPR','XI.RBBO','XI.RBBR','XI.RNFRC','XI.RPET','XI.RQRHO','XI.RQRHR','XI.RRHOC','XI.RRHRC','XI.RSBO','XI.RSBR','XI.XDTOC','XI.XDTOR','XI.XDTRC','XI.XDTRR','XI.XRRAN'])


.value('DOCNAMES', [{"892":"List of references cited by examiner"},{
"1449":"List of References cited by applicant and considered by examiner"},{
"136A":"Authorization for Extension of Time all replies"},{
"371.CNV.UTIL":"Notice of 371 Conversion to Regular"},{
"371.FEE.M912					 ":"371 Missing Basic Fees/Copy of IA - Form M912"},{
"371.FEE.M923":"371 Supplemental Fees Missing - Form M923"},{
"371.NT.C.APN":"Notice of 371 Canceled Application Number"},{
"371.RES.DEF":"371 Defective Response - Form M916"},{
"371.RQ.M922	":"371 Requirements for Sequence Disclosure Notice Form M922"},{
"371P":"Documents submitted with 371 Applications"},{
"3P.PUB.EVDNC":"Evidence of Publication"},{
"3P.RELEVANCE":"Concise Description of Relevance"},{
"3P.TRANS.FOR":"Translation Foreign"},{
"3P.TRANS.NPL":"Translation NPL"},{
"A...":"Amendment/Req Reconsideration-After Non-Final Reject"},{
"A.I.":"Informal or Non-Responsive Amendment"},{
"A.LA":"Untimely (Late) Amendment Filed"},{
"A.NA":"Amendment after Notice of Allowance (Rule 312)"},{
"A.NE":"Amendment After Final"},{
"A.NQ":"Amendment Crossed in Mail"},{
"A.PE":"Preliminary Amendment"},{
"A.QU":"Response after Ex Parte Quayle Action"},{
"ABN":"Abandonment"},{
"ABN.EXPRESS":"Internal document noting that an Express Abandonment request has been processed"},{
"ABST":"Abstract"},{
"ABST.NE":"Abstract-Amendment Not Entered"},{
"ACPA":"Continued Prosecution Application - Continuation (ACPA)"},{
"ADS":"Application Data Sheet"},{
"AF/D":"Rule 130, 131 or 132 Affidavits"},{
"AISP":"Letter of Suspension - Applicant Initiated"},{
"AMSB":"Amendment Submitted/Entered with Filing of CPA/RCE"},{
"ANE.I":"Amendment After Final or under 37CFR 1.312, initialed by the examiner"},{
"AP.B":"Appeal Brief Filed"},{
"AP.PRE.DEC":"Pre-Brief Appeal Conference decision"},{
"AP.PRE.DEF":"Notice – Defective Pre-Brief Appeal"},{
"AP.PRE.REQ":"Pre-Brief Conference request"},{
"AP/A":"AP/A"},{
"AP/W":"Request to Withdraw Appeal by Appellant"},{
"AP_DK_M":"Appeal Docketing Notice"},{
"APAF":"Affidavit/Dec/Exhibit after Notice of Appeal"},{
"APAR":"Administrative Remand to Examiner"},{
"APBD":"Notice - Defective Appeal Brief"},{
"APCH":"Confirmation of Hearing by Appellant"},{
"APD1":"Dec on Reconsideration - Denied"},{
"APD2":"Dec on Reconsideration - Granted"},{
"APD3":"Dec on Reconsideration - Granted in Part"},{
"APDA":"Patent Board Decision - Examiner Affirmed"},{
"APDN":"Patent Board Decision 196(b)"},{
"APDP":"Patent Board Decision - Examiner Affirmed in Part"},{
"APDR":"Patent Board Decision - Examiner Reversed"},{
"APDS":"Dismissal of Appeal"},{
"APDT":"Patent Board Decision - Requirement under 196(D)"},{
"APE2":"2nd or Subsequent Examiner's Answer to Appeal Brief"},{
"APEA":"Examiner's Answer to Appeal Brief"},{
"APLR":"Notification of Appeal Reinstatement"},{
"APLW":"Patent Board Appeal Dismissed / Withdrawn"},{
"APND":"Notice - Defective Notice of Appeal"},{
"APNH":"Notification of Appeal Hearing"},{
"APNR":"Notice of Non-Entry of Reply Brief"},{
"APOH":"Request for Oral Hearing"},{
"APP.FILE.REC":"Filing Receipt"},{
"APP.TXT.CHEM":"Chemical Formulae (Text File)"},{
"APP.TXT.MATH":"Mathematical Formulae (Text File)"},{
"APP.TXT.PDB":"3D Protein Crystals (Text File)"},{
"APPD":"Hearing Postponement Denied"},{
"APPENDIX":"Appendix to the Specification"},{
"APPG":"Appeal Hearing Postponement Granted"},{
"APPH":"Appeal Postponement of Oral Hearing Request"},{
"APPR":"Panel Remand to the Examiner by Patent Board"},{
"APRB":"Reply Brief Filed"},{
"APRD":"Order Returning Undocketed Appeal to the examiner from Patent Board"},{
"APWH":"Waiver of Hearing by Appellant"},{
"ARTIFACT":"Artifact sheet indicating an item has been filed which cannot be scanned"},{
"ASIR":"Form PTO451 - Approval of SIR Request"},{
"BD.A":"Amendment/Argument after Patent Board Decision"},{
"BDRR":"Request for Rehearing of Patent Board Decision"},{
"BIB":"Bibliographic Data Sheet"},{
"C.AD":"Change of Address"},{
"C105":"Response to Rule 105 Communication"},{
"C105D":"Requirement under Rule 105 - Included with Office Action"},{
"C105-I":"Requirement under Rule 105 - Independent Communication"},{
"C680":"Request for Corrected Notice of Allowance"},{
"C694":"Request for New or Replacement Patent Grant"},{
"CAFC.AP.BR":"Appellant’s Brief	to CAFC"},{
"CAFC.AP.NTC":"Appeal to CAFC"},{
"CAFC.CAP.BR":"Co-Appelee brief to CAFC"},{
"CAFC.CAP.NTC":"Notice of Cross-Appeal to CAFC"},{
"CAFC.DEC.AFF":"Decision by CAFC – Affirmed"},{
"CAFC.DEC.AIP":"Decision by CAFC – Affirmed in Part"},{
"CAFC.DEC.DIS":"Decision by CAFC – Dismissed by Court"},{
"CAFC.DEC.REV":"Decision by CAFC – Reversed"},{
"CAFC.DEC.RMD":"Decision by CAFC – Remanded"},{
"CAFC.EXT.TM":"Petition for Extension of Time to Appeal to CAFC"},{
"CAFC.EXT.TMD":"Petition for Extension of Time to Appeal to CAFC Denied"},{
"CAFC.EXT.TMG":"Petition for Extension of Time to Appeal to CAFC Granted"},{
"CAFC.EXT.TMW":"Petition for Extension of Time to Appeal to CAFC Withdrawn"},{
"CAFC.MN.PET":"Petition for Writ of Mandamus to CAFC"},{
"CAFC.MN.PETD":"Petition for Writ of Mandamus – Denied by CAFC"},{
"CAFC.MN.PETG":"Petition for Writ of Mandamus – Granted by CAFC"},{
"CAFC.MN.PETW":"Petition for Writ of Mandamus to CAFC – Withdrawn"},{
"CAFC.MN.PTDS":"Petition for Writ of Mandamus – Dismissed by CAFC"},{
"CAFC.MN.RSP":"Response to Writ of Mandamus"},{
"CAFC.RH.AFF":"CAFC Decision Affirmed on Rehearing"},{
"CAFC.RH.PBR":"Petitioner's Brief on Rehearing to CAFC"},{
"CAFC.RH.PET":"Petition for Rehearing to CAFC"},{
"CAFC.RH.PETD":"Petition for Rehearing to CAFC - Denied"},{
"CAFC.RH.PETG":"Petition for Rehearing to CAFC - Granted"},{
"CAFC.RH.RBR":"Response to Petitioner's Brief on Rehearing to CAFC"},{
"CAFC.RH.REV":"CAFC Decision Reversed on Rehearing"},{
"CAFC.RH.RSP":"Response to Petition for Rehearing TO CAFC"},{
"CAFC.RPLY.BR":"Appellant’s Reply Brief to CAFC"},{
"CAFC.SOL.BR":"PTO's Response to Appellant’s Brief (Solicitor's Brief)"},{
"CDEN":"Post Issue Communication - Request for Certificate of Correction Denied"},{
"CFILE":"Request for Corrected Filing Receipt"},{
"CLM":"Claims"},{
"CLM.NE":"Claim-Amendment Not Entered"},{
"COCIN":"Request for Certificate of Correction"},{
"COCOUT":"Certificate of Correction - Post Issue Communication"},{
"COCX":"Notification of Return of Papers - Re: Request for Certificate of Correction (PTOL-306)"},{
"COMPUTER":"Computer Listing (text file)"},{
"CPA-AMD":"Notice of Informal or Non-Responsive CPA Amendment"},{
"CRF.TRNS.IMP":"Improper CRF Transfer Request Submitted by Applicant"},{
"CRF.TRNS.REQ":"Request for Transfer of a Computer Readable Form"},{
"CRFD":"Computer Readable Form (CRF) for Sequence Listings - Defective"},{
"CRFE":"CRF entered - partial listing printed by STIC"},{
"CRFL":"CRF Sequence Listing Filed"},{
"CRFR":"Mail letter requiring CRF (Unreadable, Non-Compliant, Not Submitted)"},{
"CRFS":"CRF Statement Paper and CRF are the same"},{
"CTAV":"Advisory Action (PTOL-303)"},{
"CTEQ":"Ex Parte Quayle Action"},{
"CTFR":"Final Rejection"},{
"CTMS":"Miscellaneous Action with SSP"},{
"CTNF":"Non-Final Rejection"},{
"CTRS":"Requirement for Restriction/Election"},{
"DC.COMPLAINT":"Plaintiff's Complaint (de novo appeal)"},{
"DC.CV.AFF":"Decision in Civil Action – Affirmed"},{
"DC.CV.AIP":"Decision in Civil Action – Affirmed – In part"},{
"DC.CV.ANS":"PTO's Answer to Plaintiff's Complaint"},{
"DC.CV.COM":"Plaintiff's Complaint (APA action)"},{
"DC.CV.DIS":"Decision in Civil Action – Dismissed"},{
"DC.CV.REM":"Decision in Civil Action – Remanded"},{
"DC.CV.REV":"Decision in Civil Action - Reversed"},{
"DC.CV.TRN":"Decision in Civil Action - Transferred"},{
"DC.DEC.AFF":"Decision in APA Action – Affirmed"},{
"DC.DEC.AIP":"Decision in APA Action – Affirmed in Part"},{
"DC.DEC.DIS":"Decision in APA	Action – Dismissed by Court"},{
"DC.DEC.REV":"Decision in APA Action – Reversed"},{
"DC.DEC.RMD":"Decision in APA Action – Remanded"},{
"DC.MPI":"Motion for Permanent Injunction"},{
"DC.MSJ":"PTO's Motion for Summary Judgment"},{
"DC.MSJ.D":"PTO's Motion for Summary Judgment – Denied"},{
"DC.MSJ.G":"PTO's Motion for Summary Judgment – Granted"},{
"DC.MSJ.PL":"Plaintiff's Motion for Summary Judgment"},{
"DC.MSJ.PLD":"Plaintiff's Motion for Summary Judgment – Denied"},{
"DC.MSJ.PLG":"Plaintiff's Motion for Summary Judgment – Granted"},{
"DC.MTI":"Motion for Temporary Injunction"},{
"DC.SOL.ANS":"PTO's Response to Plaintiff's Complaint (Answer)"},{
"DCPA":"Continuing Prosecution Application - Divisional (DCPA)"},{
"DED.":"Post Issue Communication - Dedicate Life of Patent to Public"},{
"DEPOSIT":"Request for Certificate of Deposit under Budapest Treaty"},{
"DERIV.D":"Derivation Denied"},{
"DERIV.DIS":"Derivation Dismissed"},{
"DERIV.FWD":"Derivation Final Written Decision"},{
"DERIV.G":"Derivation Granted or Granted in Part"},{
"DERIV.PET":"Petition Requesting Derivation"},{
"DISQ":"Terminal Disclaimer Review Decision"},{
"DISQ.E.FILE":"Electronic Terminal Disclaimer – Approved"},{
"DIST":"Terminal Disclaimer Filed"},{
"DIST.E.FILE":"Electronic Terminal Disclaimer - Filed"},{
"DR..":"Decision - Application Returned for Examination"},{
"DRQS":"Decision - Request to Lift Suspension Denied"},{
"DRRI":"Decision - Application Returned for Examination and Requirement for Information"},{
"DRW":"Drawings – only Black and White line drawings"},{
"DRW.NE":"Drawings - Amendment Not Entered"},{
"DRW.NONBW":"Drawings-other than Black and White line drawings"},{
"DSIR":"Denial of SIR Request"},{
"E.RECORD.COR":"Electronic Record Correction"},{
"EABN":"Letter Express Abandonment of the application"},{
"EARLYPUB":"Request for Early Publication "},{
"EBCC.AD":"Notice of Change of Address placed in File Wrapper due to EBC Customer Number update"},{
"ELC.":"Response to Election / Restriction Filed"},{
"EX.A":"Examiner's Amendment Communication"},{
"EXIN":"Examiner Interview Summary Record (PTOL - 413)"},{
"EXPD.L.DEC.D":"Denial Letter For Expedited Foreign Licenses"},{
"EXPD.L.DEC.G":"Grant Letter For Expedited Foreign Licenses"},{
"FAI.A..":"Reply under 1.111 to Pre-Interview Communication"},{
"FAI.REQ":"First Action Interview – Enrollment Request"},{
"FAI.REQ.INTV":"First Action Interview- Schedule Interview request"},{
"FAI.REQ.WD":"Withdraw request for first action interview"},{
"FAI.RQ.NNCPL":"Notice of non-compliant first action interview req"},{
"FOR":"Foreign Reference"},{
"FR TRANS":"Translation of Foreign Priority Documents"},{
"FREF":"Final Refusal of SIR Request"},{
"FRPR":"Certified Copy of Foreign Priority Application"},{
"FWCLM":"Index of Claims"},{
"IACN":"Amendment Copying Claims - Not in Response to Examiner Suggesting Claims"},{
"IACS":"Amendment Copy Claims/Response to	Suggested Claims"},{
"ICPA":"Communication to Applicant - Incomplete Reply to MCPA Notice"},{
"IDS":"Information Disclosure Statement (IDS) Form (SB08)"},{
"IFEE":"Issue Fee Payment (PTO-85B)"},{
"IIFW":"Issue Information including classification, examiner, name, claim, renumbering, etc."},{
"IMIS":"Miscellaneous Internal Document"},{
"INT.DEC.ADV":"Interference Decision on Priority–Adverse"},{
"INT.DEC.FAV":"Interference Decision on Priority-Favorable "},{
"INT.DECL":"Declaration of Interference"},{
"INT.MISC":"Interference Miscellaneous"},{
"INT.REDECL":"Redeclaration of Interference"},{
"INTRVIEW.APP":"Applicant summary of interview with examiner"},{
"INTV.SUM.APP":"Application summary of interview (PTOL-413)"},{
"INTV.SUM.EX":"Examiner initiated interview summary (PTOL-413B)"},{
"IRFND":"Processed Request for Refund"},{
"ISSUE.NTF":"Issue Notification"},{
"ISSUE.WD.NTC":"Notice of withdrawal from issue"},{
"L.SP":"Letter of Suspension - Examiner Initiated"},{
"L_R IN":"Any request going to L R"},{
"L_R OUT":"Any document coming from L&R"},{
"LET.":"Miscellaneous Incoming Letter"},{
"LR501":"Letter Returning Improper 1.501 Submission"},{
"LRO501":"Letter Acknowledging Receipt of 1.501 Submission by Patent Owner"},{
"LRT501":"Letter Acknowledging Receipt of 1.501 Submission by Third Party"},{
"M327":"Miscellaneous Communication to Applicant - No Action Count"},{
"M852":"Letter to Official Draftsman Filed P/E"},{
"M856":"Letter Requesting Suspension of Prosecution"},{
"M865":"Letter Requesting Interview with Examiner"},{
"M903":"Notice of DO/EO Acceptance Mailed"},{
"M905":"Notice of DO/EO Missing Requirements Mailed"},{
"MCPA":"Communication to Applicant for Missing Parts CPA"},{
"MISC OIPE":"Miscellaneous internal documents from OIPE to the examiner indicating formality deficiencies."},{
"N/AP":"Notice of Appeal Filed"},{
"N271":"Response to Amendment under Rule 312"},{
"N416":"Notice of Withdrawal from Issue Branch (PTOL-67)"},{
"N417":"EFS Acknowledgment Receipt"},{
"N427":"Post Allowance Communication - Incoming"},{
"N459":"Notice to Patentee under 37 CFR 1.607(D)"},{
"N570":"Communication - Re: Power of Attorney (PTOL-308)"},{
"N572":"Response - Re: Informal Power of Attorney (PTOL-308)"},{
"N578":"Notification of Withdrawal of Attorney"},{
"NAPI":"Defective/Not Acceptable Notice of Appeal"},{
"NDRW":"New or Additional Drawings"},{
"NFDR":"Notice of Formal Drawings Required"},{
"NFEE":"Notice of Additional Fee Due"},{
"NOA":"Notice of Allowance and fees due (PTOL-85)"},{
"NOCODE":"Temporarily unable to identify document"},{
"NPL":"Non Patent Literature"},{
"NRES":"Letter Restarting Period for Response (i.e. Letter re: References)"},{
"NT.AE.A.NONC":"PTO 2239AE - Notice of Non-Responsive Reply (Accelerated Exam)"},{
"NT.CR.APP.PA":"Notice to File Corrected Application Papers"},{
"NT.INC.REPLY":"Notice of Incomplete Reply"},{
"NT.INCPL.APP":"Notice of Incomplete Application"},{
"NT.WD.NONCPL":"Letter Withdrawing a Notice of Non-Compliant Amendment"},{
"NTC.A.NONCPL":"Notice to the applicant regarding a Non-Compliant or Non-Responsive Amendment"},{
"NTC.CONCPROC":"Notice of concurrent proceedings and decisions "},{
"NTC.MISS.PRT":"Notice to File Missing Parts"},{
"NTC.OMIT.APP":"Notice of Omitted Items Application"},{
"NTC.PUB":"Notice of Publication"},{
"NTC.PUB.DATE":"Notice of New or Revised Publication Date"},{
"NTC.RCE.DEF":"Notice of Improper Request for Continued Examination (RCE) – PTO-2051 Rev 7/2003"},{
"NTRM":"Pre-Exam withdrawal of prior notice"},{
"NUNT":"Notice of Untimely Request"},{
"O501":"1.501 Submission by Patent Owner"},{
"OA.APPENDIX":"Office Action Appendix"},{
"OA.EMAIL":"Email Notification"},{
"OA.FAI":"First action interview - office action"},{
"OA.FAI.OPT.O":"First action without interview"},{
"OA.FAI.PRELM":"Preinterview first office action"},{
"OA.POSTCARD":"A courtesy postcard sent by USPTO to users who opt-in for e-Office Action"},{
"OATH":"Oath or Declaration filed"},{
"P.102":"RO/102 - Notification Concerning Payment of Prescribed Fees and Annex"},{
"P.102B":"RO/102(b) - Chapter I Fee Recordation Sheet "},{
"P.103":"RO/103 - Invitation to Correct the Purported IA"},{
"P.104":"RO/104 - Notification that the Purported IA -	is not and will not be Treated as an IA"},{
"P.105":"RO/105 - Notification of the IA Number and of the International Filing Date"},{
"P.106":"RO/106 with Annex A, B and/or C - Invitation to Correct Defects in the IA"},{
"P.107":"RO/107 Notification of Non-inclusion of Drawings with the IA"},{
"P.108":"RO/108 - Invitation to Request Rectification"},{
"P.109":"RO/109 - Notification of Decision Concerning Request for Rectification"},{
"P.110":"RO/110 with Annex	 - Invitation to Correct Priority Claim"},{
"P.111":"RO/111 - Notification Relating to Priority Claim"},{
"P.112":"RO/112 - Notification Concerning Expressions, etc., not to be used in the IA"},{
"P.113":"RO/113 - Request for the Recording of a Change "},{
"P.114":"Notification on Decision of Confirmation of Incorporation by Ref. Of Missing Element/Part"},{
"P.115":"RO/115 - Notification of Intention to make Declaration that IA Considered Withdrawn"},{
"P.117":"RO/117 - Notification that IA Considered to be Withdrawn"},{
"P.118":"RO/118 - Notification Concerning Documents Transmitted"},{
"P.119":"RO/119 - Notification of Refund of Fees"},{
"P.120":"RO/120 - Invitation to Pay Fee for Preparation of Copies"},{
"P.123":"RO/123 - Notification Concerning Representation"},{
"P.124":"RO/124 - Notification of Defective Power of Attorney or Defective Revocation of Power of Attorney"},{
"P.126":"RO/126 - Notification Concerning Later Submitted Sheets or Drawings"},{
"P.127":"RO/127 - Notification of Decision not to Issue Declaration that IA Considered Withdrawn"},{
"P.132":"RO/132 - Notification of Defects with Regard to Correspondence Submitted by the Applicant"},{
"P.133":"RO/133 with Annex - Invitation to Pay Prescribed Fees Together with Late Payment Fee"},{
"P.134":"RO/134 Deposited Microorganisms/Bio Material"},{
"P.135":"RO/135 - Notification of Date of Receipt of Priority Document or of Priority Application Number"},{
"P.136":"RO/136 - Notification of Withdrawal"},{
"P.138":"RO/138 - Communication Regarding Extension of Time Limit"},{
"P.13TER.STMT":"Seq Listing Cover Sheet/Stmt under PCT Rule 13ter"},{
"P.143":"RO/143 - Notification that IA Considered to be Withdrawn"},{
"P.145":"Invitation to pay fee for confirmation of precautionary designation"},{
"P.146":"RO/146 with Attachments - Notification Regarding Certain Corrections Made Ex Officio"},{
"P.147":"RO/147 - Notification Concerning Failure to Forward Record Copy and Search Copy for National Security Reasons"},{
"P.151":"RO/151 - Notification of Transmittal of IA to the IB as Receiving Office and Invitation to Pay Fee"},{
"P.152":"RO/152 - Invitation to Authorize Transmittal of IA to the IB as Receiving Office and to Pay Fee."},{
"P.153":"RO/153 - Notification of Transmittal of Demand to the IB or the competent IPEA."},{
"P.154":"RO/154 - Invitation to Indicate Competent IPEA."},{
"P.155":"RO/155 - Notification that Demand Considered not to Have Been Submitted"},{
"P.156":"RO/156 - Invitation to Correct Declarations Made in the Request Under PCT Rule 4.17"},{
"P.158":"Notification of Intended Refusal of Request to Restore Right of Priority"},{
"P.159":"Notification of Decision on Request to Restore Right of Priority"},{
"P.202.IN":"Incoming ISA/202 - Notification of Receipt of Search Copy"},{
"P.202.OUT":"Outgoing - ISA/202 - Notification of Receipt of Search Copy"},{
"P.203":"ISA/203 - Declaration of Non-Establishment of International Search Report"},{
"P.205":"ISA/205 - Notification of Change in Abstract as Previously Established by ISA"},{
"P.206":"ISA/206 - Invitation to Pay Additional Fees"},{
"P.209":"Notification of Facts Which Should Have Precluded the According of an International Filing Date"},{
"P.210.IN":"Incoming ISR, 237 & References from IB"},{
"P.210.OUT":"Outgoing - ISA/210 - International Search Report"},{
"P.212":"ISA/212 - Notification of Decision on Protest"},{
"P.216":"ISA/216 - Invitation to Request Rectification"},{
"P.217.IN":"ISA/217 - Notification of Decision Req for Rectification"},{
"P.217.OUT":"ISA/217 - Notification of Decision Concerning Request for Rectification"},{
"P.220":"ISA/220 - Notification of Transmittal of Search Report and Written Opinion of the ISA, or the Declaration"},{
"P.224.IN":"ISA/224 – Communication-No Other Form is Applicable"},{
"P.224.OUT":"ISA/224 - Communication in Cases for Which No Other Form is Applicable"},{
"P.225.IN":"ISA/225-Invite to Furnish Nucleotide/Amino Acid/Related Tables"},{
"P.225.OUT":"ISA/225 - Invitation to Furnish Nucleotide and/or Amino Acid Sequence Listing and/or Related Tables "},{
"P.234.IN":"ISA/234-Notif. of Trans of Demand to IB or the Competent IPEA"},{
"P.234.OUT":"ISA/234-Notification of Transmission of Demand to IB or the Competent IPEA"},{
"P.237.IN":"Incoming Written Opinion of the ISA"},{
"P.237.OUT":"Outgoing Written Opinion of the ISA"},{
"P.299":"Unity of Invention Telephone Memorandum"},{
"P.306":"IB/306- Notification of the Recording of a Change"},{
"P.307":"IB/307 - Notification of Withdrawal of IA or Designations"},{
"P.313":"IB/313 - Notification of Defects in the IA"},{
"P.315":"IB/315 - Notification of Decision Concerning Request for Rectification "},{
"P.316":"IB/316 - Invitation to Correct Priority Claim"},{
"P.317":"IB/317 - Notification of Withdrawal of Priority Claim "},{
"P.318":"IB/318 - Notification Relating to Priority Claims"},{
"P.319":"IB/319 - Notification Concerning Representation"},{
"P.320":"IB/320 - Notification of Defective Power of Attorney or Defective Revocation of Power of Attorney"},{
"P.321":"IB/321 - Notification of Facts Which Should Have Precluded the According of an International Filing Date "},{
"P.323":"IB/323 - Request for the Production of Proof"},{
"P.336":"IB/336 - Notification of Defects in Demand"},{
"P.337":"IB/337 - Notification Concerning Written Opinion of ISA and Amendments of Claims "},{
"P.339":"IB/339 - Notification of Withdrawal of Demand or Elections"},{
"P.344":"IB/344 - Notification of Defects with Regard to Correspondence Submitted by Applicant"},{
"P.345":"IB/345 - Communication in Cases for Which No Other Form is Applicable"},{
"P.350":"IB/350 - Notification the Demand is Considered not to Have Been Submitted or Made"},{
"P.353":"IB/353 - Furnishing of Copies of Priority Documents "},{
"P.368":"IB/368 - Notification of Transmittal of Demand to the Competent IPEA"},{
"P.369":"IB/369 - Notification that Demand Considered not to Have Been Submitted"},{
"P.370":"IB/370 - Invitation to Correct Declarations Made in the Request Under PCT Rule 4.17"},{
"P.371":"IB/371 - Notification Relating to Declaration Made Under PCT Rule 4.17"},{
"P.372":"IB/372 – Notice of Withdrawal"},{
"P.374":"IB/374 - Notification of Transmittal of Copies of the Written Opinion of the ISA"},{
"P.399":"IB/399 – International Application Status Form"},{
"P.409.IN":"Incoming IPEA/409 – Int’l Prelim Report on Patentability"},{
"P.92BIS":"Request for recording of a change/ PCT Rule 92bis"},{
"P.APP.INCORP":"Copy of earlier app for incorporation by reference"},{
"P.ART19.CLM":"Amendment to the claims under PCT Article 19 "},{
"P.ART19.STMT":"Copy/Translation of Stmnt. Under PCT Article 19"},{
"P.CONF.DES":"Confirmation of precautionary designation"},{
"P.CORP.RES":"Corp. Resolution/Auth. to Act on Behalf of Corp."},{
"P.EXP.MAIL":"Cert. of Express Mail/Exp. Mail Envelope label"},{
"P.FEE.PYMT":"Fee payment - International Application"},{
"P.FORISA.LET":"Miscellaneous communication from ISA"},{
"P.FOSC.FEE":"Search fee payment for FOSC from foreign RO"},{
"P.IB.LET":"Fax/Letter/Misc. form from the IB"},{
"P.INFO.PC":"Req for pub of info relating to p clm declard void"},{
"P.LATEPUB.PC":"Req for pub of late furnished p clm correction"},{
"P.LET":"Misc. incoming letter from Applicant - IA"},{
"P.N.101.ANX":"RO/101 Annex (fee calculation sheet) "},{
"P.N.101.CONV":"RO/101 - Request form for new IA - Conventional	"},{
"P.N.101.FOSC":"Foreign Origin Search copies - IA"},{
"P.N.101.SAFE":"RO/101 - Request form for new IA- PCT EASY Format "},{
"P.N.NO101":"New International Application from Applicant	- Missing Request form"},{
"P.PAMPHLET":"WIPO Publication – Non-English version"},{
"P.R20.6.CONF":"Confirmation of incorporation by reference"},{
"P.REQ.RECON":"Request for Reconsideration - IA"},{
"P.REQ.RECT":"Request for rectification - IA"},{
"P.RESP.206":"Response to form PCT/ISA/206	Unity of Invention"},{
"P.RESP.225":"Response to PCT/ISA/225 invitation to furnish seq. list"},{
"P.RESTORE.PC":"Evidence for restoration of priority claim"},{
"P.RULE26BIS":"Priority Claim Adjustment under PCT Rule 26bis"},{
"P.SAFE.LOG":"PCT EASY Validation Log"},{
"P.SELECT.ISA":"ChI-Select Competent ISA"},{
"P.SIG.STMT":"Statement explaining lack of signature - IA"},{
"P.SUB.SH.101":"Substitute Sheets of Request (Form PCT/RO/101)"},{
"P.SUB.SH.DRW":"Substitute Drawings"},{
"P.SUB.SHEET":"Substitute Sheets - IA"},{
"P.TR":"PCT-Transmittal Letter"},{
"P.TRAN.CERT":"Translation of priority doc for incorp by refernc"},{
"P.TRAN.COPY":"Copy of trans of earlier app for incorp by refernc"},{
"P.URGENT":"Incoming doc requiring expedited processing"},{
"P.WD.APPL":"Request to withdraw IA"},{
"P.WD.ATTY":"Request to withdraw as attorney - IA"},{
"P.WD.DES":"Request to withdraw designation - IA"},{
"P.WD.PRIORIT":"Request to withdraw priority claim - IA"},{
"P.WD.US.DES":"Request to withdraw US designation - IA"},{
"P2.401":"CHII - Form PCT/IPEA/401 - Demand "},{
"P2.401.ANX":"CHII - Form IPEA/401 Annex"},{
"P2.402":"IPEA/402 - Notification of Receipt of Demand by Competent IPEA"},{
"P2.403":"IPEA/403 - Notification Concerning Payment of the Preliminary Examination and Handling Fees"},{
"P2.403B":"CHII Fee Sheet"},{
"P2.404":"IPEA/404 - Invitation to Correct Defects in the Demand"},{
"P2.405":"IPEA/405 Invitation to Restrict or Pay Additional Fees"},{
"P2.407":"IPEA/407 - Notification that Demand Considered not to Have Been Submitted"},{
"P2.408":"IPEA/408 - Written Opinion of the IPEA"},{
"P2.409":"IPEA/409 - International Preliminary Report on Patentability"},{
"P2.411":"IPEA/411 - Invitation to Request Rectification"},{
"P2.412":"IPEA/412 - Notification of Decision Concerning Request for Rectification"},{
"P2.416":"IPEA/416 - Notification of Transmittal of International Preliminary Report on Patentability"},{
"P2.420":"IPEA/420 - Notification of Decision on Protest"},{
"P2.424":"IPEA/424 - Communication in Cases for Which No Other Form Is Applicable"},{
"P2.424N":"IPEA/424 - Communication in Cases for Which No Other Form Is Applicable-No reply due"},{
"P2.425":"IPEA/425 - Notification of Cancellation of Certain Elections"},{
"P2.428":"IPEA/428 Note on Informal Communication with the Applicant"},{
"P2.430":"IPEA/430 Request for international Searching Authority to Furnish Copy of Sequence Listing to International Preliminary Examining Authority"},{
"P2.431":"IPEA/431 - Invitation to Submit Amendments"},{
"P2.436":"CHII – Notification of Transmittal of Demand to the IB or the Competent IPEA"},{
"P2.440":"IPEA/440 - Invitation to Pay Prescribed Fees Together with Late Payment Fee"},{
"P2.441":"IPEA/441 Invitation to Furnish Nucleotide and/or Amino Acid Sequence Listing and/or Tables Related Thereto C"},{
"P2.499":"Unity of Invention - Telephone Memorandum"},{
"P2.92BIS":"CHII - Request for recording change/PCT Rule 92bis"},{
"P2.ART34.A":"CHII - Amendmnts to descrpt/drawings - PCT Art. 34"},{
"P2.ART34.CLM":"CHII - Amendment to the claims - PCT Art. 34"},{
"P2.FEE.PYMT":"CHII - Fee payment - International Application"},{
"P2.FILECOPY":"File copy of WO and IPRP forms 237/408/409"},{
"P2.IB.LET":"CHII - Fax/Letter/Misc. form from the IB"},{
"P2.LET":"CHII - Misc. communication from Applicant _IA"},{
"P2.MISC":"CHII Misc. internal or outgoing document in an IA"},{
"P2.REQ.RECON":"CHII - Request for Reconsideration - IA"},{
"P2.REQ.RECT":"CHII -Request for rectification - IA "},{
"P2.RESP.404":"CHII - Response to form PCT/IPEA/404"},{
"P2.RESP.405":"CHII - Response to form PCT/IPEA/405 Unity of Invention"},{
"P2.RESP.408":"CHII - Response to Written Opinion ISA/237/IPEA/408"},{
"P2.WD.ATTY":"CHII - Request to withdraw as attorney - IA"},{
"P2.WD.DES":"CHII - Request to withdraw election - IA"},{
"P2.WD.PRRITY":"CHII - Request to withdraw priority claim - IA"},{
"PA..":"Power of Attorney"},{
"PA.LIST":"List-up to 10 attys appointed in a POA"},{
"PATENT.GRANT":"Image version of Patent Grant"},{
"PC/I":"Power to Make Copies and/or Inspect"},{
"PD.AUTH.NTC":"Notice that authorization for participating	IP Offices to access US application was improper."},{
"PD.FILED.E":"Priority Documents electronically retrieved by USPTO from a participating IP Office"},{
"PD.PRE.NTC":"A formal notice indicating request for Official Priority Documents was unacceptable"},{
"PD.REQ.RETR":"Request for USPTO to retrieve priority docs."},{
"PD.RETR.FAIL":"Document indicating Retrieval Request was unsuccessful"},{
"PD.TO.AUTH ":"Authorization to access Appl. by Trilateral Office"},{
"PEER.CNS.RSP":"Response To Applicant Consent - Peer to Patent	"},{
"PEER.CONSENT":"Request for Peer Review		 "},{
"PEER.IDS":"Third-Party Submission –Peer to Patent	"},{
"PEER.IDS.ACK":"Acknowledgement of Third-Party Submission –Peer to Patent	"},{
"PEER.SB423":"Third Party Submission - Peer Review"},{
"PEFN":"Pre-Exam Formalities Notice"},{
"PEFR":"Applicant Response to Pre-Exam Formalities Notice"},{
"PEFRREISS":"Response to Pre-Exam Reissue Notice"},{
"PEFRSEQ":"Response to Pre-Exam Sequence Notice"},{
"PET.":"Petition Entered"},{
"PET.41.3":"Petition under Rule 41.3 to Chief Admin Patent Judge"},{
"PET.AUTO":"Petition automatically granted by EFS"},{
"PET.DEC.AUTO":"Petition Auto Grant letter from EFS-Web"},{
"PET.DEC.COCI":"Petition Decision routed to Certificate of Correction"},{
"PET.DEC.OIPE":"Petition decision routed to the OIPE to act on the decision or continue prosecution"},{
"PET.DEC.PUBS":"Petition decision routed to the Office of Publications to act on the decision or continue prosecution."},{
"PET.DEC.RTE":"Decision on request for participation in the New Route Program"},{
"PET.DEC.TC":"Petition decision routed to the Technology Center to act on the decision or continue prosecution"},{
"PET.GREEN":"Green Tech Petition under 37 CFR 1.102"},{
"PET.LAWSCHOL":"Petition to Make Special-LawSchool"},{
"PET.OP":"Petition for review	by the Office of Petitions"},{
"PET.OP.AGE":"Petition to make special based on Age/Health"},{
"PET.OP.SPAC":"Petition to make special by Exp Abandon Copend App"},{
"PET.OPLA":"Petition decided by Patent Legal Administration"},{
"PET.P2.PCT":"CHII - Petition for review by the PCT legal office"},{
"PET.PCT":"Petition for review by the PCT legal office."},{
"PET.POA.WDRW":"Petition to withdraw attorney or agent (SB83)"},{
"PET.PTA":"Patent Term Adjustment Petition"},{
"PET.PTA.RCAL":"Request for PTA recalculation in view of Wyeth"},{
"PET.RELIEF":"Certification and Request for Disaster Relief"},{
"PET.ROUTE":"Request for participation in the New Route Program between the JPO and USPTO"},{
"PET.SPRE":"Petition for review by the Technology Center SPRE"},{
"PET.SPRE.ACX":"Petition for 12-month Accelerated Exam"},{
"PET.STATUS	":"Petition for review/ processing depending on status"},{
"PETDEC":"Petition Decision"},{
"PETWDISS":"Petition to Withdraw from Issue"},{
"PG.NONPUB.RQ":"Nonpublication request from applicant"},{
"PGA9":"Request/Corrected Patent Application Publications"},{
"PGA9.DEC":"Decision for a Request for Corrected Patent Application Publication"},{
"PGEA":"Request for Exp Aband for refund or to avoid pub"},{
"PGEA.D":"Petition for PreGrant Publication Express Abandonment - Dismissed"},{
"PGEA.G":"Petition for PreGrant Publication Express Abandonment - Granted"},{
"PGP DRAWINGS":"Request to accept PGPub Drawings for publication"},{
"PGREF":"Request for Refund of Publication Fee Paid"},{
"PPH.DECISION":"Patent Prosecution Highway decision on request/petition to make special"},{
"PPH.PCT.652":"Petition to make special under PCT-Patent Pros Hwy"},{
"PPH.PET.652":"Petition to make special under Patent Pros Hwy"},{
"PREX.SRCH":"Statement of preexamination search"},{
"PREX.SUP.DOC":"Examination support document"},{
"PRIA":"Statement under Rule 1.608(a) - Patent Board"},{
"PRIB":"Statement under Rule 1.608(b) - Patent Board"},{
"PRO TRANS":"Translation of a provisional application filed with a non provisional"},{
"PROTEST":"Protest Documents filed by 3rd Party"},{
"Q.DEC.REOP":"Reopen prosecution after QPIDS request after Notice of Allowance"},{
"QPIDS.REQ":"Quick Path Information Disclosure Statement"},{
"R129":"Request under Rule 129 to Reopen Prosecution"},{
"R251.NTC":"Notice to provide a copy of an applicant's record under 37 CFR 1.251 to support the reconstruction of the application."},{
"R251.RES":"Response providing copy of record	for reconstruction"},{
"R3.73B":"Assignee	showing of ownership per 37 CFR 3.73(b)"},{
"R48.REQ":"Request under Rule 48 correcting inventorship."},{
"RBNE":"Reply Brief Noted – Patent Board"},{
"RCE.NE":"RCE not entered"},{
"RCEX":"Request for Continued Examination (RCE)"},{
"RCONVP":"Petition to Convert Regular to Provisional"},{
"REF.OTHER":"Other Reference – Patent or Application Document"},{
"REIS.CONSENT":"Consent of Assignee	accompanying the declaration"},{
"REIS.DECL":"Reissue decl filed in accordance with MPEP 1414"},{
"REIS.REVFORM":"Final Reissue Review Form indicating SPREs final review of an allowed reissue application. "},{
"REIS.SUPDECL":"Supplemental reissue decl filed in accord with MPEP 1414.01"},{
"REM":"Applicant Arguments or Remarks Made in an Amendment"},{
"REQ.MIS.PART":"Certification and Request for Missing Parts "},{
"RESC":"Rescind Nonpublication Request for Pre Grant Pub"},{
"RETMAIL":"Mail returned to USPTO as undelivered"},{
"RFN.REQ":"Refund Request "},{
"RFND":"Refund Denied"},{
"ROCKET":"Request for Expedited Processing, Design Rocket Docket "},{
"RXAAF.":"Reexam Response to Final Rejection"},{
"RXADV.":"Reexam proceeding - Advisory Action "},{
"RXAF/DR":"Reexam	- Affidavit/Decl/Exhibit Filed by 3rd Party"},{
"RXAP/W":"Withdrawal of Appeal"},{
"RXAPBI":"Reexam Defective Brief Filed"},{
"RXAPDFA":"Patent Board decision on rehearing - Decision is final and appealable"},{
"RXAPDRN":"Patent Board decision on rehearing - Decision is new decision"},{
"RXAPHC":"Reexam Appeal - Oral Hearing Conducted at Patent Board"},{
"RXAPRR":"Request for rehearing to Patent Board"},{
"RXBDAF":"Patent Board Decision - Affirmance"},{
"RXBDAP":"Patent Board Decision - Affirmance-in-part"},{
"RXBDRR	":"Patent Board Remanded Reexam to Examiner"},{
"RXBDRV":"Patent Board Decision -	Reversal"},{
"RXC.ADR":"Reexam - Correspondence Address Change for 3rd Party"},{
"RXC/M.":"Reexam Certificate of Mailing"},{
"RXC/SR	":"Reexam Certificate of Service"},{
"RXCAFC	":"Reexam Court of Appeals Decision Rendered"},{
"RXCERT	":"Reexamination Certificate Issued"},{
"RXCTAP	":"Reexam Appeal Patent Board Decision to Court of Appeals"},{
"RXDCDS":"Decision Denying Stay/Suspension of a Reexam Proceeding"},{
"RXDCLS":"Decision Lifting the Stay/Suspension of Reexam Proceedings"},{
"RXDCMP	":"Decision Merging Proceedings"},{
"RXDOR	":"Director Initiated Order for Reexam in Preprocessing"},{
"RXDSMP	":"Decision Dissolving Merged Proceedings in Reexam"},{
"RXEPQ.":"Reexam - Ex Parte Quayle Action "},{
"RXEXTD	":"Extension of Time Period for Response Denied"},{
"RXEXTG	":"Reexam Extension of Time Period for Response Granted"},{
"RXFEE":"Reexam Fee Payment Only Filed"},{
"RXFILJKT":"Paper Reexam File Jacket is scanned"},{
"RXFR..":"Reexam - Final Rejection "},{
"RXIDS.R ":"Reexam - Info Disclosure Statement Filed by 3rd Party"},{
"RXINCR	":"Notice of Incomplete Ex Parte Reexam Request"},{
"RXL/RD	":"Letter Acknowledging That an Improper Paper in a Reexam Proceeding Has Been Returned/Destroyed"},{
"RXLET.	":"Reexam Miscellaneous Incoming Letter"},{
"RXLITSR":"Reexam Litigation Search Conducted"},{
"RXMISC":"Reexam - Miscellaneous Action "},{
"RXMRRD	":"Decision Dissolving the Merged Reexam and Reissue Proceedings"},{
"RXMRRI	":"Decision Merging Reexam and Reissue Proceedings -- Reissue Application"},{
"RXMRRT	":"Merged Reexam and Reissue Proceedings Concluded by Mailing Notice of Allowance in the Reissue Appl."},{
"RXMRRX	":"Decision Merging Reexam and Reissue Proceedings -- Reexam Request"},{
"RXMRXD	":"Decision Denying Merger of Reexam Proceedings"},{
"RXNDEFCT":"Notification of Defective Paper in a Reexam"},{
"RXNFDACC":"Reexam - Notice of filing date accorded"},{
"RXNINA":"Notification of Informal or Nonresponsive Amendment"},{
"RXNIRC	":"Notice of Intent to Issue a Reexam Certificate"},{
"RXNOCA	":"Reexam Notice of Court Action"},{
"RXNOCP":"Notice of concurrent proceeding(s)"},{
"RXNREQ.U	":"Notice of Untimely Reexam Request "},{
"RXNREQAU":"Notice of assignment of reexamination request"},{
"RXNREQFD":"Notice of reexamination request filing date"},{
"RXNRES	":"Letter Restarting Period Of Response in a Reexam Proceeding - e.g., Letter re References, remail"},{
"RXNRQREC":"Notice of reexamination request received"},{
"RXOGNOTC	":"Notice of Reexam Published in Official Gazette"},{
"RXOPPPET":"Reexam - Opposition filed in response to petition"},{
"RXOR.T	":"Reexam Timely Patent Owner's Stmnt in Resp to Order"},{
"RXOR.U	":"Reexam Untimely Patent Owner's Stmnt in Resp to Order"},{
"RXOSUB	":"Receipt of Original Ex Parte Reexam Request"},{
"RXOSUB.C":"Receipt of Corrected Original Ex Parte Request"},{
"RXOSUB.R":"Receipt of Orig. Ex Parte Request by Third Party "},{
"RXPA..R":"Reexam Change in Pwr Atty for Third Party Requester"},{
"RXPATENT":"Copy of patent for which reexamination is requested"},{
"RXPET.	":"Receipt of Petition in a Reexam"},{
"RXPETD	":"Petition Decision on Request for Reconsideration Denying Reexamination"},{
"RXPETG	":"Petition Decision on Request for Reconsideration Ordering Reexamination"},{
"RXPTDE	":"Reexam Petition Decision - Denied"},{
"RXPTDI	":"Reexam Petition Decision - Dismissed"},{
"RXPTGP	":"Reexam Petition Decision - Granted-in-part"},{
"RXPTGR	":"Reexam Petition Decision - Granted"},{
"RXR.NF":"Reexam - Non-Final Action "},{
"RXREXD	":"Determination -- Reexam Denied"},{
"RXREXO	":"Determination -- Reexam Ordered"},{
"RXRPET	":"Petition for Review of Reexam Denial"},{
"RXRQ/T	":"Reexam Request for Extension of Time"},{
"RXRQ4FP	":"Reexam Req for For Priority (Priority Papers May Be Incl)"},{
"RXRQMP":"Request to Merge Reexam Proceedings"},{
"RXRQS.	":"Reexam Request to Lift Suspension of Prosecution"},{
"RXRR.T":"Reexam Timely Requester's Reply to an Owner's Stmnt"},{
"RXRR.U":"Reexam Untimely Reqr Reply to Owner Stmnt"},{
"RXTD.NE":"Reexam Notification of Terminal Disclaimer - Not Accepted"},{
"RXTD.OK":"Reexam Notification of Terminal Disclaimer - Accepted"},{
"RXTERM":"Reexamination Terminated"},{
"RXTRLTR":"Trans Letter filing of a response in a reexam"},{
"RXTTLRPT":"Title Report"},{
"RXVACATE		":"Decision Vacating a Determination Ordering a Reexamination"},{
"RXWDNIRC	":"Withdrawal of Notice of Intent to Issue Reexamination Certificate"},{
"SA..":"Supplemental Response or Supplemental Amendment"},{
"SADV":"Supplemental Advisory Action"},{
"SAFR":"Supplemental Amendment after Final Rejection"},{
"SAPB":"Supplemental Appeal Brief"},{
"SC.AMICUS.BR":"Non-party files brief to the Supreme Court"},{
"SC.CERT.PET":"Petition for Writ of Certiorari"},{
"SC.CERT.PETD":"Petition for Writ of Certiorari-denied"},{
"SC.CERT.PETG":"Petition for Writ of Certiorari-granted"},{
"SC.CERT.RSP":"Response to Petition for Writ of Certiorari"},{
"SC.DEC":"Decision by the Supreme Court"},{
"SC.MERTIT.BR":"Party files brief to the Supreme Court"},{
"SE.ABEYANCE":"Paper Held in Abeyance - Supp Exam"},{
"SE.COURT.DOC":"Court Document - Supp Exam"},{
"SE.CRT.SNQ.N":"Issuance of Supplemental Examination Certificate – No SNQ Found"},{
"SE.CRT.SNQ.Y":"Issuance of Supplemental Examination Certificate - SNQ Found"},{
"SE.DEC.MISC":"Misc Decision/Office Notice - Supp Exam"},{
"SE.DECL.AFF":"Declaration or Affidavit - Supp Exam"},{
"SE.EXPUNGE":"Notice/Decision Expunging Improper Paper - Supp Exam"},{
"SE.FD.VACATE":"Notice/Decision Vacating Filing Date - Supp Exam"},{
"SE.FILE.DATE":"Notice of Filing Date Assigned to Supp Exam Request"},{
"SE.ITEM.LIST":"List of Items of Information - Supp Exam"},{
"SE.ITEM.MISC":"Misc Item of Information"},{
"SE.ITEM.PAT":"US Patent or Patent Application Pub - Supp Exam"},{
"SE.OFF.PROC":"List Prior or Concrrnt Ofc Proceedings - Supp Exam"},{
"SE.PATENT":"Copy of patent for which supp exam is requested"},{
"SE.PET":"Petition in Supplemental Examination"},{
"SE.PET.D":"Petition Denied - Supp Exam"},{
"SE.PET.DIS":"Petition Dismissed - Supp Exam"},{
"SE.PET.G":"Petition Granted - Supp Exam"},{
"SE.PET.GIP":"Petition Granted in Part - Supp Exam"},{
"SE.POA.D":"Notice Denying POA Request - Supp Exam"},{
"SE.REASN.SNQ":"Reasons for SNQ Determination"},{
"SE.REQ.COR":"Receipt of Corrected Supp Exam Request"},{
"SE.REQ.NCOMP":"Notice of Noncompliant/Incomplete Supp Exam Request (no filing date)"},{
"SE.REQ.ORIG":"Receipt of Orig. Supp Exam Request"},{
"SE.REQ.ORIG":"Receipt of Orig. Supp Exam Request"},{
"SE.SALE.RCPT":"Copy of Sales Receipt or Invoice - Supp Exam"},{
"SE.TERMINATE":"Notice of Termination (No Filing Date) - Supp Exam"},{
"SE.TRANS":"Translation of Non-English Item of Information"},{
"SE.TRNSCRPT":"Transcript of Audio or Video Recording - Supp Exam"},{
"SEPQ":"Supplemental Ex Parte Quayle"},{
"SEQ.REQ.DISC":"Requirements for Sequence Disclosure Notice"},{
"SEQ.TXT":"Sequence Listing (Text File)"},{
"SEQLIST":"Sequence Listing"},{
"SFR.":"Supplemental Final Rejection"},{
"SIR.":"Form PTO/SB/94 - SIR Request"},{
"SOL.DC.NFD":"Brief synopsis of civil proceeding from filing to disposal"},{
"SOL.NTC.ARB":"Filing of notice of arbitration award regarding a patent"},{
"SOL.NTC.SUIT":"Report on the filing or determination of an action regarding a patent "},{
"SPEC":"Specification"},{
"SPEC.NE":"Specification-Amendment Not Entered"},{
"SPECNO":"Specification - Not in English"},{
"SR..":"Supplemental Non-Final Rejection (PTOL-326)"},{
"SRES":"Supplemental Restriction"},{
"SREXR141":"Certification and Authorization for EPO Access to Search Results"},{
"SRFW":"Search info including classification, databases, and other search related notes"},{
"SRNT":"Examiner’s Search Strategy and Results"},{
"STAT.DISCLMR":"Statutory disclaimers per MPEP 1490."},{
"STATUS.LET":"Request for status of Application"},{
"T501":"Prior Art submission by a Third Party under Rule 37 CFR 1.501 during the period of enforceability of a patent"},{
"T844":"Third Party Submission after Publication under 37 CFR 1.99 after publication of a patent"},{
"TABLE":"Table not included in SPEC (Text File)"},{
"TERM.AGC.180":"FDA Final Eligibility Letter"},{
"TERM.AGC.LET":"Letter from FDA or Dept. of Agriculture RE: PTE Application"},{
"TERM.AGC.RRP":"Transaction for FDA Determination of Regulatory Review Period"},{
"TERM.ELC.RES":"Election in Response to Notice of Final Determination"},{
"TERM.INF.RES":"Resp. to req. for info. Sent under 37 CFR 1.750"},{
"TERM.ITM.G":"Interim Patent Term Extension Granted"},{
"TERM.PTO.C":"Patent Term Extension Certificate"},{
"TERM.PTO.DIS":"Patent Term Extension (156) Dismissed"},{
"TERM.PTO.ELC":"Notice of Final Determination-Election Required"},{
"TERM.PTO.IE":"Notice of Final Determination-Ineligible"},{
"TERM.PTO.LT1":"Initial letter Re: PTE Application to regulating agency"},{
"TERM.PTO.LT2":"Second letter to regulating agency to determine regulatory review period"},{
"TERM.PTO.NFD":"Notice of Final Determination-Eligible"},{
"TERM.RCN.REQ":"37 CFR 1.750 Request for Reconsideration"},{
"TERM.REQ":"Patent Term Extension Application Under 35 USC 156"},{
"TERM.REQ.ITM":"PTE Interim Patent Extension filed"},{
"TERM.RQR.INF":"Requirement for information sent under 37 CFR 1.750"},{
"TERM.WAIVE":"PTE Waiver of time period for requesting reconsideration"},{
"TERM.WD":"Withdrawal of Application for PTE"},{
"TR.PROV":"Provisional Cover Sheet (SB16)"},{
"TR.RESP.ACX":"Accelerated Exam - Transmittal	amendment/reply"},{
"TRACK1.DENY":"TrackOne Request Denied"},{
"TRACK1.GRANT":"TrackOne Request Granted"},{
"TRACK1.REQ":"TrackOne Request"},{
"TRAN.LET":"Transmittal Letter"},{
"TRDD":"Transfer Inquiry"},{
"TRIAL.CERT":"Trial Review Certificate Issued"},{
"TRIAL.PET.RQ":"Petition Requesting Trial"},{
"TRIAL.REQ.D":"Request for Trial Denied"},{
"TRIAL.REQ.G":"Request for Trial Granted"},{
"TRIAL.REQ.GP":"Request for Trial	Granted in Part"},{
"TRIAL.RQ.DIS":"Request for Trial Dismissed"},{
"TRIAL.TRMFWD":"Trial Termination or Final Written Decision"},{
"TRIWAY.IN":"Request for participation in Triway Program Among the USPTO, the EPO and JPO"},{
"TRIWAY.OUT":"Decision on request for participation in the Triway Program"},{
"TRNA":"Transmittal of New Application"},{
"TRREISS":"Transmittal Reissue Application"},{
"VACATE.PROC":"Decision Vacating a Determination Ordering a Reexamination Proceeding, or Vacating an Interference Proceeding"},{
"VOL.TABLE":"Table –Voluntary Submission (text)"},{
"W/AC":"Letter Withdrawing/Vacating Office Action"},{
"WCLM":"Claims Worksheet (PTO-2022)"},{
"WFEE":"Fee Worksheet (SB-06)"},{
"WSIR":"Notice of Withdrawal of SIR"},{
"XI.A…":"Response after non-final action-owner timely"},{
"XI.ACP":"Action Closing Prosecution (nonfinal)"},{
"XI.ACPOC":"Patent Owner Comments after Action Closing Prosecution"},{
"XI.ACPRC":"Third Party Requester Comments after Action Closing Prosecution"},{
"XI.AP.BO":"Appeal Brief-Owner"},{
"XI.AP.BR":"Appeal Brief- Third Party Requester"},{
"XI.AP.DA":"New Board of Appeals Decision after Board Decision With New Ground of Rejection: Examiner Affirmed"},{
"XI.AP.DP":"New Board of Appeals Decision after Board Decision With New Ground of Rejection: Examiner Affirmed in Part"},{
"XI.AP.DR":"New Board of Appeals Decision after Board Decision With New Ground of Rejection: Examiner Reversed"},{
"XI.AP/W":"Withdrawal of Appeal"},{
"XI.APCTO":"Patent Owner Appeal to the Federal Circuit Filed"},{
"XI.APCTR":"Requester Appeal to the Federal Circuit "},{
"XI.APDFA":"Board of Appeals Decision on Rehearing - Decision is Final and Appealable"},{
"XI.APDN":"New Board of Appeals Decision after Board Decision With New Ground of Rejection: New Ground of Rejection"},{
"XI.APDOC":"Patent Owner Response after Board Decision"},{
"XI.APDRC":"Requester Comments on Patent Owner Response after Board Decision "},{
"XI.APDRN":"Board of Appeals Decision on Rehearing - Decision is New Decision"},{
"XI.APOHO":"Oral Hearing Request-Owner"},{
"XI.APOHR":"Oral Hearing Request-	Third Party Requester"},{
"XI.APXDT":"Examiner’s Determination on Patent Owner Response/Requester Comments after Board Decision "},{
"XI.N/APD":"Defective Notice of Appeal or Cross Appeal Filed"},{
"XI.N/APR":"Notice of Appeal- Requester"},{
"XI.NCAPO":"Notice of Cross Appeal- Owner"},{
"XI.NCAPR":"Notice of Cross Appeal- Third Party Requester"},{
"XI.NREQI":"Notification of Incomplete Inter Partes Reexam Request"},{
"XI.OSUB":"Receipt of Original Inter Partes Reexam Request"},{
"XI.OSUB.C":"Receipt of Corrected Original Inter Partes Request"},{
"XI.RAN.":"Right of Appeal Notice"},{
"XI.RBBO":"Rebuttal Brief- Owner"},{
"XI.RBBR":"Rebuttal Brief- Requester"},{
"XI.RNFRC":"Third Party Requester Comments after Non-final Action"},{
"XI.RPET":"Petition received re:Denial of a Request"},{
"XI.RQRHO":"Patent Owner request for Rehearing"},{
"XI.RQRHR":"Requester Request for Rehearing after Board Decision "},{
"XI.RRHOC":"Pat Owner Comments on Req for Rehearing after Brd Decision (R.41.79(c)) - timely"},{
"XI.RRHRC":"Reqr Comments on Req for Rehearing after Brd Decision (R.41.79(c)) - timely"},{
"XI.RSBO":"Respondent Brief- Owner"},{
"XI.RSBR":"Respondent Brief- Requester"},{
"XI.XDTOC":"Patent Owner Comments on Examiner’s Determination after Brd Decision "},{
"XI.XDTOR":"Pat Ownr Rep to Reqr Cmnts-Exam Deter after Brd Dec’n W/ New Grnd of Rej"},{
"XI.XDTRC":"Reqr Comments on Examiner’s Determ after Board Decision "},{
"XI.XDTRR":"Pat Ownr Rep to Reqr Cmnts-Exam Deter after Brd Dec’n W/ New Grnd of Rej-Timely"},{
"XI.XRRAN":"Expedited Request for a Right of Appeal Notice"},{
"XT/":"Extension of Time"}])

;

			
		// 	.directive('roarEvent', function($http, ROAReventPopup, $rootScope, $compile, $controller, $document, $animate, ROARevent) {
		// 		return {
		// 				restrict: 'E',
		// 				transclude: false,

		// 				templateUrl: '/llp_core/modules/roarmap/directive/roarevent/roarevent.html',
		// 				scope: {

		// 						animation: "=",
		// 						editable: "=",
		// 						hovered: "="

		// 				},
		// 				controller: 'ROAReventController',
		// 				bindToController: true,
		// 				controllerAs: 'roar',
		// 				link: function($scope, $el, attrs, fn) {
								
		// 						if (attrs.id) {
		// 								var id = attrs.id;
		// 								var roarevent = ROARevent(id);
		// 								roarevent.$bindTo($scope, 'roarevent');
		// 						} else {
		// 								$scope.roarevent = $scope.$parent.roarevent;
		// 						}

		// 						$el.on("mouseenter", function() {
		// 								$animate.addClass($el, 'active');

		// 						});
		// 						$el.on("mouseleave", function() {
		// 								$animate.removeClass($el, 'active');

		// 						});

								

		// 				}
		// 		};
		// }).controller('ROAReventController', ['$scope', 'ROARevent', 'ROARevents', '$state', '$stateParams', '$timeout', 'ngDialog', '$ACTIVEROAR','Collection','$templateCache','$compile',
		// 		function($scope, ROARevent, ROARevents, $state, $stateParams, $timeout, ngDialog, $ACTIVEROAR, Collection, $templateCache, $compile) {
		// 				var matterId = $stateParams.matterId;
		// 				var roarevents = ROARevents(matterId);
		// 				var re = this;
		// 				$scope.roarevents = roarevents;
		// 				// var roar = ROARevent($scope.roarevent.$id);
		// 				// roar.$bindTo($scope, 'roarevent');
		// 				re.show = function(eventId) {
		// 				Collection(eventId).$loaded().then(function(event) {
		// 						if (event.document_type !== 'html') {
		// 								var divpanel = angular.element('<div resizable r-directions="[\'bottom\', \'right\',\'top\',\'left\']" r-flex="true"/>').attr('class', 'issuedocpanel stacker');
		// 								//var header = angular.element('<h4 class="splash">' + event.rid + ' - ' + event.name + '<span class="fa fa-close btn btn-xs btn-danger" style="float: right;" onclick="$(this).parent().parent().remove()"></span></h4><h6>' + event.media + '</h6>');
		// 								var header = $templateCache.get("{widgetsPath}/getphd/src/titleTemplate.html");

		// 								var skope = angular.element('<iframe/>').attr('src', event.media);

		// 								angular.element('body').append($compile(divpanel.append(header).append(skope))($scope));
		// 								$('.issuedocpanel').draggable({
		// 										stack: '.stacker',
		// 										handle: 'h4'
		// 								}).resizable();
		// 						} else {
		// 								var divpanel = angular.element('<div resizable r-directions="[\'bottom\', \'right\']" r-flex="true"/>').attr('class', 'issuedocpanel stacker');
		// 								//var header = angular.element('<h4 class="splash">' + event.rid + ' - ' + event.name + '<span class="fa fa-close btn btn-xs btn-danger" style="float: right;" onclick="$(this).parent().parent().remove()"></span></h4><h6>' + event.media + '</h6>');
		// 								var header = $templateCache.get("{widgetsPath}/getphd/src/titleTemplate.html");
		// 								var skope = angular.element('<iframe/>').attr('srcdoc', ('<!DOCTYPE html><html><head><link rel="stylesheet" href="//leo.lexspace.net/app.full.min.css"></head><body><div class="card card-default">' + angular.fromJson(event.content)));
		// 								//var skope = angular.element('<iframe/>').attr('srcdoc', ('<!DOCTYPE html><html><head></head><body><div class="card card-default">' + angular.fromJson(event.content) + '</div></body></html>'));

		// 								angular.element('body').append($compile(divpanel.append(header).append(skope))($scope));
		// 								$('.issuedocpanel').draggable({
		// 										stack: '.stacker',
		// 										handle: 'h4'
		// 								}).resizable();
		// 						}

		// 				});


		// 		};

		// 				$scope.openmodal = function (roarevent) {
		// 						$ACTIVEROAR.roarevent = roarevent;
		// 						console.log('opening');
		// 						ngDialog.open({
		// 								template: '/llp_core/modules/roarmap/partial/xlDialogId/xlDialogId.html',
		// 								controller: 'xlDialogIdCtrl',
		// 								data: roarevent,
		// 								scope: $scope,
		// 								className: 'ngdialog-theme-xl',
		// 								closeByDocument: true,
		// 								closeByEscape: true,
		// 								plain: false,
		// 								showClose: true,
		// 								closeByEscape: true,
		// 								closeByNavigation: false,

		// 								preCloseCallback: false
		// 						});
		// 				};
		// 				$scope.togglelionpad = function(roarevent) {
		// 						if (roarevent.lionpad !== true) {
		// 								roarevent.lionpad = true;
		// 								roarevents.$save(roarevent);
		// 						} else if (roarevent.lionpad === true) {
		// 								roarevent.lionpad = false;
		// 								roarevents.$save(roarevent);
		// 						}

		// 				};
		// 		}
		// ]).directive('roarChip', function($http, ROAReventPopup, $rootScope, $compile, $controller, $document, $animate, ROARevent, ngDialog) {
		// 		return {
		// 				restrict: 'EA',
		// 				templateUrl: '/llp_core/modules/roarmap/directive/roarevent/roarchip.html',
		// 				transclude: false,
		// 				controller: 'ROARChipCtrl',
		// 				controllerAs: 'roar',
		// 				bindToController: true,
		// 				scope: {
		// 						roarevent: "=",
		// 						animation: "=",
		// 						editable: "=",
		// 						hovered: "=",




		// 				},
		// 				link: function($scope, $el, attrs, fn) {
		// 						var id = attrs.id;
		// 						var roarevent = ROARevent(id);
		// 						roarevent.$bindTo($scope, 'roarevent');


		// 						$el.on("mouseenter", function() {
		// 								$animate.addClass($el, 'active');
		// 						});
		// 						$el.on("mouseleave", function() {
		// 								$animate.removeClass($el, 'active');

		// 						});
		// 						$scope.newnoteonroar = function(roarevent) {
		// 								ngDialog.open({
		// 										data: roarevent,
		// 										template: '/llp_core/partial/statusboard/partials/statusboard/partials/newCard.html',
		// 										controller: 'ROAREditCtrl',
		// 										className: 'ngdialog-theme-inline',
		// 										plain: false,
		// 										closeByEscape: true,
		// 										closeByDocument: true,
		// 										appendTo: false
		// 								});
		// 						}
		// 				}
		// 		};
		// })
		// .controller('ROARChipCtrl', function($compile, Collection, $scope, $templateCache) {
		// 		var roar = this;
		// 		roar.show = function(eventId) {
		// 				Collection(eventId).$loaded().then(function(event) {
		// 						if (event.document_type !== 'html') {
		// 								var divpanel = angular.element('<div resizable r-directions="[\'bottom\', \'right\']" r-flex="true"/>').attr('class', 'issuedocpanel stacker');
		// 								//var header = angular.element('<h4 class="splash">' + event.rid + ' - ' + event.name + '<span class="fa fa-close btn btn-xs btn-danger" style="float: right;" onclick="$(this).parent().parent().remove()"></span></h4><h6>' + event.media + '</h6>');
		// 								var header = $templateCache.get("{widgetsPath}/getphd/src/titleTemplate.html");

		// 								var skope = angular.element('<iframe/>').attr('src', event.media);

		// 								angular.element('body').append($compile(divpanel.append(header).append(skope))($scope));
		// 								$('.issuedocpanel').draggable({
		// 										stack: '.stacker',
		// 										handle: 'h4'
		// 								}).resizable();
		// 						} else {
		// 								var divpanel = angular.element('<div resizable r-directions="[\'bottom\', \'right\']" r-flex="true"/>').attr('class', 'issuedocpanel stacker');
		// 								//var header = angular.element('<h4 class="splash">' + event.rid + ' - ' + event.name + '<span class="fa fa-close btn btn-xs btn-danger" style="float: right;" onclick="$(this).parent().parent().remove()"></span></h4><h6>' + event.media + '</h6>');
		// 								var header = $templateCache.get("{widgetsPath}/getphd/src/titleTemplate.html");
		// 								var skope = angular.element('<iframe/>').attr('srcdoc', ('<!DOCTYPE html><html><head><link rel="stylesheet" href="//leo.lexspace.net/app.full.min.css"></head><body><div class="card card-default">' + angular.fromJson(event.content)));
		// 								//var skope = angular.element('<iframe/>').attr('srcdoc', ('<!DOCTYPE html><html><head></head><body><div class="card card-default">' + angular.fromJson(event.content) + '</div></body></html>'));

		// 								angular.element('body').append($compile(divpanel.append(header).append(skope))($scope));
		// 								$('.issuedocpanel').draggable({
		// 										stack: '.stacker',
		// 										handle: 'h4'
		// 								}).resizable();
		// 						}

		// 				});


		// 		};
		// })
		// .directive('roarBadge', function(ROARevent, $animate) {
		// 		return {
		// 				restrict: 'EA',
		// 				templateUrl: '/llp_core/modules/roarmap/directive/roarevent/roarbadge.html',
		// 				transclude: false,
		// 				scope: {
		// 						//roarevent: "=",
		// 						id: "@",
		// 						animation: "=",
		// 						editable: "=",
		// 						hovered: "=",
		// 						success: "&"

		// 				},
		// 				controller: 'ROARbadgeCtrl',
		// 				link: function($scope, $element, attrs, fn) {
		// 						var id = attrs.id;
		// 						var roarevent = ROARevent(id);
		// 						roarevent.$bindTo($scope, 'roarevent');
		// 						$scope.link = roarevent.mediaUrl;
		// 						$element.on("mouseenter", function() {
		// 								$animate.addClass($element, 'active');
		// 						});
		// 						$element.on("mouseleave", function() {
		// 								$animate.removeClass($element, 'active');

		// 						});
		// 				}
		// 		};
		// })
