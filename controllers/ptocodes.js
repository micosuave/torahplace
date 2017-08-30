
const APPDOCCODES = ['136A','371P','3P.PUB.EVDNC','3P.RELEVANCE','3P.TRANS.FOR','3P.TRANS.NPL','A.I.','A.LA','A.NA','A.NE','A.NQ','A.PE','A.QU','ABST','ABST.NE','ACPA','ADS','AF/D','AF/D.OTHER','AMSB','AP.B','A...','AP.PRE.REQ','AP/A','AP/W','APAF','APCH','APOH','APP.TXT.CHEM','APP.TXT.MATH','APP.TXT.PDB','APPENDIX','APPH','APRB','APWH','ARTIFACT','BD.A','BDRR','C.AD','C105','C680','C694','CAFC.AP.BR','CAFC.AP.NTC','CAFC.CAP.BR','CAFC.CAP.NTC','CAFC.DEC.AFF','CAFC.DEC.AIP','CAFC.DEC.DIS','CAFC.DEC.REV','CAFC.DEC.RMD','CAFC.EXT.TM','CAFC.MN.PET','CAFC.MN.PETD','CAFC.MN.PETG','CAFC.MN.PETW','CAFC.MN.PTDS','CAFC.MN.RSP','CAFC.RH.AFF','CAFC.RH.PBR','CAFC.RH.PET','CAFC.RH.PETD','CAFC.RH.PETG','CAFC.RH.RBR','CAFC.RH.REV','CAFC.RH.RSP','CAFC.RPLY.BR','CFILE','CLM','CLM.NE','COCIN','COCX','COMPUTER','CRF.TRNS.REQ','CRFL','CRFS','DC.COMPLAINT','DC.CV.AFF','DC.CV.AIP','DC.CV.COM','DC.CV.DIS','DC.CV.REM','DC.CV.REV','DC.CV.TRN','DC.DEC.AFF','DC.DEC.AIP','DC.DEC.DIS','DC.DEC.REV','DC.DEC.RMD','DC.MPI','DC.MSJ.D','DC.MSJ.G','DC.MSJ.PL','DC.MSJ.PLD','DC.MSJ.PLG','DC.MTI','DCPA','DEPOSIT','DERIV.PET','DIST','DIST.E.FILE','DRW','DRW.NE','DRW.NONBW','E.RECORD.COR','EABN','EARLYPUB','ELC.','FAI.A..','FAI.REQ','FAI.REQ.INTV','FAI.REQ.WD','FOR','FRTRANS','FRPR','IACN','IACS','IDS','IFEE','IRFND','L_RIN','LET.','M852','M856','M865','N/AP','N427','NDRW','NOCODE','NPL','NTC.CONCPROC','O501','P.134','P.13TER.STMT','P.202.IN','P.210.IN','P.217.IN','P.224.IN','P.225.IN','P.234.IN','P.237.IN','P.306','P.307','P.313','P.315','P.316','P.317','P.318','P.319','P.320','P.321','P.323','P.336','P.337','P.339','P.344','P.345','P.350','P.353','P.368','P.369','P.370','P.371','P.374','P.399','P.409.IN','P.92BIS','P.APP.INCORP','P.ART19.CLM','P.ART19.STMT','P.CONF.DES','P.CORP.RES','P.EXP.MAIL','P.FEE.PYMT','P.FORISA.LET','P.FOSC.FEE','P.IB.LET','P.INFO.PC','P.LATEPUB.PC','P.LET','P.N.101.ANX','P.N.101.CONV','P.N.101.FOSC','P.N.101.SAFE','P.N.NO101','P.PAMPHLET','P.R20.6.CONF','P.REQ.RECON','P.REQ.RECT','P.RESP.206','P.RESP.225','P.RESTORE.PC','P.RULE26BIS','P.SAFE.LOG','P.SELECT.ISA','P.SIG.STMT','P.SUB.SH.101','P.SUB.SH.DRW','P.SUB.SHEET','P.TR','P.TRAN.CERT','P.TRAN.COPY','P.URGENT','P.WD.APPL','P.WD.ATTY','P.WD.DES','P.WD.PRIORIT','P.WD.US.DES','P2.401','P2.401.ANX','P2.92BIS','P2.ART34.A','P2.ART34.CLM','P2.FEE.PYMT','P2.IB.LET','P2.LET','P2.REQ.RECON','P2.REQ.RECT','P2.RESP.404','P2.RESP.405','P2.RESP.408','P2.WD.ATTY','P2.WD.DES','P2.WD.PRRITY','PA..','PA.LIST','PC/I','PD.REQ.RETR','PD.TO.AUTH','PEER.CONSENT','PEER.IDS','PEER.SB423','PEFR','PEFRREISS','PEFRSEQ','PET.','PET.41.3','PET.AUTO','PET.GREEN','PET.LAWSCHOL','PET.OP','PET.OP.AGE','PET.OP.SPAC','PET.OPLA','PET.P2.PCT','PET.PCT','PET.POA.WDRW','PET.PTA','PET.PTA.RCAL','PET.RELIEF','PET.ROUTE','PET.SPRE','PET.SPRE.ACX','PET.STATUS','PETWDISS','PG.NONPUB.RQ','PGA9','PGEA','PGPDRAWINGS','PGREF','PPH.PCT.652','PPH.PET.652','PREX.SRCH','PREX.SUP.DOC','PRIA','PRIB','PROTRANS','PROTEST','QPIDS.REQ','R129','R251.RES','R3.73B','R48.REQ','RCE.NE','RCEX','RCONVP','REF.OTHER','REIS.CONSENT','REIS.DECL','REIS.SUPDECL','REM','REQ.MIS.PART','RESC','RETMAIL','RFN.REQ','ROCKET','RXAAF.','RXAF/DR','RXAP/W','RXAPBI','RXAPRR','RXC.ADR','RXC/M.','RXC/SR','RXCAFC','RXCTAP','RXFEE','RXIDS.R','RXLET.','RXNOCA','RXNOCP','RXOPPPET','RXOR.T','RXOR.U','RXOSUB','RXOSUB.C','RXOSUB.R','RXPA..R','RXPATENT','RXPET.','RXRPET','RXRQ/T','RXRQ4FP','RXRQMP','RXRQS.','RXRR.T','RXRR.U','RXTRLTR','SA..','SAFR','SAPB','SC.AMICUS.BR','SC.CERT.PET','SC.CERT.PETD','SC.CERT.PETG','SC.CERT.RSP','SC.DEC','SC.MERTIT.BR','SE.COURT.DOC','SE.DECL.AFF','SE.ITEM.LIST','SE.ITEM.MISC','SE.ITEM.PAT','SE.OFF.PROC','SE.PATENT','SE.PET','SE.REQ.COR','SE.REQ.ORIG','SE.REQ.ORIG','SE.SALE.RCPT','SE.TRANS','SE.TRNSCRPT','SEQ.TXT','SEQLIST','SIR.','SOL.NTC.SUIT','SPEC','SPEC.NE','SPECNO','SREXR141','STAT.DISCLMR','STATUS.LET','T501','T844','TABLE','TERM.AGC.180','TERM.AGC.LET','TERM.AGC.RRP','TERM.ELC.RES','TERM.INF.RES','TERM.ITM.G','TERM.PTO.C','TERM.PTO.DIS','TERM.PTO.ELC','TERM.PTO.IE','TERM.PTO.NFD','TERM.RCN.REQ','TERM.REQ','TERM.REQ.ITM','TERM.WAIVE','TERM.WD','TR.PROV','TR.RESP.ACX','TRACK1.REQ','TRAN.LET','TRIAL.PET.RQ','TRIWAY.IN','TRNA','TRREISS','VOL.TABLE','XI.A…','XI.ACPOC','XI.ACPRC','XI.AP.BO','XI.AP.BR','XI.AP/W','XI.APCTO','XI.APCTR','XI.APDOC','XI.APDRC','XI.APOHO','XI.APOHR','XI.N/APD','XI.N/APR','XI.NCAPO','XI.NCAPR','XI.OSUB','XI.OSUB.C','XI.RBBO','XI.RBBR','XI.RNFRC','XI.RPET','XI.RQRHO','XI.RQRHR','XI.RRHOC','XI.RRHRC','XI.RSBO','XI.RSBR','XI.XDTOC','XI.XDTOR','XI.XDTRC','XI.XDTRR','XI.XRRAN','XT/','1449','OATH','WFEE'];

const PTODOCCODES = ['892','371.CNV.UTIL','371.FEE.M912','371.FEE.M923','371.NT.C.APN','371.RES.DEF','371.RQ.M922','ABN','ABN.EXPRESS','AISP','ANE.I','AP_DK_M','AP.PRE.DEC','AP.PRE.DEF','APAR','APBD','APD1','APD2','APD3','APDA','APDN','APDP','APDR','APDS','APDT','APE2','APEA','APLR','APLW','APND','APNH','APNR','APP.FILE.REC','APPD','APPG','APPR','APRD','ASIR','BIB','C105-I','C105D','CAFC.SOL.BR','CDEN','COCOUT','CPA-AMD','CRF.TRNS.IMP','CRFD','CRFE','CRFR','CTAV','CTEQ','CTFR','CTMS','CTNF','CTRS','DC.CV.ANS','DC.MSJ','DC.SOL.ANS','DED.','DERIV.D','DERIV.DIS','DERIV.FWD','DERIV.G','DISQ','DISQ.E.FILE','DR..','DRQS','DRRI','DSIR','EBCC.AD','EX.A','EXPD.L.DEC.D','EXPD.L.DEC.G','FAI.RQ.NNCPL','FREF','FWCLM','ICPA','IIFW','IMIS','INT.DEC.ADV','INT.DEC.FAV','INT.DECL','INT.MISC','INT.REDECL','ISSUE.WD.NTC','L_ROUT','L.SP','LR501','LRO501','LRT501','M327','M903','M905','MCPA','MISCOIPE','N271','N416','N417','N459','N570','N572','N578','NAPI','NFDR','NFEE','NRES','NT.AE.A.NONC','NT.CR.APP.PA','NT.INC.REPLY','NT.INCPL.APP','NT.WD.NONCPL','NTC.A.NONCPL','NTC.MISS.PRT','NTC.OMIT.APP','NTC.RCE.DEF','NTRM','NUNT','OA.APPENDIX','OA.EMAIL','OA.FAI.OPT.O','OA.POSTCARD','P.102','P.102B','P.103','P.104','P.105','P.106','P.107','P.108','P.109','P.110','P.111','P.112','P.113','P.114','P.115','P.117','P.118','P.119','P.120','P.123','P.124','P.126','P.127','P.132','P.133','P.135','P.136','P.138','P.143','P.145','P.146','P.147','P.151','P.152','P.153','P.154','P.155','P.156','P.158','P.159','P.202.OUT','P.203','P.205','P.206','P.209','P.210.OUT','P.212','P.216','P.217.OUT','P.220','P.224.OUT','P.225.OUT','P.234.OUT','P.237.OUT','P.299','P.372','P2.402','P2.403','P2.403B','P2.404','P2.405','P2.407','P2.408','P2.409','P2.411','P2.412','P2.416','P2.420','P2.424','P2.424N','P2.425','P2.428','P2.430','P2.431','P2.436','P2.440','P2.441','P2.499','P2.FILECOPY','P2.MISC','PATENT.GRANT','PD.AUTH.NTC','PD.FILED.E','PD.PRE.NTC','PD.RETR.FAIL','PEER.CNS.RSP','PEER.IDS.ACK','PEFN','PET.DEC.RTE','PGA9.DEC','PPH.DECISION','Q.DEC.REOP','R251.NTC','RBNE','REIS.REVFORM','RFND','RXADV.','RXAPDFA','RXAPDRN','RXAPHC','RXBDAF','RXBDAP','RXBDRR','RXBDRV','RXCERT','RXDCDS','RXDCLS','RXDCMP','RXDOR','RXDSMP','RXEPQ.','RXEXTD','RXEXTG','RXFILJKT','RXFR..','RXINCR','RXL/RD','RXLITSR','RXMISC','RXMRRD','RXMRRI','RXMRRT','RXMRRX','RXMRXD','RXNDEFCT','RXNFDACC','RXNINA','RXNIRC','RXNREQ.U','RXNREQAU','RXNREQFD','RXNRES','RXNRQREC','RXOGNOTC','RXR.NF','RXREXD','RXREXO','RXTD.NE','RXTD.OK','RXTERM','RXTTLRPT','RXVACATE','RXWDNIRC','SADV','SE.ABEYANCE','SE.CRT.SNQ.N','SE.CRT.SNQ.Y','SE.DEC.MISC','SE.EXPUNGE','SE.FD.VACATE','SE.FILE.DATE','SE.POA.D','SE.REASN.SNQ','SE.REQ.NCOMP','SE.TERMINATE','SEPQ','SEQ.REQ.DISC','SFR.','SOL.DC.NFD','SOL.NTC.ARB','SR..','SRES','SRFW','SRNT','TERM.PTO.LT1','TERM.PTO.LT2','TERM.RQR.INF','TRACK1.DENY','TRACK1.GRANT','TRDD','TRIAL.CERT','TRIAL.REQ.D','TRIAL.REQ.G','TRIAL.REQ.GP','TRIAL.RQ.DIS','TRIAL.TRMFWD','TRIWAY.OUT','VACATE.PROC','W/AC','WCLM','WSIR','XI.ACP','XI.AP.DA','XI.AP.DP','XI.AP.DR','XI.APDFA','XI.APDN','XI.APDRN','XI.APXDT','XI.NREQI','XI.RAN.'];

const INTVDOCCODES = ['EXIN','INTRVIEW.APP','INTV.SUM.APP','INTV.SUM.EX','OA.FAI','OA.FAI.PRELM'];

const NOADOCCODES = ['ISSUE.NTF','NOA','NTC.PUB','NTC.PUB.DATE'];

const PETDOCCODES = ['CAFC.EXT.TMD','CAFC.EXT.TMG','CAFC.EXT.TMW','PET.DEC.AUTO','PET.DEC.COCI','PET.DEC.OIPE','PET.DEC.PUBS','PET.DEC.RTE','PET.DEC.TC','PETDEC','PGEA.D','PGEA.G','RXPETD','RXPETG','RXPTDE','RXPTDI','RXPTGP','RXPTGR','SE.PET.D','SE.PET.DIS','SE.PET.G','SE.PET.GIP'];

const OWNERSHIPDOCS = ['R3.73B','REIS.CONSENT','REIS.DECL','REIS.SUPDECL','OATH'];

const ARTDOCS = ['1449','FOR','892','SRFW','SRNT','P.210.OUT','P.220','P.237.OUT','P2.409','PD.FILED.E','3P.RELEVANCE','IDS','NPL','P.202.IN','P.210.IN','P.237.IN','P.374','P.409.IN','P.FORISA.LET','QPIDS.REQ','RXIDS.R'];

const CLAIMDOCS = ['CLM'];

const MERITSDOCS = ['A...','EXIN', 'INTRVIEW.APP', 'INTV.SUM.APP', 'INTV.SUM.EX', 'OA.FAI', 'OA.FAI.PRELM', 'ISSUE.NTF', 'NOA', '892', 'ABN', 'AF/D','AF/D.OTHER', 'ANE.I', 'AP.PRE.DEC', 'AP.PRE.DEF', 'APAR', 'APBD', 'APD1', 'APD2', 'APD3', 'APDA', 'APDN', 'APDP', 'APDR', 'APDS', 'APDT', 'APE2', 'APEA', 'APLR', 'APLW', 'APND', 'APNH', 'APNR', 'APPD', 'APPG', 'APPR', 'APRD', 'CAFC.SOL.BR', 'CDEN', '371P', 'COCOUT', 'CPA-AMD', 'CTAV', 'CTEQ', 'CTFR', 'CTMS', 'CTNF', 'CTRS', 'DC.CV.ANS', 'DC.MSJ', 'DC.SOL.ANS', 'DISQ', 'DISQ.E.FILE', 'DR..', 'EX.A', 'FWCLM', 'INT.DEC.ADV', 'INT.DEC.FAV', 'INT.DECL', 'INT.MISC', 'INT.REDECL', 'ISSUE.WD.NTC', 'N271', 'N416', 'NAPI', 'NRES', 'NT.AE.A.NONC', 'NT.CR.APP.PA', 'NT.INC.REPLY', 'NT.INCPL.APP', 'NT.WD.NONCPL', 'NTC.A.NONCPL', 'OA.APPENDIX', 'OA.FAI.OPT.O', 'PPH.DECISION', 'Q.DEC.REOP', 'RXADV.', 'RXAPDFA', 'RXAPDRN', 'RXAPHC', 'RXBDAF', 'RXBDAP', 'RXBDRR', 'RXBDRV', 'RXCERT', 'RXDCDS', 'RXDCLS', 'RXDCMP', 'RXDOR', 'RXDSMP', 'RXEPQ.', 'RXEXTD', 'RXEXTG', 'RXFILJKT', 'RXFR..', 'RXINCR', 'RXL/RD', 'RXLITSR', 'RXMISC', 'RXMRRD', 'RXMRRI', 'RXMRRT', 'RXMRRX', 'RXMRXD', 'RXNDEFCT', 'RXNFDACC', 'RXNINA', 'RXNIRC', 'RXNREQ.U', 'RXNREQAU', 'RXNREQFD', 'RXNRES', 'RXNRQREC', 'RXOGNOTC', 'RXR.NF', 'RXREXD', 'RXREXO', 'RXTD.NE', 'RXTD.OK', 'RXTERM', 'RXVACATE', 'RXWDNIRC', 'SADV', 'SE.ABEYANCE', 'SE.CRT.SNQ.N', 'SE.CRT.SNQ.Y', 'SE.DEC.MISC', 'SE.EXPUNGE', 'SE.FD.VACATE', 'SE.FILE.DATE', 'SE.POA.D', 'SE.REASN.SNQ', 'SE.REQ.NCOMP', 'SE.TERMINATE', 'SEPQ', 'SFR.', 'SOL.DC.NFD', 'SOL.NTC.ARB', 'SR..', 'SRES', 'TRIAL.REQ.D', 'TRIAL.REQ.G', 'TRIAL.REQ.GP', 'TRIAL.RQ.DIS', 'TRIAL.TRMFWD', 'VACATE.PROC', 'W/AC', 'XI.ACP', 'XI.AP.DA', 'XI.AP.DP', 'XI.AP.DR', 'XI.APDFA', 'XI.APDN', 'XI.APDRN', 'XI.APXDT', 'XI.NREQI', 'A.I.', 'A.LA', 'A.NA', 'A.NE', 'A.NQ', 'A.PE', 'A.QU', 'ABST', 'ABST.NE', 'ACPA', 'AF/D', 'AMSB', 'AP.B', 'AP.PRE.REQ', 'AP/W', 'APAF', 'APCH', 'APOH', 'APPENDIX', 'APPH', 'APRB', 'APWH', 'BD.A', 'BDRR', 'C105', 'C680', 'C694', 'CAFC.AP.BR', 'CAFC.AP.NTC', 'CAFC.CAP.BR', 'CAFC.CAP.NTC', 'CAFC.DEC.AFF', 'CAFC.DEC.AIP', 'CAFC.DEC.DIS', 'CAFC.DEC.REV', 'CAFC.DEC.RMD', 'CAFC.EXT.TM', 'CAFC.MN.PET', 'CAFC.MN.PETD', 'CAFC.MN.PETG', 'CAFC.MN.PETW', 'CAFC.MN.PTDS', 'CAFC.MN.RSP', 'CAFC.RH.AFF', 'CAFC.RH.PBR', 'CAFC.RH.PET', 'CAFC.RH.PETD', 'CAFC.RH.PETG', 'CAFC.RH.RBR', 'CAFC.RH.REV', 'CAFC.RH.RSP', 'CAFC.RPLY.BR', 'CLM', 'CLM.NE', 'COCIN', 'COCX', 'DC.COMPLAINT', 'DC.CV.AFF', 'DC.CV.AIP', 'DC.CV.COM', 'DC.CV.DIS', 'DC.CV.REM', 'DC.CV.REV', 'DC.CV.TRN', 'DC.DEC.AFF', 'DC.DEC.AIP', 'DC.DEC.DIS', 'DC.DEC.REV', 'DC.DEC.RMD', 'DC.MPI', 'DC.MSJ.D', 'DC.MSJ.G', 'DC.MSJ.PL', 'DC.MSJ.PLD', 'DC.MSJ.PLG', 'DC.MTI', 'DCPA', 'DEPOSIT', 'DERIV.PET', 'DIST', 'DIST.E.FILE', 'EABN', 'ELC.', 'FAI.A..', 'FAI.REQ', 'FAI.REQ.INTV', 'FAI.REQ.WD', 'FRTRANS', 'FRPR', 'IACN', 'IACS', 'INTRVIEW.APP', 'LET.', 'M856', 'M865', 'N/AP', 'N427', 'NTC.CONCPROC', 'O501', 'P.134', 'P.316', 'P.317', 'P.318', 'P.321', 'P.323', 'P.336', 'P.337', 'P.339', 'P.344', 'P.353', 'P.APP.INCORP', 'P.ART19.CLM', 'P.ART19.STMT', 'P.R20.6.CONF', 'P.REQ.RECON', 'P.REQ.RECT', 'P.RESP.206', 'P.RESP.225', 'P.RESTORE.PC', 'P.RULE26BIS', 'P.TR', 'P.TRAN.CERT', 'P.TRAN.COPY', 'P.URGENT', 'P2.ART34.CLM', 'P2.REQ.RECON', 'P2.REQ.RECT', 'P2.RESP.404', 'P2.RESP.405', 'P2.RESP.408', 'P2.WD.ATTY', 'P2.WD.DES', 'P2.WD.PRRITY', 'PD.REQ.RETR', 'PD.TO.AUTH', 'PEER.CONSENT', 'PEER.IDS', 'PEER.SB423', 'PET.POA.WDRW', 'PET.PTA', 'PET.PTA.RCAL', 'PET.SPRE', 'PET.SPRE.ACX', 'PPH.PCT.652', 'PPH.PET.652', 'PREX.SRCH', 'PRIA', 'PRIB', 'PROTRANS', 'PROTEST', 'R129', 'R251.RES', 'R48.REQ', 'RCE.NE', 'RCEX', 'RCONVP', 'REM', 'RXAAF.', 'RXAF/DR', 'RXAP/W', 'RXAPBI', 'RXAPRR', 'RXC/M.', 'RXC/SR', 'RXCAFC', 'RXCTAP', 'RXLET.', 'RXNOCA', 'RXNOCP', 'RXOPPPET', 'RXOR.T', 'RXOR.U', 'RXOSUB', 'RXOSUB.C', 'RXOSUB.R', 'RXPA..R', 'RXPATENT', 'RXPET.', 'RXRPET', 'RXRQ4FP', 'RXRQMP', 'RXRQS.', 'RXRR.T', 'RXRR.U', 'RXTRLTR', 'SA..', 'SAFR', 'SAPB', 'SC.AMICUS.BR', 'SC.CERT.PET', 'SC.CERT.PETD', 'SC.CERT.PETG', 'SC.CERT.RSP', 'SC.DEC', 'SC.MERTIT.BR', 'SE.COURT.DOC', 'SE.DECL.AFF', 'SE.ITEM.LIST', 'SE.ITEM.MISC', 'SE.ITEM.PAT', 'SE.OFF.PROC', 'SE.PATENT', 'SE.PET', 'SE.TRNSCRPT', 'SPEC', 'SPEC.NE', 'SREXR141', 'STAT.DISCLMR', 'STATUS.LET', 'T501', 'T844', 'TABLE', 'TERM.AGC.180', 'TERM.AGC.LET', 'TERM.AGC.RRP', 'TERM.ELC.RES', 'TERM.ITM.G', 'TERM.PTO.C', 'TERM.PTO.DIS', 'TERM.PTO.ELC', 'TERM.PTO.IE', 'TERM.PTO.NFD', 'TERM.RCN.REQ', 'TERM.REQ', 'TERM.REQ.ITM', 'TERM.WAIVE', 'TERM.WD', 'TR.RESP.ACX', 'TRACK1.REQ', 'TRIAL.PET.RQ', 'TRNA', 'TRREISS', 'XI.ACPOC', 'XI.ACPRC', 'XI.AP.BO', 'XI.AP.BR', 'XI.AP/W', 'XI.APCTO', 'XI.APCTR', 'XI.APDOC', 'XI.APDRC', 'XI.APOHO', 'XI.APOHR', 'XI.N/APD', 'XI.N/APR', 'XI.NCAPO', 'XI.NCAPR', 'XI.RBBO', 'XI.RBBR', 'XI.RNFRC', 'XI.RPET', 'XI.RQRHO', 'XI.RQRHR', 'XI.RRHOC', 'XI.RRHRC', 'XI.RSBO', 'XI.RSBR', 'XI.XDTOC', 'XI.XDTOR', 'XI.XDTRC', 'XI.XDTRR', 'XI.XRRAN'];


const DOCNAMES = [{"892":"List of references cited by examiner"},{
"1449":"List of References cited by applicant and considered by examiner"},{
"136A":"Authorization for Extension of Time all replies"},{
"371.CNV.UTIL":"Notice of 371 Conversion to Regular"},{
"371.FEE.M912":"371 Missing Basic Fees/Copy of IA - Form M912"},{
"371.FEE.M923":"371 Supplemental Fees Missing - Form M923"},{
"371.NT.C.APN":"Notice of 371 Canceled Application Number"},{
"371.RES.DEF":"371 Defective Response - Form M916"},{
"371.RQ.M922":"371 Requirements for Sequence Disclosure Notice Form M922"},{
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
"CAFC.AP.BR":"Appellant’s Brief  to CAFC"},{
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
"DC.DEC.DIS":"Decision in APA  Action – Dismissed by Court"},{
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
"IACS":"Amendment Copy Claims/Response to  Suggested Claims"},{
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
"P.104":"RO/104 - Notification that the Purported IA -  is not and will not be Treated as an IA"},{
"P.105":"RO/105 - Notification of the IA Number and of the International Filing Date"},{
"P.106":"RO/106 with Annex A, B and/or C - Invitation to Correct Defects in the IA"},{
"P.107":"RO/107 Notification of Non-inclusion of Drawings with the IA"},{
"P.108":"RO/108 - Invitation to Request Rectification"},{
"P.109":"RO/109 - Notification of Decision Concerning Request for Rectification"},{
"P.110":"RO/110 with Annex   - Invitation to Correct Priority Claim"},{
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
"P.N.101.CONV":"RO/101 - Request form for new IA - Conventional  "},{
"P.N.101.FOSC":"Foreign Origin Search copies - IA"},{
"P.N.101.SAFE":"RO/101 - Request form for new IA- PCT EASY Format "},{
"P.N.NO101":"New International Application from Applicant  - Missing Request form"},{
"P.PAMPHLET":"WIPO Publication – Non-English version"},{
"P.R20.6.CONF":"Confirmation of incorporation by reference"},{
"P.REQ.RECON":"Request for Reconsideration - IA"},{
"P.REQ.RECT":"Request for rectification - IA"},{
"P.RESP.206":"Response to form PCT/ISA/206  Unity of Invention"},{
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
"PD.AUTH.NTC":"Notice that authorization for participating  IP Offices to access US application was improper."},{
"PD.FILED.E":"Priority Documents electronically retrieved by USPTO from a participating IP Office"},{
"PD.PRE.NTC":"A formal notice indicating request for Official Priority Documents was unacceptable"},{
"PD.REQ.RETR":"Request for USPTO to retrieve priority docs."},{
"PD.RETR.FAIL":"Document indicating Retrieval Request was unsuccessful"},{
"PD.TO.AUTH ":"Authorization to access Appl. by Trilateral Office"},{
"PEER.CNS.RSP":"Response To Applicant Consent - Peer to Patent  "},{
"PEER.CONSENT":"Request for Peer Review     "},{
"PEER.IDS":"Third-Party Submission –Peer to Patent  "},{
"PEER.IDS.ACK":"Acknowledgement of Third-Party Submission –Peer to Patent  "},{
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
"PET.OP":"Petition for review  by the Office of Petitions"},{
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
"PET.STATUS  ":"Petition for review/ processing depending on status"},{
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
"R251.RES":"Response providing copy of record  for reconstruction"},{
"R3.73B":"Assignee  showing of ownership per 37 CFR 3.73(b)"},{
"R48.REQ":"Request under Rule 48 correcting inventorship."},{
"RBNE":"Reply Brief Noted – Patent Board"},{
"RCE.NE":"RCE not entered"},{
"RCEX":"Request for Continued Examination (RCE)"},{
"RCONVP":"Petition to Convert Regular to Provisional"},{
"REF.OTHER":"Other Reference – Patent or Application Document"},{
"REIS.CONSENT":"Consent of Assignee  accompanying the declaration"},{
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
"RXAF/DR":"Reexam  - Affidavit/Decl/Exhibit Filed by 3rd Party"},{
"RXAP/W":"Withdrawal of Appeal"},{
"RXAPBI":"Reexam Defective Brief Filed"},{
"RXAPDFA":"Patent Board decision on rehearing - Decision is final and appealable"},{
"RXAPDRN":"Patent Board decision on rehearing - Decision is new decision"},{
"RXAPHC":"Reexam Appeal - Oral Hearing Conducted at Patent Board"},{
"RXAPRR":"Request for rehearing to Patent Board"},{
"RXBDAF":"Patent Board Decision - Affirmance"},{
"RXBDAP":"Patent Board Decision - Affirmance-in-part"},{
"RXBDRR  ":"Patent Board Remanded Reexam to Examiner"},{
"RXBDRV":"Patent Board Decision -  Reversal"},{
"RXC.ADR":"Reexam - Correspondence Address Change for 3rd Party"},{
"RXC/M.":"Reexam Certificate of Mailing"},{
"RXC/SR  ":"Reexam Certificate of Service"},{
"RXCAFC  ":"Reexam Court of Appeals Decision Rendered"},{
"RXCERT  ":"Reexamination Certificate Issued"},{
"RXCTAP  ":"Reexam Appeal Patent Board Decision to Court of Appeals"},{
"RXDCDS":"Decision Denying Stay/Suspension of a Reexam Proceeding"},{
"RXDCLS":"Decision Lifting the Stay/Suspension of Reexam Proceedings"},{
"RXDCMP  ":"Decision Merging Proceedings"},{
"RXDOR  ":"Director Initiated Order for Reexam in Preprocessing"},{
"RXDSMP  ":"Decision Dissolving Merged Proceedings in Reexam"},{
"RXEPQ.":"Reexam - Ex Parte Quayle Action "},{
"RXEXTD  ":"Extension of Time Period for Response Denied"},{
"RXEXTG  ":"Reexam Extension of Time Period for Response Granted"},{
"RXFEE":"Reexam Fee Payment Only Filed"},{
"RXFILJKT":"Paper Reexam File Jacket is scanned"},{
"RXFR..":"Reexam - Final Rejection "},{
"RXIDS.R":"Reexam - Info Disclosure Statement Filed by 3rd Party"},{
"RXINCR":"Notice of Incomplete Ex Parte Reexam Request"},{
"RXL/RD":"Letter Acknowledging That an Improper Paper in a Reexam Proceeding Has Been Returned/Destroyed"},{
"RXLET.":"Reexam Miscellaneous Incoming Letter"},{
"RXLITSR":"Reexam Litigation Search Conducted"},{
"RXMISC":"Reexam - Miscellaneous Action "},{
"RXMRRD":"Decision Dissolving the Merged Reexam and Reissue Proceedings"},{
"RXMRRI":"Decision Merging Reexam and Reissue Proceedings -- Reissue Application"},{
"RXMRRT":"Merged Reexam and Reissue Proceedings Concluded by Mailing Notice of Allowance in the Reissue Appl."},{
"RXMRRX":"Decision Merging Reexam and Reissue Proceedings -- Reexam Request"},{
"RXMRXD":"Decision Denying Merger of Reexam Proceedings"},{
"RXNDEFCT":"Notification of Defective Paper in a Reexam"},{
"RXNFDACC":"Reexam - Notice of filing date accorded"},{
"RXNINA":"Notification of Informal or Nonresponsive Amendment"},{
"RXNIRC":"Notice of Intent to Issue a Reexam Certificate"},{
"RXNOCA":"Reexam Notice of Court Action"},{
"RXNOCP":"Notice of concurrent proceeding(s)"},{
"RXNREQ.U":"Notice of Untimely Reexam Request "},{
"RXNREQAU":"Notice of assignment of reexamination request"},{
"RXNREQFD":"Notice of reexamination request filing date"},{
"RXNRES":"Letter Restarting Period Of Response in a Reexam Proceeding - e.g., Letter re References, remail"},{
"RXNRQREC":"Notice of reexamination request received"},{
"RXOGNOTC":"Notice of Reexam Published in Official Gazette"},{
"RXOPPPET":"Reexam - Opposition filed in response to petition"},{
"RXOR.T":"Reexam Timely Patent Owner's Stmnt in Resp to Order"},{
"RXOR.U":"Reexam Untimely Patent Owner's Stmnt in Resp to Order"},{
"RXOSUB":"Receipt of Original Ex Parte Reexam Request"},{
"RXOSUB.C":"Receipt of Corrected Original Ex Parte Request"},{
"RXOSUB.R":"Receipt of Orig. Ex Parte Request by Third Party "},{
"RXPA..R":"Reexam Change in Pwr Atty for Third Party Requester"},{
"RXPATENT":"Copy of patent for which reexamination is requested"},{
"RXPET.":"Receipt of Petition in a Reexam"},{
"RXPETD":"Petition Decision on Request for Reconsideration Denying Reexamination"},{
"RXPETG":"Petition Decision on Request for Reconsideration Ordering Reexamination"},{
"RXPTDE":"Reexam Petition Decision - Denied"},{
"RXPTDI":"Reexam Petition Decision - Dismissed"},{
"RXPTGP":"Reexam Petition Decision - Granted-in-part"},{
"RXPTGR":"Reexam Petition Decision - Granted"},{
"RXR.NF":"Reexam - Non-Final Action "},{
"RXREXD":"Determination -- Reexam Denied"},{
"RXREXO":"Determination -- Reexam Ordered"},{
"RXRPET":"Petition for Review of Reexam Denial"},{
"RXRQ/T":"Reexam Request for Extension of Time"},{
"RXRQ4FP":"Reexam Req for For Priority (Priority Papers May Be Incl)"},{
"RXRQMP":"Request to Merge Reexam Proceedings"},{
"RXRQS.":"Reexam Request to Lift Suspension of Prosecution"},{
"RXRR.T":"Reexam Timely Requester's Reply to an Owner's Stmnt"},{
"RXRR.U":"Reexam Untimely Reqr Reply to Owner Stmnt"},{
"RXTD.NE":"Reexam Notification of Terminal Disclaimer - Not Accepted"},{
"RXTD.OK":"Reexam Notification of Terminal Disclaimer - Accepted"},{
"RXTERM":"Reexamination Terminated"},{
"RXTRLTR":"Trans Letter filing of a response in a reexam"},{
"RXTTLRPT":"Title Report"},{
"RXVACATE":"Decision Vacating a Determination Ordering a Reexamination"},{
"RXWDNIRC":"Withdrawal of Notice of Intent to Issue Reexamination Certificate"},{
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
"TR.RESP.ACX":"Accelerated Exam - Transmittal  amendment/reply"},{
"TRACK1.DENY":"TrackOne Request Denied"},{
"TRACK1.GRANT":"TrackOne Request Granted"},{
"TRACK1.REQ":"TrackOne Request"},{
"TRAN.LET":"Transmittal Letter"},{
"TRDD":"Transfer Inquiry"},{
"TRIAL.CERT":"Trial Review Certificate Issued"},{
"TRIAL.PET.RQ":"Petition Requesting Trial"},{
"TRIAL.REQ.D":"Request for Trial Denied"},{
"TRIAL.REQ.G":"Request for Trial Granted"},{
"TRIAL.REQ.GP":"Request for Trial  Granted in Part"},{
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
"XI.APOHR":"Oral Hearing Request-  Third Party Requester"},{
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
"XT-":"Extension of Time"},{
"XT/":"Extension of Time"}];

const USPTOCODES = [
{
value:"892",label:"List of references cited by examiner"},
{
value:"1449",label:"List of References cited by applicant and considered by examiner"},
{
value:"136A",label:"Authorization for Extension of Time all replies"},
{
value:"371.CNV.UTIL",label:"Notice of 371 Conversion to Regular"},
{
value:"371.FEE.M912",label:"371 Missing Basic Fees/Copy of IA - Form M912"},
{
value:"371.FEE.M923",label:"371 Supplemental Fees Missing - Form M923"},
{
value:"371.NT.C.APN",label:"Notice of 371 Canceled Application Number"},
{
value:"371.RES.DEF",label:"371 Defective Response - Form M916"},
{
value:"371.RQ.M922",label:"371 Requirements for Sequence Disclosure Notice Form M922"},
{
value:"371P",label:"Documents submitted with 371 Applications"},
{
value:"3P.PUB.EVDNC",label:"Evidence of Publication"},
{
value:"3P.RELEVANCE",label:"Concise Description of Relevance"},
{
value:"3P.TRANS.FOR",label:"Translation Foreign"},
{
value:"3P.TRANS.NPL",label:"Translation NPL"},
{
value:"A...",label:"Amendment/Req Reconsideration-After Non-Final Reject"},
{
value:"A.I.",label:"Informal or Non-Responsive Amendment"},
{
value:"A.LA",label:"Untimely (Late) Amendment Filed"},
{
value:"A.NA",label:"Amendment after Notice of Allowance (Rule 312)"},
{
value:"A.NE",label:"Amendment After Final"},
{
value:"A.NQ",label:"Amendment Crossed in Mail"},
{
value:"A.PE",label:"Preliminary Amendment"},
{
value:"A.QU",label:"Response after Ex Parte Quayle Action"},
{
value:"ABN",label:"Abandonment"},
{
value:"ABN.EXPRESS",label:"Internal document noting that an Express Abandonment request has been processed"},
{
value:"ABST",label:"Abstract"},
{
value:"ABST.NE",label:"Abstract-Amendment Not Entered"},
{
value:"ACPA",label:"Continued Prosecution Application - Continuation (ACPA)"},
{
value:"ADS",label:"Application Data Sheet"},
{
value:"AF/D",label:"Rule 130,131 or 132 Affidavits"},
{
value:"AISP",label:"Letter of Suspension - Applicant Initiated"},
{
value:"AMSB",label:"Amendment Submitted/Entered with Filing of CPA/RCE"},
{
value:"ANE.I",label:"Amendment After Final or under 37CFR 1.312,initialed by the examiner"},
{
value:"AP.B",label:"Appeal Brief Filed"},
{
value:"AP.PRE.DEC",label:"Pre-Brief Appeal Conference decision"},
{
value:"AP.PRE.DEF",label:"Notice – Defective Pre-Brief Appeal"},
{
value:"AP.PRE.REQ",label:"Pre-Brief Conference request"},
{
value:"AP/A",label:"AP/A"},
{
value:"AP/W",label:"Request to Withdraw Appeal by Appellant"},
{
value:"AP_DK_M",label:"Appeal Docketing Notice"},
{
value:"APAF",label:"Affidavit/Dec/Exhibit after Notice of Appeal"},
{
value:"APAR",label:"Administrative Remand to Examiner"},
{
value:"APBD",label:"Notice - Defective Appeal Brief"},
{
value:"APCH",label:"Confirmation of Hearing by Appellant"},
{
value:"APD1",label:"Dec on Reconsideration - Denied"},
{
value:"APD2",label:"Dec on Reconsideration - Granted"},
{
value:"APD3",label:"Dec on Reconsideration - Granted in Part"},
{
value:"APDA",label:"Patent Board Decision - Examiner Affirmed"},
{
value:"APDN",label:"Patent Board Decision 196(b)"},
{
value:"APDP",label:"Patent Board Decision - Examiner Affirmed in Part"},
{
value:"APDR",label:"Patent Board Decision - Examiner Reversed"},
{
value:"APDS",label:"Dismissal of Appeal"},
{
value:"APDT",label:"Patent Board Decision - Requirement under 196(D)"},
{
value:"APE2",label:"2nd or Subsequent Examiner's Answer to Appeal Brief"},
{
value:"APEA",label:"Examiner's Answer to Appeal Brief"},
{
value:"APLR",label:"Notification of Appeal Reinstatement"},
{
value:"APLW",label:"Patent Board Appeal Dismissed / Withdrawn"},
{
value:"APND",label:"Notice - Defective Notice of Appeal"},
{
value:"APNH",label:"Notification of Appeal Hearing"},
{
value:"APNR",label:"Notice of Non-Entry of Reply Brief"},
{
value:"APOH",label:"Request for Oral Hearing"},
{
value:"APP.FILE.REC",label:"Filing Receipt"},
{
value:"APP.TXT.CHEM",label:"Chemical Formulae (Text File)"},
{
value:"APP.TXT.MATH",label:"Mathematical Formulae (Text File)"},
{
value:"APP.TXT.PDB",label:"3D Protein Crystals (Text File)"},
{
value:"APPD",label:"Hearing Postponement Denied"},
{
value:"APPENDIX",label:"Appendix to the Specification"},
{
value:"APPG",label:"Appeal Hearing Postponement Granted"},
{
value:"APPH",label:"Appeal Postponement of Oral Hearing Request"},
{
value:"APPR",label:"Panel Remand to the Examiner by Patent Board"},
{
value:"APRB",label:"Reply Brief Filed"},
{
value:"APRD",label:"Order Returning Undocketed Appeal to the examiner from Patent Board"},
{
value:"APWH",label:"Waiver of Hearing by Appellant"},
{
value:"ARTIFACT",label:"Artifact sheet indicating an item has been filed which cannot be scanned"},
{
value:"ASIR",label:"Form PTO451 - Approval of SIR Request"},
{
value:"BD.A",label:"Amendment/Argument after Patent Board Decision"},
{
value:"BDRR",label:"Request for Rehearing of Patent Board Decision"},
{
value:"BIB",label:"Bibliographic Data Sheet"},
{
value:"C.AD",label:"Change of Address"},
{
value:"C105",label:"Response to Rule 105 Communication"},
{
value:"C105D",label:"Requirement under Rule 105 - Included with Office Action"},
{
value:"C105-I",label:"Requirement under Rule 105 - Independent Communication"},
{
value:"C680",label:"Request for Corrected Notice of Allowance"},
{
value:"C694",label:"Request for New or Replacement Patent Grant"},
{
value:"CAFC.AP.BR",label:"Appellant’s Brief  to CAFC"},
{
value:"CAFC.AP.NTC",label:"Appeal to CAFC"},
{
value:"CAFC.CAP.BR",label:"Co-Appelee brief to CAFC"},
{
value:"CAFC.CAP.NTC",label:"Notice of Cross-Appeal to CAFC"},
{
value:"CAFC.DEC.AFF",label:"Decision by CAFC – Affirmed"},
{
value:"CAFC.DEC.AIP",label:"Decision by CAFC – Affirmed in Part"},
{
value:"CAFC.DEC.DIS",label:"Decision by CAFC – Dismissed by Court"},
{
value:"CAFC.DEC.REV",label:"Decision by CAFC – Reversed"},
{
value:"CAFC.DEC.RMD",label:"Decision by CAFC – Remanded"},
{
value:"CAFC.EXT.TM",label:"Petition for Extension of Time to Appeal to CAFC"},
{
value:"CAFC.EXT.TMD",label:"Petition for Extension of Time to Appeal to CAFC Denied"},
{
value:"CAFC.EXT.TMG",label:"Petition for Extension of Time to Appeal to CAFC Granted"},
{
value:"CAFC.EXT.TMW",label:"Petition for Extension of Time to Appeal to CAFC Withdrawn"},
{
value:"CAFC.MN.PET",label:"Petition for Writ of Mandamus to CAFC"},
{
value:"CAFC.MN.PETD",label:"Petition for Writ of Mandamus – Denied by CAFC"},
{
value:"CAFC.MN.PETG",label:"Petition for Writ of Mandamus – Granted by CAFC"},
{
value:"CAFC.MN.PETW",label:"Petition for Writ of Mandamus to CAFC – Withdrawn"},
{
value:"CAFC.MN.PTDS",label:"Petition for Writ of Mandamus – Dismissed by CAFC"},
{
value:"CAFC.MN.RSP",label:"Response to Writ of Mandamus"},
{
value:"CAFC.RH.AFF",label:"CAFC Decision Affirmed on Rehearing"},
{
value:"CAFC.RH.PBR",label:"Petitioner's Brief on Rehearing to CAFC"},
{
value:"CAFC.RH.PET",label:"Petition for Rehearing to CAFC"},
{
value:"CAFC.RH.PETD",label:"Petition for Rehearing to CAFC - Denied"},
{
value:"CAFC.RH.PETG",label:"Petition for Rehearing to CAFC - Granted"},
{
value:"CAFC.RH.RBR",label:"Response to Petitioner's Brief on Rehearing to CAFC"},
{
value:"CAFC.RH.REV",label:"CAFC Decision Reversed on Rehearing"},
{
value:"CAFC.RH.RSP",label:"Response to Petition for Rehearing TO CAFC"},
{
value:"CAFC.RPLY.BR",label:"Appellant’s Reply Brief to CAFC"},
{
value:"CAFC.SOL.BR",label:"PTO's Response to Appellant’s Brief (Solicitor's Brief)"},
{
value:"CDEN",label:"Post Issue Communication - Request for Certificate of Correction Denied"},
{
value:"CFILE",label:"Request for Corrected Filing Receipt"},
{
value:"CLM",label:"Claims"},
{
value:"CLM.NE",label:"Claim-Amendment Not Entered"},
{
value:"COCIN",label:"Request for Certificate of Correction"},
{
value:"COCOUT",label:"Certificate of Correction - Post Issue Communication"},
{
value:"COCX",label:"Notification of Return of Papers - Re: Request for Certificate of Correction (PTOL-306)"},
{
value:"COMPUTER",label:"Computer Listing (text file)"},
{
value:"CPA-AMD",label:"Notice of Informal or Non-Responsive CPA Amendment"},
{
value:"CRF.TRNS.IMP",label:"Improper CRF Transfer Request Submitted by Applicant"},
{
value:"CRF.TRNS.REQ",label:"Request for Transfer of a Computer Readable Form"},
{
value:"CRFD",label:"Computer Readable Form (CRF) for Sequence Listings - Defective"},
{
value:"CRFE",label:"CRF entered - partial listing printed by STIC"},
{
value:"CRFL",label:"CRF Sequence Listing Filed"},
{
value:"CRFR",label:"Mail letter requiring CRF (Unreadable,Non-Compliant,Not Submitted)"},
{
value:"CRFS",label:"CRF Statement Paper and CRF are the same"},
{
value:"CTAV",label:"Advisory Action (PTOL-303)"},
{
value:"CTEQ",label:"Ex Parte Quayle Action"},
{
value:"CTFR",label:"Final Rejection"},
{
value:"CTMS",label:"Miscellaneous Action with SSP"},
{
value:"CTNF",label:"Non-Final Rejection"},
{
value:"CTRS",label:"Requirement for Restriction/Election"},
{
value:"DC.COMPLAINT",label:"Plaintiff's Complaint (de novo appeal)"},
{
value:"DC.CV.AFF",label:"Decision in Civil Action – Affirmed"},
{
value:"DC.CV.AIP",label:"Decision in Civil Action – Affirmed – In part"},
{
value:"DC.CV.ANS",label:"PTO's Answer to Plaintiff's Complaint"},
{
value:"DC.CV.COM",label:"Plaintiff's Complaint (APA action)"},
{
value:"DC.CV.DIS",label:"Decision in Civil Action – Dismissed"},
{
value:"DC.CV.REM",label:"Decision in Civil Action – Remanded"},
{
value:"DC.CV.REV",label:"Decision in Civil Action - Reversed"},
{
value:"DC.CV.TRN",label:"Decision in Civil Action - Transferred"},
{
value:"DC.DEC.AFF",label:"Decision in APA Action – Affirmed"},
{
value:"DC.DEC.AIP",label:"Decision in APA Action – Affirmed in Part"},
{
value:"DC.DEC.DIS",label:"Decision in APA  Action – Dismissed by Court"},
{
value:"DC.DEC.REV",label:"Decision in APA Action – Reversed"},
{
value:"DC.DEC.RMD",label:"Decision in APA Action – Remanded"},
{
value:"DC.MPI",label:"Motion for Permanent Injunction"},
{
value:"DC.MSJ",label:"PTO's Motion for Summary Judgment"},
{
value:"DC.MSJ.D",label:"PTO's Motion for Summary Judgment – Denied"},
{
value:"DC.MSJ.G",label:"PTO's Motion for Summary Judgment – Granted"},
{
value:"DC.MSJ.PL",label:"Plaintiff's Motion for Summary Judgment"},
{
value:"DC.MSJ.PLD",label:"Plaintiff's Motion for Summary Judgment – Denied"},
{
value:"DC.MSJ.PLG",label:"Plaintiff's Motion for Summary Judgment – Granted"},
{
value:"DC.MTI",label:"Motion for Temporary Injunction"},
{
value:"DC.SOL.ANS",label:"PTO's Response to Plaintiff's Complaint (Answer)"},
{
value:"DCPA",label:"Continuing Prosecution Application - Divisional (DCPA)"},
{
value:"DED.",label:"Post Issue Communication - Dedicate Life of Patent to Public"},
{
value:"DEPOSIT",label:"Request for Certificate of Deposit under Budapest Treaty"},
{
value:"DERIV.D",label:"Derivation Denied"},
{
value:"DERIV.DIS",label:"Derivation Dismissed"},
{
value:"DERIV.FWD",label:"Derivation Final Written Decision"},
{
value:"DERIV.G",label:"Derivation Granted or Granted in Part"},
{
value:"DERIV.PET",label:"Petition Requesting Derivation"},
{
value:"DISQ",label:"Terminal Disclaimer Review Decision"},
{
value:"DISQ.E.FILE",label:"Electronic Terminal Disclaimer – Approved"},
{
value:"DIST",label:"Terminal Disclaimer Filed"},
{
value:"DIST.E.FILE",label:"Electronic Terminal Disclaimer - Filed"},
{
value:"DR..",label:"Decision - Application Returned for Examination"},
{
value:"DRQS",label:"Decision - Request to Lift Suspension Denied"},
{
value:"DRRI",label:"Decision - Application Returned for Examination and Requirement for Information"},
{
value:"DRW",label:"Drawings – only Black and White line drawings"},
{
value:"DRW.NE",label:"Drawings - Amendment Not Entered"},
{
value:"DRW.NONBW",label:"Drawings-other than Black and White line drawings"},
{
value:"DSIR",label:"Denial of SIR Request"},
{
value:"E.RECORD.COR",label:"Electronic Record Correction"},
{
value:"EABN",label:"Letter Express Abandonment of the application"},
{
value:"EARLYPUB",label:"Request for Early Publication "},
{
value:"EBCC.AD",label:"Notice of Change of Address placed in File Wrapper due to EBC Customer Number update"},
{
value:"ELC.",label:"Response to Election / Restriction Filed"},
{
value:"EX.A",label:"Examiner's Amendment Communication"},
{
value:"EXIN",label:"Examiner Interview Summary Record (PTOL - 413)"},
{
value:"EXPD.L.DEC.D",label:"Denial Letter For Expedited Foreign Licenses"},
{
value:"EXPD.L.DEC.G",label:"Grant Letter For Expedited Foreign Licenses"},
{
value:"FAI.A..",label:"Reply under 1.111 to Pre-Interview Communication"},
{
value:"FAI.REQ",label:"First Action Interview – Enrollment Request"},
{
value:"FAI.REQ.INTV",label:"First Action Interview- Schedule Interview request"},
{
value:"FAI.REQ.WD",label:"Withdraw request for first action interview"},
{
value:"FAI.RQ.NNCPL",label:"Notice of non-compliant first action interview req"},
{
value:"FOR",label:"Foreign Reference"},
{
value:"FR TRANS",label:"Translation of Foreign Priority Documents"},
{
value:"FREF",label:"Final Refusal of SIR Request"},
{
value:"FRPR",label:"Certified Copy of Foreign Priority Application"},
{
value:"FWCLM",label:"Index of Claims"},
{
value:"IACN",label:"Amendment Copying Claims - Not in Response to Examiner Suggesting Claims"},
{
value:"IACS",label:"Amendment Copy Claims/Response to  Suggested Claims"},
{
value:"ICPA",label:"Communication to Applicant - Incomplete Reply to MCPA Notice"},
{
value:"IDS",label:"Information Disclosure Statement (IDS) Form (SB08)"},
{
value:"IFEE",label:"Issue Fee Payment (PTO-85B)"},
{
value:"IIFW",label:"Issue Information including classification,examiner,name,claim,renumbering,etc."},
{
value:"IMIS",label:"Miscellaneous Internal Document"},
{
value:"INT.DEC.ADV",label:"Interference Decision on Priority–Adverse"},
{
value:"INT.DEC.FAV",label:"Interference Decision on Priority-Favorable "},
{
value:"INT.DECL",label:"Declaration of Interference"},
{
value:"INT.MISC",label:"Interference Miscellaneous"},
{
value:"INT.REDECL",label:"Redeclaration of Interference"},
{
value:"INTRVIEW.APP",label:"Applicant summary of interview with examiner"},
{
value:"INTV.SUM.APP",label:"Application summary of interview (PTOL-413)"},
{
value:"INTV.SUM.EX",label:"Examiner initiated interview summary (PTOL-413B)"},
{
value:"IRFND",label:"Processed Request for Refund"},
{
value:"ISSUE.NTF",label:"Issue Notification"},
{
value:"ISSUE.WD.NTC",label:"Notice of withdrawal from issue"},
{
value:"L.SP",label:"Letter of Suspension - Examiner Initiated"},
{
value:"L_R IN",label:"Any request going to L R"},
{
value:"L_R OUT",label:"Any document coming from L&R"},
{
value:"LET.",label:"Miscellaneous Incoming Letter"},
{
value:"LR501",label:"Letter Returning Improper 1.501 Submission"},
{
value:"LRO501",label:"Letter Acknowledging Receipt of 1.501 Submission by Patent Owner"},
{
value:"LRT501",label:"Letter Acknowledging Receipt of 1.501 Submission by Third Party"},
{
value:"M327",label:"Miscellaneous Communication to Applicant - No Action Count"},
{
value:"M852",label:"Letter to Official Draftsman Filed P/E"},
{
value:"M856",label:"Letter Requesting Suspension of Prosecution"},
{
value:"M865",label:"Letter Requesting Interview with Examiner"},
{
value:"M903",label:"Notice of DO/EO Acceptance Mailed"},
{
value:"M905",label:"Notice of DO/EO Missing Requirements Mailed"},
{
value:"MCPA",label:"Communication to Applicant for Missing Parts CPA"},
{
value:"MISC OIPE",label:"Miscellaneous internal documents from OIPE to the examiner indicating formality deficiencies."},
{
value:"N/AP",label:"Notice of Appeal Filed"},
{
value:"N271",label:"Response to Amendment under Rule 312"},
{
value:"N416",label:"Notice of Withdrawal from Issue Branch (PTOL-67)"},
{
value:"N417",label:"EFS Acknowledgment Receipt"},
{
value:"N427",label:"Post Allowance Communication - Incoming"},
{
value:"N459",label:"Notice to Patentee under 37 CFR 1.607(D)"},
{
value:"N570",label:"Communication - Re: Power of Attorney (PTOL-308)"},
{
value:"N572",label:"Response - Re: Informal Power of Attorney (PTOL-308)"},
{
value:"N578",label:"Notification of Withdrawal of Attorney"},
{
value:"NAPI",label:"Defective/Not Acceptable Notice of Appeal"},
{
value:"NDRW",label:"New or Additional Drawings"},
{
value:"NFDR",label:"Notice of Formal Drawings Required"},
{
value:"NFEE",label:"Notice of Additional Fee Due"},
{
value:"NOA",label:"Notice of Allowance and fees due (PTOL-85)"},
{
value:"NOCODE",label:"Temporarily unable to identify document"},
{
value:"NPL",label:"Non Patent Literature"},
{
value:"NRES",label:"Letter Restarting Period for Response (i.e. Letter re: References)"},
{
value:"NT.AE.A.NONC",label:"PTO 2239AE - Notice of Non-Responsive Reply (Accelerated Exam)"},
{
value:"NT.CR.APP.PA",label:"Notice to File Corrected Application Papers"},
{
value:"NT.INC.REPLY",label:"Notice of Incomplete Reply"},
{
value:"NT.INCPL.APP",label:"Notice of Incomplete Application"},
{
value:"NT.WD.NONCPL",label:"Letter Withdrawing a Notice of Non-Compliant Amendment"},
{
value:"NTC.A.NONCPL",label:"Notice to the applicant regarding a Non-Compliant or Non-Responsive Amendment"},
{
value:"NTC.CONCPROC",label:"Notice of concurrent proceedings and decisions "},
{
value:"NTC.MISS.PRT",label:"Notice to File Missing Parts"},
{
value:"NTC.OMIT.APP",label:"Notice of Omitted Items Application"},
{
value:"NTC.PUB",label:"Notice of Publication"},
{
value:"NTC.PUB.DATE",label:"Notice of New or Revised Publication Date"},
{
value:"NTC.RCE.DEF",label:"Notice of Improper Request for Continued Examination (RCE) – PTO-2051 Rev 7/2003"},
{
value:"NTRM",label:"Pre-Exam withdrawal of prior notice"},
{
value:"NUNT",label:"Notice of Untimely Request"},
{
value:"O501",label:"1.501 Submission by Patent Owner"},
{
value:"OA.APPENDIX",label:"Office Action Appendix"},
{
value:"OA.EMAIL",label:"Email Notification"},
{
value:"OA.FAI",label:"First action interview - office action"},
{
value:"OA.FAI.OPT.O",label:"First action without interview"},
{
value:"OA.FAI.PRELM",label:"Preinterview first office action"},
{
value:"OA.POSTCARD",label:"A courtesy postcard sent by USPTO to users who opt-in for e-Office Action"},
{
value:"OATH",label:"Oath or Declaration filed"},
{
value:"P.102",label:"RO/102 - Notification Concerning Payment of Prescribed Fees and Annex"},
{
value:"P.102B",label:"RO/102(b) - Chapter I Fee Recordation Sheet "},
{
value:"P.103",label:"RO/103 - Invitation to Correct the Purported IA"},
{
value:"P.104",label:"RO/104 - Notification that the Purported IA -  is not and will not be Treated as an IA"},
{
value:"P.105",label:"RO/105 - Notification of the IA Number and of the International Filing Date"},
{
value:"P.106",label:"RO/106 with Annex A,B and/or C - Invitation to Correct Defects in the IA"},
{
value:"P.107",label:"RO/107 Notification of Non-inclusion of Drawings with the IA"},
{
value:"P.108",label:"RO/108 - Invitation to Request Rectification"},
{
value:"P.109",label:"RO/109 - Notification of Decision Concerning Request for Rectification"},
{
value:"P.110",label:"RO/110 with Annex   - Invitation to Correct Priority Claim"},
{
value:"P.111",label:"RO/111 - Notification Relating to Priority Claim"},
{
value:"P.112",label:"RO/112 - Notification Concerning Expressions,etc.,not to be used in the IA"},
{
value:"P.113",label:"RO/113 - Request for the Recording of a Change "},
{
value:"P.114",label:"Notification on Decision of Confirmation of Incorporation by Ref. Of Missing Element/Part"},
{
value:"P.115",label:"RO/115 - Notification of Intention to make Declaration that IA Considered Withdrawn"},
{
value:"P.117",label:"RO/117 - Notification that IA Considered to be Withdrawn"},
{
value:"P.118",label:"RO/118 - Notification Concerning Documents Transmitted"},
{
value:"P.119",label:"RO/119 - Notification of Refund of Fees"},
{
value:"P.120",label:"RO/120 - Invitation to Pay Fee for Preparation of Copies"},
{
value:"P.123",label:"RO/123 - Notification Concerning Representation"},
{
value:"P.124",label:"RO/124 - Notification of Defective Power of Attorney or Defective Revocation of Power of Attorney"},
{
value:"P.126",label:"RO/126 - Notification Concerning Later Submitted Sheets or Drawings"},
{
value:"P.127",label:"RO/127 - Notification of Decision not to Issue Declaration that IA Considered Withdrawn"},
{
value:"P.132",label:"RO/132 - Notification of Defects with Regard to Correspondence Submitted by the Applicant"},
{
value:"P.133",label:"RO/133 with Annex - Invitation to Pay Prescribed Fees Together with Late Payment Fee"},
{
value:"P.134",label:"RO/134 Deposited Microorganisms/Bio Material"},
{
value:"P.135",label:"RO/135 - Notification of Date of Receipt of Priority Document or of Priority Application Number"},
{
value:"P.136",label:"RO/136 - Notification of Withdrawal"},
{
value:"P.138",label:"RO/138 - Communication Regarding Extension of Time Limit"},
{
value:"P.13TER.STMT",label:"Seq Listing Cover Sheet/Stmt under PCT Rule 13ter"},
{
value:"P.143",label:"RO/143 - Notification that IA Considered to be Withdrawn"},
{
value:"P.145",label:"Invitation to pay fee for confirmation of precautionary designation"},
{
value:"P.146",label:"RO/146 with Attachments - Notification Regarding Certain Corrections Made Ex Officio"},
{
value:"P.147",label:"RO/147 - Notification Concerning Failure to Forward Record Copy and Search Copy for National Security Reasons"},
{
value:"P.151",label:"RO/151 - Notification of Transmittal of IA to the IB as Receiving Office and Invitation to Pay Fee"},
{
value:"P.152",label:"RO/152 - Invitation to Authorize Transmittal of IA to the IB as Receiving Office and to Pay Fee."},
{
value:"P.153",label:"RO/153 - Notification of Transmittal of Demand to the IB or the competent IPEA."},
{
value:"P.154",label:"RO/154 - Invitation to Indicate Competent IPEA."},
{
value:"P.155",label:"RO/155 - Notification that Demand Considered not to Have Been Submitted"},
{
value:"P.156",label:"RO/156 - Invitation to Correct Declarations Made in the Request Under PCT Rule 4.17"},
{
value:"P.158",label:"Notification of Intended Refusal of Request to Restore Right of Priority"},
{
value:"P.159",label:"Notification of Decision on Request to Restore Right of Priority"},
{
value:"P.202.IN",label:"Incoming ISA/202 - Notification of Receipt of Search Copy"},
{
value:"P.202.OUT",label:"Outgoing - ISA/202 - Notification of Receipt of Search Copy"},
{
value:"P.203",label:"ISA/203 - Declaration of Non-Establishment of International Search Report"},
{
value:"P.205",label:"ISA/205 - Notification of Change in Abstract as Previously Established by ISA"},
{
value:"P.206",label:"ISA/206 - Invitation to Pay Additional Fees"},
{
value:"P.209",label:"Notification of Facts Which Should Have Precluded the According of an International Filing Date"},
{
value:"P.210.IN",label:"Incoming ISR,237 & References from IB"},
{
value:"P.210.OUT",label:"Outgoing - ISA/210 - International Search Report"},
{
value:"P.212",label:"ISA/212 - Notification of Decision on Protest"},
{
value:"P.216",label:"ISA/216 - Invitation to Request Rectification"},
{
value:"P.217.IN",label:"ISA/217 - Notification of Decision Req for Rectification"},
{
value:"P.217.OUT",label:"ISA/217 - Notification of Decision Concerning Request for Rectification"},
{
value:"P.220",label:"ISA/220 - Notification of Transmittal of Search Report and Written Opinion of the ISA,or the Declaration"},
{
value:"P.224.IN",label:"ISA/224 – Communication-No Other Form is Applicable"},
{
value:"P.224.OUT",label:"ISA/224 - Communication in Cases for Which No Other Form is Applicable"},
{
value:"P.225.IN",label:"ISA/225-Invite to Furnish Nucleotide/Amino Acid/Related Tables"},
{
value:"P.225.OUT",label:"ISA/225 - Invitation to Furnish Nucleotide and/or Amino Acid Sequence Listing and/or Related Tables "},
{
value:"P.234.IN",label:"ISA/234-Notif. of Trans of Demand to IB or the Competent IPEA"},
{
value:"P.234.OUT",label:"ISA/234-Notification of Transmission of Demand to IB or the Competent IPEA"},
{
value:"P.237.IN",label:"Incoming Written Opinion of the ISA"},
{
value:"P.237.OUT",label:"Outgoing Written Opinion of the ISA"},
{
value:"P.299",label:"Unity of Invention Telephone Memorandum"},
{
value:"P.306",label:"IB/306- Notification of the Recording of a Change"},
{
value:"P.307",label:"IB/307 - Notification of Withdrawal of IA or Designations"},
{
value:"P.313",label:"IB/313 - Notification of Defects in the IA"},
{
value:"P.315",label:"IB/315 - Notification of Decision Concerning Request for Rectification "},
{
value:"P.316",label:"IB/316 - Invitation to Correct Priority Claim"},
{
value:"P.317",label:"IB/317 - Notification of Withdrawal of Priority Claim "},
{
value:"P.318",label:"IB/318 - Notification Relating to Priority Claims"},
{
value:"P.319",label:"IB/319 - Notification Concerning Representation"},
{
value:"P.320",label:"IB/320 - Notification of Defective Power of Attorney or Defective Revocation of Power of Attorney"},
{
value:"P.321",label:"IB/321 - Notification of Facts Which Should Have Precluded the According of an International Filing Date "},
{
value:"P.323",label:"IB/323 - Request for the Production of Proof"},
{
value:"P.336",label:"IB/336 - Notification of Defects in Demand"},
{
value:"P.337",label:"IB/337 - Notification Concerning Written Opinion of ISA and Amendments of Claims "},
{
value:"P.339",label:"IB/339 - Notification of Withdrawal of Demand or Elections"},
{
value:"P.344",label:"IB/344 - Notification of Defects with Regard to Correspondence Submitted by Applicant"},
{
value:"P.345",label:"IB/345 - Communication in Cases for Which No Other Form is Applicable"},
{
value:"P.350",label:"IB/350 - Notification the Demand is Considered not to Have Been Submitted or Made"},
{
value:"P.353",label:"IB/353 - Furnishing of Copies of Priority Documents "},
{
value:"P.368",label:"IB/368 - Notification of Transmittal of Demand to the Competent IPEA"},
{
value:"P.369",label:"IB/369 - Notification that Demand Considered not to Have Been Submitted"},
{
value:"P.370",label:"IB/370 - Invitation to Correct Declarations Made in the Request Under PCT Rule 4.17"},
{
value:"P.371",label:"IB/371 - Notification Relating to Declaration Made Under PCT Rule 4.17"},
{
value:"P.372",label:"IB/372 – Notice of Withdrawal"},
{
value:"P.374",label:"IB/374 - Notification of Transmittal of Copies of the Written Opinion of the ISA"},
{
value:"P.399",label:"IB/399 – International Application Status Form"},
{
value:"P.409.IN",label:"Incoming IPEA/409 – Int’l Prelim Report on Patentability"},
{
value:"P.92BIS",label:"Request for recording of a change/ PCT Rule 92bis"},
{
value:"P.APP.INCORP",label:"Copy of earlier app for incorporation by reference"},
{
value:"P.ART19.CLM",label:"Amendment to the claims under PCT Article 19 "},
{
value:"P.ART19.STMT",label:"Copy/Translation of Stmnt. Under PCT Article 19"},
{
value:"P.CONF.DES",label:"Confirmation of precautionary designation"},
{
value:"P.CORP.RES",label:"Corp. Resolution/Auth. to Act on Behalf of Corp."},
{
value:"P.EXP.MAIL",label:"Cert. of Express Mail/Exp. Mail Envelope label"},
{
value:"P.FEE.PYMT",label:"Fee payment - International Application"},
{
value:"P.FORISA.LET",label:"Miscellaneous communication from ISA"},
{
value:"P.FOSC.FEE",label:"Search fee payment for FOSC from foreign RO"},
{
value:"P.IB.LET",label:"Fax/Letter/Misc. form from the IB"},
{
value:"P.INFO.PC",label:"Req for pub of info relating to p clm declard void"},
{
value:"P.LATEPUB.PC",label:"Req for pub of late furnished p clm correction"},
{
value:"P.LET",label:"Misc. incoming letter from Applicant - IA"},
{
value:"P.N.101.ANX",label:"RO/101 Annex (fee calculation sheet) "},
{
value:"P.N.101.CONV",label:"RO/101 - Request form for new IA - Conventional  "},
{
value:"P.N.101.FOSC",label:"Foreign Origin Search copies - IA"},
{
value:"P.N.101.SAFE",label:"RO/101 - Request form for new IA- PCT EASY Format "},
{
value:"P.N.NO101",label:"New International Application from Applicant  - Missing Request form"},
{
value:"P.PAMPHLET",label:"WIPO Publication – Non-English version"},
{
value:"P.R20.6.CONF",label:"Confirmation of incorporation by reference"},
{
value:"P.REQ.RECON",label:"Request for Reconsideration - IA"},
{
value:"P.REQ.RECT",label:"Request for rectification - IA"},
{
value:"P.RESP.206",label:"Response to form PCT/ISA/206  Unity of Invention"},
{
value:"P.RESP.225",label:"Response to PCT/ISA/225 invitation to furnish seq. list"},
{
value:"P.RESTORE.PC",label:"Evidence for restoration of priority claim"},
{
value:"P.RULE26BIS",label:"Priority Claim Adjustment under PCT Rule 26bis"},
{
value:"P.SAFE.LOG",label:"PCT EASY Validation Log"},
{
value:"P.SELECT.ISA",label:"ChI-Select Competent ISA"},
{
value:"P.SIG.STMT",label:"Statement explaining lack of signature - IA"},
{
value:"P.SUB.SH.101",label:"Substitute Sheets of Request (Form PCT/RO/101)"},
{
value:"P.SUB.SH.DRW",label:"Substitute Drawings"},
{
value:"P.SUB.SHEET",label:"Substitute Sheets - IA"},
{
value:"P.TR",label:"PCT-Transmittal Letter"},
{
value:"P.TRAN.CERT",label:"Translation of priority doc for incorp by refernc"},
{
value:"P.TRAN.COPY",label:"Copy of trans of earlier app for incorp by refernc"},
{
value:"P.URGENT",label:"Incoming doc requiring expedited processing"},
{
value:"P.WD.APPL",label:"Request to withdraw IA"},
{
value:"P.WD.ATTY",label:"Request to withdraw as attorney - IA"},
{
value:"P.WD.DES",label:"Request to withdraw designation - IA"},
{
value:"P.WD.PRIORIT",label:"Request to withdraw priority claim - IA"},
{
value:"P.WD.US.DES",label:"Request to withdraw US designation - IA"},
{
value:"P2.401",label:"CHII - Form PCT/IPEA/401 - Demand "},
{
value:"P2.401.ANX",label:"CHII - Form IPEA/401 Annex"},
{
value:"P2.402",label:"IPEA/402 - Notification of Receipt of Demand by Competent IPEA"},
{
value:"P2.403",label:"IPEA/403 - Notification Concerning Payment of the Preliminary Examination and Handling Fees"},
{
value:"P2.403B",label:"CHII Fee Sheet"},
{
value:"P2.404",label:"IPEA/404 - Invitation to Correct Defects in the Demand"},
{
value:"P2.405",label:"IPEA/405 Invitation to Restrict or Pay Additional Fees"},
{
value:"P2.407",label:"IPEA/407 - Notification that Demand Considered not to Have Been Submitted"},
{
value:"P2.408",label:"IPEA/408 - Written Opinion of the IPEA"},
{
value:"P2.409",label:"IPEA/409 - International Preliminary Report on Patentability"},
{
value:"P2.411",label:"IPEA/411 - Invitation to Request Rectification"},
{
value:"P2.412",label:"IPEA/412 - Notification of Decision Concerning Request for Rectification"},
{
value:"P2.416",label:"IPEA/416 - Notification of Transmittal of International Preliminary Report on Patentability"},
{
value:"P2.420",label:"IPEA/420 - Notification of Decision on Protest"},
{
value:"P2.424",label:"IPEA/424 - Communication in Cases for Which No Other Form Is Applicable"},
{
value:"P2.424N",label:"IPEA/424 - Communication in Cases for Which No Other Form Is Applicable-No reply due"},
{
value:"P2.425",label:"IPEA/425 - Notification of Cancellation of Certain Elections"},
{
value:"P2.428",label:"IPEA/428 Note on Informal Communication with the Applicant"},
{
value:"P2.430",label:"IPEA/430 Request for international Searching Authority to Furnish Copy of Sequence Listing to International Preliminary Examining Authority"},
{
value:"P2.431",label:"IPEA/431 - Invitation to Submit Amendments"},
{
value:"P2.436",label:"CHII – Notification of Transmittal of Demand to the IB or the Competent IPEA"},
{
value:"P2.440",label:"IPEA/440 - Invitation to Pay Prescribed Fees Together with Late Payment Fee"},
{
value:"P2.441",label:"IPEA/441 Invitation to Furnish Nucleotide and/or Amino Acid Sequence Listing and/or Tables Related Thereto C"},
{
value:"P2.499",label:"Unity of Invention - Telephone Memorandum"},
{
value:"P2.92BIS",label:"CHII - Request for recording change/PCT Rule 92bis"},
{
value:"P2.ART34.A",label:"CHII - Amendmnts to descrpt/drawings - PCT Art. 34"},
{
value:"P2.ART34.CLM",label:"CHII - Amendment to the claims - PCT Art. 34"},
{
value:"P2.FEE.PYMT",label:"CHII - Fee payment - International Application"},
{
value:"P2.FILECOPY",label:"File copy of WO and IPRP forms 237/408/409"},
{
value:"P2.IB.LET",label:"CHII - Fax/Letter/Misc. form from the IB"},
{
value:"P2.LET",label:"CHII - Misc. communication from Applicant _IA"},
{
value:"P2.MISC",label:"CHII Misc. internal or outgoing document in an IA"},
{
value:"P2.REQ.RECON",label:"CHII - Request for Reconsideration - IA"},
{
value:"P2.REQ.RECT",label:"CHII -Request for rectification - IA "},
{
value:"P2.RESP.404",label:"CHII - Response to form PCT/IPEA/404"},
{
value:"P2.RESP.405",label:"CHII - Response to form PCT/IPEA/405 Unity of Invention"},
{
value:"P2.RESP.408",label:"CHII - Response to Written Opinion ISA/237/IPEA/408"},
{
value:"P2.WD.ATTY",label:"CHII - Request to withdraw as attorney - IA"},
{
value:"P2.WD.DES",label:"CHII - Request to withdraw election - IA"},
{
value:"P2.WD.PRRITY",label:"CHII - Request to withdraw priority claim - IA"},
{
value:"PA..",label:"Power of Attorney"},
{
value:"PA.LIST",label:"List-up to 10 attys appointed in a POA"},
{
value:"PATENT.GRANT",label:"Image version of Patent Grant"},
{
value:"PC/I",label:"Power to Make Copies and/or Inspect"},
{
value:"PD.AUTH.NTC",label:"Notice that authorization for participating  IP Offices to access US application was improper."},
{
value:"PD.FILED.E",label:"Priority Documents electronically retrieved by USPTO from a participating IP Office"},
{
value:"PD.PRE.NTC",label:"A formal notice indicating request for Official Priority Documents was unacceptable"},
{
value:"PD.REQ.RETR",label:"Request for USPTO to retrieve priority docs."},
{
value:"PD.RETR.FAIL",label:"Document indicating Retrieval Request was unsuccessful"},
{
value:"PD.TO.AUTH ",label:"Authorization to access Appl. by Trilateral Office"},
{
value:"PEER.CNS.RSP",label:"Response To Applicant Consent - Peer to Patent  "},
{
value:"PEER.CONSENT",label:"Request for Peer Review     "},
{
value:"PEER.IDS",label:"Third-Party Submission –Peer to Patent  "},
{
value:"PEER.IDS.ACK",label:"Acknowledgement of Third-Party Submission –Peer to Patent  "},
{
value:"PEER.SB423",label:"Third Party Submission - Peer Review"},
{
value:"PEFN",label:"Pre-Exam Formalities Notice"},
{
value:"PEFR",label:"Applicant Response to Pre-Exam Formalities Notice"},
{
value:"PEFRREISS",label:"Response to Pre-Exam Reissue Notice"},
{
value:"PEFRSEQ",label:"Response to Pre-Exam Sequence Notice"},
{
value:"PET.",label:"Petition Entered"},
{
value:"PET.41.3",label:"Petition under Rule 41.3 to Chief Admin Patent Judge"},
{
value:"PET.AUTO",label:"Petition automatically granted by EFS"},
{
value:"PET.DEC.AUTO",label:"Petition Auto Grant letter from EFS-Web"},
{
value:"PET.DEC.COCI",label:"Petition Decision routed to Certificate of Correction"},
{
value:"PET.DEC.OIPE",label:"Petition decision routed to the OIPE to act on the decision or continue prosecution"},
{
value:"PET.DEC.PUBS",label:"Petition decision routed to the Office of Publications to act on the decision or continue prosecution."},
{
value:"PET.DEC.RTE",label:"Decision on request for participation in the New Route Program"},
{
value:"PET.DEC.TC",label:"Petition decision routed to the Technology Center to act on the decision or continue prosecution"},
{
value:"PET.GREEN",label:"Green Tech Petition under 37 CFR 1.102"},
{
value:"PET.LAWSCHOL",label:"Petition to Make Special-LawSchool"},
{
value:"PET.OP",label:"Petition for review  by the Office of Petitions"},
{
value:"PET.OP.AGE",label:"Petition to make special based on Age/Health"},
{
value:"PET.OP.SPAC",label:"Petition to make special by Exp Abandon Copend App"},
{
value:"PET.OPLA",label:"Petition decided by Patent Legal Administration"},
{
value:"PET.P2.PCT",label:"CHII - Petition for review by the PCT legal office"},
{
value:"PET.PCT",label:"Petition for review by the PCT legal office."},
{
value:"PET.POA.WDRW",label:"Petition to withdraw attorney or agent (SB83)"},
{
value:"PET.PTA",label:"Patent Term Adjustment Petition"},
{
value:"PET.PTA.RCAL",label:"Request for PTA recalculation in view of Wyeth"},
{
value:"PET.RELIEF",label:"Certification and Request for Disaster Relief"},
{
value:"PET.ROUTE",label:"Request for participation in the New Route Program between the JPO and USPTO"},
{
value:"PET.SPRE",label:"Petition for review by the Technology Center SPRE"},
{
value:"PET.SPRE.ACX",label:"Petition for 12-month Accelerated Exam"},
{
value:"PET.STATUS  ",label:"Petition for review/ processing depending on status"},
{
value:"PETDEC",label:"Petition Decision"},
{
value:"PETWDISS",label:"Petition to Withdraw from Issue"},
{
value:"PG.NONPUB.RQ",label:"Nonpublication request from applicant"},
{
value:"PGA9",label:"Request/Corrected Patent Application Publications"},
{
value:"PGA9.DEC",label:"Decision for a Request for Corrected Patent Application Publication"},
{
value:"PGEA",label:"Request for Exp Aband for refund or to avoid pub"},
{
value:"PGEA.D",label:"Petition for PreGrant Publication Express Abandonment - Dismissed"},
{
value:"PGEA.G",label:"Petition for PreGrant Publication Express Abandonment - Granted"},
{
value:"PGP DRAWINGS",label:"Request to accept PGPub Drawings for publication"},
{
value:"PGREF",label:"Request for Refund of Publication Fee Paid"},
{
value:"PPH.DECISION",label:"Patent Prosecution Highway decision on request/petition to make special"},
{
value:"PPH.PCT.652",label:"Petition to make special under PCT-Patent Pros Hwy"},
{
value:"PPH.PET.652",label:"Petition to make special under Patent Pros Hwy"},
{
value:"PREX.SRCH",label:"Statement of preexamination search"},
{
value:"PREX.SUP.DOC",label:"Examination support document"},
{
value:"PRIA",label:"Statement under Rule 1.608(a) - Patent Board"},
{
value:"PRIB",label:"Statement under Rule 1.608(b) - Patent Board"},
{
value:"PRO TRANS",label:"Translation of a provisional application filed with a non provisional"},
{
value:"PROTEST",label:"Protest Documents filed by 3rd Party"},
{
value:"Q.DEC.REOP",label:"Reopen prosecution after QPIDS request after Notice of Allowance"},
{
value:"QPIDS.REQ",label:"Quick Path Information Disclosure Statement"},
{
value:"R129",label:"Request under Rule 129 to Reopen Prosecution"},
{
value:"R251.NTC",label:"Notice to provide a copy of an applicant's record under 37 CFR 1.251 to support the reconstruction of the application."},
{
value:"R251.RES",label:"Response providing copy of record  for reconstruction"},
{
value:"R3.73B",label:"Assignee  showing of ownership per 37 CFR 3.73(b)"},
{
value:"R48.REQ",label:"Request under Rule 48 correcting inventorship."},
{
value:"RBNE",label:"Reply Brief Noted – Patent Board"},
{
value:"RCE.NE",label:"RCE not entered"},
{
value:"RCEX",label:"Request for Continued Examination (RCE)"},
{
value:"RCONVP",label:"Petition to Convert Regular to Provisional"},
{
value:"REF.OTHER",label:"Other Reference – Patent or Application Document"},
{
value:"REIS.CONSENT",label:"Consent of Assignee  accompanying the declaration"},
{
value:"REIS.DECL",label:"Reissue decl filed in accordance with MPEP 1414"},
{
value:"REIS.REVFORM",label:"Final Reissue Review Form indicating SPREs final review of an allowed reissue application. "},
{
value:"REIS.SUPDECL",label:"Supplemental reissue decl filed in accord with MPEP 1414.01"},
{
value:"REM",label:"Applicant Arguments or Remarks Made in an Amendment"},
{
value:"REQ.MIS.PART",label:"Certification and Request for Missing Parts "},
{
value:"RESC",label:"Rescind Nonpublication Request for Pre Grant Pub"},
{
value:"RETMAIL",label:"Mail returned to USPTO as undelivered"},
{
value:"RFN.REQ",label:"Refund Request "},
{
value:"RFND",label:"Refund Denied"},
{
value:"ROCKET",label:"Request for Expedited Processing, Design Rocket Docket "},
{
value:"RXAAF.",label:"Reexam Response to Final Rejection"},
{
value:"RXADV.",label:"Reexam proceeding - Advisory Action "},
{
value:"RXAF/DR",label:"Reexam  - Affidavit/Decl/Exhibit Filed by 3rd Party"},
{
value:"RXAP/W",label:"Withdrawal of Appeal"},
{
value:"RXAPBI",label:"Reexam Defective Brief Filed"},
{
value:"RXAPDFA",label:"Patent Board decision on rehearing - Decision is final and appealable"},
{
value:"RXAPDRN",label:"Patent Board decision on rehearing - Decision is new decision"},
{
value:"RXAPHC",label:"Reexam Appeal - Oral Hearing Conducted at Patent Board"},
{
value:"RXAPRR",label:"Request for rehearing to Patent Board"},
{
value:"RXBDAF",label:"Patent Board Decision - Affirmance"},
{
value:"RXBDAP",label:"Patent Board Decision - Affirmance-in-part"},
{
value:"RXBDRR  ",label:"Patent Board Remanded Reexam to Examiner"},
{
value:"RXBDRV",label:"Patent Board Decision -  Reversal"},
{
value:"RXC.ADR",label:"Reexam - Correspondence Address Change for 3rd Party"},
{
value:"RXC/M.",label:"Reexam Certificate of Mailing"},
{
value:"RXC/SR  ",label:"Reexam Certificate of Service"},
{
value:"RXCAFC  ",label:"Reexam Court of Appeals Decision Rendered"},
{
value:"RXCERT  ",label:"Reexamination Certificate Issued"},
{
value:"RXCTAP  ",label:"Reexam Appeal Patent Board Decision to Court of Appeals"},
{
value:"RXDCDS",label:"Decision Denying Stay/Suspension of a Reexam Proceeding"},
{
value:"RXDCLS",label:"Decision Lifting the Stay/Suspension of Reexam Proceedings"},
{
value:"RXDCMP  ",label:"Decision Merging Proceedings"},
{
value:"RXDOR  ",label:"Director Initiated Order for Reexam in Preprocessing"},
{
value:"RXDSMP  ",label:"Decision Dissolving Merged Proceedings in Reexam"},
{
value:"RXEPQ.",label:"Reexam - Ex Parte Quayle Action "},
{
value:"RXEXTD  ",label:"Extension of Time Period for Response Denied"},
{
value:"RXEXTG  ",label:"Reexam Extension of Time Period for Response Granted"},
{
value:"RXFEE",label:"Reexam Fee Payment Only Filed"},
{
value:"RXFILJKT",label:"Paper Reexam File Jacket is scanned"},
{
value:"RXFR..",label:"Reexam - Final Rejection "},
{
value:"RXIDS.R",label:"Reexam - Info Disclosure Statement Filed by 3rd Party"},
{
value:"RXINCR",label:"Notice of Incomplete Ex Parte Reexam Request"},
{
value:"RXL/RD",label:"Letter Acknowledging That an Improper Paper in a Reexam Proceeding Has Been Returned/Destroyed"},
{
value:"RXLET.",label:"Reexam Miscellaneous Incoming Letter"},
{
value:"RXLITSR",label:"Reexam Litigation Search Conducted"},
{
value:"RXMISC",label:"Reexam - Miscellaneous Action "},
{
value:"RXMRRD",label:"Decision Dissolving the Merged Reexam and Reissue Proceedings"},
{
value:"RXMRRI",label:"Decision Merging Reexam and Reissue Proceedings -- Reissue Application"},
{
value:"RXMRRT",label:"Merged Reexam and Reissue Proceedings Concluded by Mailing Notice of Allowance in the Reissue Appl."},
{
value:"RXMRRX",label:"Decision Merging Reexam and Reissue Proceedings -- Reexam Request"},
{
value:"RXMRXD",label:"Decision Denying Merger of Reexam Proceedings"},
{
value:"RXNDEFCT",label:"Notification of Defective Paper in a Reexam"},
{
value:"RXNFDACC",label:"Reexam - Notice of filing date accorded"},
{
value:"RXNINA",label:"Notification of Informal or Nonresponsive Amendment"},
{
value:"RXNIRC",label:"Notice of Intent to Issue a Reexam Certificate"},
{
value:"RXNOCA",label:"Reexam Notice of Court Action"},
{
value:"RXNOCP",label:"Notice of concurrent proceeding(s)"},
{
value:"RXNREQ.U",label:"Notice of Untimely Reexam Request "},
{
value:"RXNREQAU",label:"Notice of assignment of reexamination request"},
{
value:"RXNREQFD",label:"Notice of reexamination request filing date"},
{
value:"RXNRES",label:"Letter Restarting Period Of Response in a Reexam Proceeding - e.g.,Letter re References,remail"},
{
value:"RXNRQREC",label:"Notice of reexamination request received"},
{
value:"RXOGNOTC",label:"Notice of Reexam Published in Official Gazette"},
{
value:"RXOPPPET",label:"Reexam - Opposition filed in response to petition"},
{
value:"RXOR.T",label:"Reexam Timely Patent Owner's Stmnt in Resp to Order"},
{
value:"RXOR.U",label:"Reexam Untimely Patent Owner's Stmnt in Resp to Order"},
{
value:"RXOSUB",label:"Receipt of Original Ex Parte Reexam Request"},
{
value:"RXOSUB.C",label:"Receipt of Corrected Original Ex Parte Request"},
{
value:"RXOSUB.R",label:"Receipt of Orig. Ex Parte Request by Third Party "},
{
value:"RXPA..R",label:"Reexam Change in Pwr Atty for Third Party Requester"},
{
value:"RXPATENT",label:"Copy of patent for which reexamination is requested"},
{
value:"RXPET.",label:"Receipt of Petition in a Reexam"},
{
value:"RXPETD",label:"Petition Decision on Request for Reconsideration Denying Reexamination"},
{
value:"RXPETG",label:"Petition Decision on Request for Reconsideration Ordering Reexamination"},
{
value:"RXPTDE",label:"Reexam Petition Decision - Denied"},
{
value:"RXPTDI",label:"Reexam Petition Decision - Dismissed"},
{
value:"RXPTGP",label:"Reexam Petition Decision - Granted-in-part"},
{
value:"RXPTGR",label:"Reexam Petition Decision - Granted"},
{
value:"RXR.NF",label:"Reexam - Non-Final Action "},
{
value:"RXREXD",label:"Determination -- Reexam Denied"},
{
value:"RXREXO",label:"Determination -- Reexam Ordered"},
{
value:"RXRPET",label:"Petition for Review of Reexam Denial"},
{
value:"RXRQ/T",label:"Reexam Request for Extension of Time"},
{
value:"RXRQ4FP",label:"Reexam Req for For Priority (Priority Papers May Be Incl)"},
{
value:"RXRQMP",label:"Request to Merge Reexam Proceedings"},
{
value:"RXRQS.",label:"Reexam Request to Lift Suspension of Prosecution"},
{
value:"RXRR.T",label:"Reexam Timely Requester's Reply to an Owner's Stmnt"},
{
value:"RXRR.U",label:"Reexam Untimely Reqr Reply to Owner Stmnt"},
{
value:"RXTD.NE",label:"Reexam Notification of Terminal Disclaimer - Not Accepted"},
{
value:"RXTD.OK",label:"Reexam Notification of Terminal Disclaimer - Accepted"},
{
value:"RXTERM",label:"Reexamination Terminated"},
{
value:"RXTRLTR",label:"Trans Letter filing of a response in a reexam"},
{
value:"RXTTLRPT",label:"Title Report"},
{
value:"RXVACATE",label:"Decision Vacating a Determination Ordering a Reexamination"},
{
value:"RXWDNIRC",label:"Withdrawal of Notice of Intent to Issue Reexamination Certificate"},
{
value:"SA..",label:"Supplemental Response or Supplemental Amendment"},
{
value:"SADV",label:"Supplemental Advisory Action"},
{
value:"SAFR",label:"Supplemental Amendment after Final Rejection"},
{
value:"SAPB",label:"Supplemental Appeal Brief"},
{
value:"SC.AMICUS.BR",label:"Non-party files brief to the Supreme Court"},
{
value:"SC.CERT.PET",label:"Petition for Writ of Certiorari"},
{
value:"SC.CERT.PETD",label:"Petition for Writ of Certiorari-denied"},
{
value:"SC.CERT.PETG",label:"Petition for Writ of Certiorari-granted"},
{
value:"SC.CERT.RSP",label:"Response to Petition for Writ of Certiorari"},
{
value:"SC.DEC",label:"Decision by the Supreme Court"},
{
value:"SC.MERTIT.BR",label:"Party files brief to the Supreme Court"},
{
value:"SE.ABEYANCE",label:"Paper Held in Abeyance - Supp Exam"},
{
value:"SE.COURT.DOC",label:"Court Document - Supp Exam"},
{
value:"SE.CRT.SNQ.N",label:"Issuance of Supplemental Examination Certificate – No SNQ Found"},
{
value:"SE.CRT.SNQ.Y",label:"Issuance of Supplemental Examination Certificate - SNQ Found"},
{
value:"SE.DEC.MISC",label:"Misc Decision/Office Notice - Supp Exam"},
{
value:"SE.DECL.AFF",label:"Declaration or Affidavit - Supp Exam"},
{
value:"SE.EXPUNGE",label:"Notice/Decision Expunging Improper Paper - Supp Exam"},
{
value:"SE.FD.VACATE",label:"Notice/Decision Vacating Filing Date - Supp Exam"},
{
value:"SE.FILE.DATE",label:"Notice of Filing Date Assigned to Supp Exam Request"},
{
value:"SE.ITEM.LIST",label:"List of Items of Information - Supp Exam"},
{
value:"SE.ITEM.MISC",label:"Misc Item of Information"},
{
value:"SE.ITEM.PAT",label:"US Patent or Patent Application Pub - Supp Exam"},
{
value:"SE.OFF.PROC",label:"List Prior or Concrrnt Ofc Proceedings - Supp Exam"},
{
value:"SE.PATENT",label:"Copy of patent for which supp exam is requested"},
{
value:"SE.PET",label:"Petition in Supplemental Examination"},
{
value:"SE.PET.D",label:"Petition Denied - Supp Exam"},
{
value:"SE.PET.DIS",label:"Petition Dismissed - Supp Exam"},
{
value:"SE.PET.G",label:"Petition Granted - Supp Exam"},
{
value:"SE.PET.GIP",label:"Petition Granted in Part - Supp Exam"},
{
value:"SE.POA.D",label:"Notice Denying POA Request - Supp Exam"},
{
value:"SE.REASN.SNQ",label:"Reasons for SNQ Determination"},
{
value:"SE.REQ.COR",label:"Receipt of Corrected Supp Exam Request"},
{
value:"SE.REQ.NCOMP",label:"Notice of Noncompliant/Incomplete Supp Exam Request (no filing date)"},
{
value:"SE.REQ.ORIG",label:"Receipt of Orig. Supp Exam Request"},
{
value:"SE.REQ.ORIG",label:"Receipt of Orig. Supp Exam Request"},
{
value:"SE.SALE.RCPT",label:"Copy of Sales Receipt or Invoice - Supp Exam"},
{
value:"SE.TERMINATE",label:"Notice of Termination (No Filing Date) - Supp Exam"},
{
value:"SE.TRANS",label:"Translation of Non-English Item of Information"},
{
value:"SE.TRNSCRPT",label:"Transcript of Audio or Video Recording - Supp Exam"},
{
value:"SEPQ",label:"Supplemental Ex Parte Quayle"},
{
value:"SEQ.REQ.DISC",label:"Requirements for Sequence Disclosure Notice"},
{
value:"SEQ.TXT",label:"Sequence Listing (Text File)"},
{
value:"SEQLIST",label:"Sequence Listing"},
{
value:"SFR.",label:"Supplemental Final Rejection"},
{
value:"SIR.",label:"Form PTO/SB/94 - SIR Request"},
{
value:"SOL.DC.NFD",label:"Brief synopsis of civil proceeding from filing to disposal"},
{
value:"SOL.NTC.ARB",label:"Filing of notice of arbitration award regarding a patent"},
{
value:"SOL.NTC.SUIT",label:"Report on the filing or determination of an action regarding a patent "},
{
value:"SPEC",label:"Specification"},
{
value:"SPEC.NE",label:"Specification-Amendment Not Entered"},
{
value:"SPECNO",label:"Specification - Not in English"},
{
value:"SR..",label:"Supplemental Non-Final Rejection (PTOL-326)"},
{
value:"SRES",label:"Supplemental Restriction"},
{
value:"SREXR141",label:"Certification and Authorization for EPO Access to Search Results"},
{
value:"SRFW",label:"Search info including classification,databases,and other search related notes"},
{
value:"SRNT",label:"Examiner’s Search Strategy and Results"},
{
value:"STAT.DISCLMR",label:"Statutory disclaimers per MPEP 1490."},
{
value:"STATUS.LET",label:"Request for status of Application"},
{
value:"T501",label:"Prior Art submission by a Third Party under Rule 37 CFR 1.501 during the period of enforceability of a patent"},
{
value:"T844",label:"Third Party Submission after Publication under 37 CFR 1.99 after publication of a patent"},
{
value:"TABLE",label:"Table not included in SPEC (Text File)"},
{
value:"TERM.AGC.180",label:"FDA Final Eligibility Letter"},
{
value:"TERM.AGC.LET",label:"Letter from FDA or Dept. of Agriculture RE: PTE Application"},
{
value:"TERM.AGC.RRP",label:"Transaction for FDA Determination of Regulatory Review Period"},
{
value:"TERM.ELC.RES",label:"Election in Response to Notice of Final Determination"},
{
value:"TERM.INF.RES",label:"Resp. to req. for info. Sent under 37 CFR 1.750"},
{
value:"TERM.ITM.G",label:"Interim Patent Term Extension Granted"},
{
value:"TERM.PTO.C",label:"Patent Term Extension Certificate"},
{
value:"TERM.PTO.DIS",label:"Patent Term Extension (156) Dismissed"},
{
value:"TERM.PTO.ELC",label:"Notice of Final Determination-Election Required"},
{
value:"TERM.PTO.IE",label:"Notice of Final Determination-Ineligible"},
{
value:"TERM.PTO.LT1",label:"Initial letter Re: PTE Application to regulating agency"},
{
value:"TERM.PTO.LT2",label:"Second letter to regulating agency to determine regulatory review period"},
{
value:"TERM.PTO.NFD",label:"Notice of Final Determination-Eligible"},
{
value:"TERM.RCN.REQ",label:"37 CFR 1.750 Request for Reconsideration"},
{
value:"TERM.REQ",label:"Patent Term Extension Application Under 35 USC 156"},
{
value:"TERM.REQ.ITM",label:"PTE Interim Patent Extension filed"},
{
value:"TERM.RQR.INF",label:"Requirement for information sent under 37 CFR 1.750"},
{
value:"TERM.WAIVE",label:"PTE Waiver of time period for requesting reconsideration"},
{
value:"TERM.WD",label:"Withdrawal of Application for PTE"},
{
value:"TR.PROV",label:"Provisional Cover Sheet (SB16)"},
{
value:"TR.RESP.ACX",label:"Accelerated Exam - Transmittal  amendment/reply"},
{
value:"TRACK1.DENY",label:"TrackOne Request Denied"},
{
value:"TRACK1.GRANT",label:"TrackOne Request Granted"},
{
value:"TRACK1.REQ",label:"TrackOne Request"},
{
value:"TRAN.LET",label:"Transmittal Letter"},
{
value:"TRDD",label:"Transfer Inquiry"},
{
value:"TRIAL.CERT",label:"Trial Review Certificate Issued"},
{
value:"TRIAL.PET.RQ",label:"Petition Requesting Trial"},
{
value:"TRIAL.REQ.D",label:"Request for Trial Denied"},
{
value:"TRIAL.REQ.G",label:"Request for Trial Granted"},
{
value:"TRIAL.REQ.GP",label:"Request for Trial  Granted in Part"},
{
value:"TRIAL.RQ.DIS",label:"Request for Trial Dismissed"},
{
value:"TRIAL.TRMFWD",label:"Trial Termination or Final Written Decision"},
{
value:"TRIWAY.IN",label:"Request for participation in Triway Program Among the USPTO,the EPO and JPO"},
{
value:"TRIWAY.OUT",label:"Decision on request for participation in the Triway Program"},
{
value:"TRNA",label:"Transmittal of New Application"},
{
value:"TRREISS",label:"Transmittal Reissue Application"},
{
value:"VACATE.PROC",label:"Decision Vacating a Determination Ordering a Reexamination Proceeding, or Vacating an Interference Proceeding"},
{
value:"VOL.TABLE",label:"Table –Voluntary Submission (text)"},
{
value:"W/AC",label:"Letter Withdrawing/Vacating Office Action"},
{
value:"WCLM",label:"Claims Worksheet (PTO-2022)"},
{
value:"WFEE",label:"Fee Worksheet (SB-06)"},
{
value:"WSIR",label:"Notice of Withdrawal of SIR"},
{
value:"XI.A…",label:"Response after non-final action-owner timely"},
{
value:"XI.ACP",label:"Action Closing Prosecution (nonfinal)"},
{
value:"XI.ACPOC",label:"Patent Owner Comments after Action Closing Prosecution"},
{
value:"XI.ACPRC",label:"Third Party Requester Comments after Action Closing Prosecution"},
{
value:"XI.AP.BO",label:"Appeal Brief-Owner"},
{
value:"XI.AP.BR",label:"Appeal Brief- Third Party Requester"},
{
value:"XI.AP.DA",label:"New Board of Appeals Decision after Board Decision With New Ground of Rejection: Examiner Affirmed"},
{
value:"XI.AP.DP",label:"New Board of Appeals Decision after Board Decision With New Ground of Rejection: Examiner Affirmed in Part"},
{
value:"XI.AP.DR",label:"New Board of Appeals Decision after Board Decision With New Ground of Rejection: Examiner Reversed"},
{
value:"XI.AP/W",label:"Withdrawal of Appeal"},
{
value:"XI.APCTO",label:"Patent Owner Appeal to the Federal Circuit Filed"},
{
value:"XI.APCTR",label:"Requester Appeal to the Federal Circuit "},
{
value:"XI.APDFA",label:"Board of Appeals Decision on Rehearing - Decision is Final and Appealable"},
{
value:"XI.APDN",label:"New Board of Appeals Decision after Board Decision With New Ground of Rejection: New Ground of Rejection"},
{
value:"XI.APDOC",label:"Patent Owner Response after Board Decision"},
{
value:"XI.APDRC",label:"Requester Comments on Patent Owner Response after Board Decision "},
{
value:"XI.APDRN",label:"Board of Appeals Decision on Rehearing - Decision is New Decision"},
{
value:"XI.APOHO",label:"Oral Hearing Request-Owner"},
{
value:"XI.APOHR",label:"Oral Hearing Request-  Third Party Requester"},
{
value:"XI.APXDT",label:"Examiner’s Determination on Patent Owner Response/Requester Comments after Board Decision "},
{
value:"XI.N/APD",label:"Defective Notice of Appeal or Cross Appeal Filed"},
{
value:"XI.N/APR",label:"Notice of Appeal- Requester"},
{
value:"XI.NCAPO",label:"Notice of Cross Appeal- Owner"},
{
value:"XI.NCAPR",label:"Notice of Cross Appeal- Third Party Requester"},
{
value:"XI.NREQI",label:"Notification of Incomplete Inter Partes Reexam Request"},
{
value:"XI.OSUB",label:"Receipt of Original Inter Partes Reexam Request"},
{
value:"XI.OSUB.C",label:"Receipt of Corrected Original Inter Partes Request"},
{
value:"XI.RAN.",label:"Right of Appeal Notice"},
{
value:"XI.RBBO",label:"Rebuttal Brief- Owner"},
{
value:"XI.RBBR",label:"Rebuttal Brief- Requester"},
{
value:"XI.RNFRC",label:"Third Party Requester Comments after Non-final Action"},
{
value:"XI.RPET",label:"Petition received re:Denial of a Request"},
{
value:"XI.RQRHO",label:"Patent Owner request for Rehearing"},
{
value:"XI.RQRHR",label:"Requester Request for Rehearing after Board Decision "},
{
value:"XI.RRHOC",label:"Pat Owner Comments on Req for Rehearing after Brd Decision (R.41.79(c)) - timely"},
{
value:"XI.RRHRC",label:"Reqr Comments on Req for Rehearing after Brd Decision (R.41.79(c)) - timely"},
{
value:"XI.RSBO",label:"Respondent Brief- Owner"},
{
value:"XI.RSBR",label:"Respondent Brief- Requester"},
{
value:"XI.XDTOC",label:"Patent Owner Comments on Examiner’s Determination after Brd Decision "},
{
value:"XI.XDTOR",label:"Pat Ownr Rep to Reqr Cmnts-Exam Deter after Brd Dec’n W/ New Grnd of Rej"},
{
value:"XI.XDTRC",label:"Reqr Comments on Examiner’s Determ after Board Decision "},
{
value:"XI.XDTRR",label:"Pat Ownr Rep to Reqr Cmnts-Exam Deter after Brd Dec’n W/ New Grnd of Rej-Timely"},
{
value:"XI.XRRAN",label:"Expedited Request for a Right of Appeal Notice"},
{
value:"XT-",label:"Extension of Time"},
{
value:"XT/",label:"Extension of Time"}];

module.exports = {
    APPDOCCODES: APPDOCCODES,
    PTODOCCODES: PTODOCCODES,
    MERITSDOCS: MERITSDOCS,
    CLAIMDOCS: CLAIMDOCS,
    PETDOCCODES: PETDOCCODES,
    DOCNAMES: DOCNAMES,
    USPTOCODES: USPTOCODES,
    ARTDOCS: ARTDOCS,
    INTVDOCCODES: INTVDOCCODES,
    OWNERSHIPDOCS: OWNERSHIPDOCS,
    NOADOCCODES: NOADOCCODES
};