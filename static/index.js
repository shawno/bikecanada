let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49, lng: -90 },
    zoom: 5,
    mapTypeId: "terrain",
  });

  const polyline = "edhlHx`tdVBD@YCEW@MB[?c@Ea@?E@EDKBs@EeABm@AgABc@Dg@AG?IDQPq@\\c@W_@@KCCGE_@q@iLiDkm@SkEIwDGmEAkEBai@CsC@{JBmEHeDRgERsBZeCZaCX{Av@oDTuApJed@`@qBLgAn@}CFe@CQOYWOYUKMSc@QcAG{A[kPe@mMeCw_AI_BCeAKgCOiBm@aEw@_DaAkCqAgCoAqBcHuK{BaEsDaGy@wAeA_CsAgD[mAKeA?a@@a@P}@`@eDI}@oDgKo@sAw@y@yA}@QYW{BUw@]q@_A}Am@qAm@cBa@{AWkASqAOuAKwAa@eKYoDEKe@m@O@GTDTDFZ}@TX?FB?HK@Qq@gPEwB@]LQL@@ASYK{@CkB@oADgB`AqWD}AxAi`@P}DR}FJeBN{A^cCPy@^}AVs@pA_D|BcF^cAjC{F~AyD`@c@XOt@[XIdAg@d@i@Ty@JoAFcBDiCDk@`@_Dl@wCf@oBTq@|EoL`AwC\\yAz@qE`AoGzA}L`A{IVcDRoEJeFFuI@qHXeGTqCj@uDl@gDtDoPdAoFp@aEl@wEt@cHdAqId@kF~@yQnAcQv@oNPyHFcI?aCIgD_@sDYiBmDmPq@iEU}B[wDQiEMoBa@}LC}B@kBDmALgBTmB\\sB\\}A\\gAl@_Bt@_B|AsCfCaEfBoD`AyB~B_GtGmPvAcDrAsCzD_GtHwLbCeEr@{Ap@aBvA_EjBkGjEwOvFiRnAqDvAcDrAgCbCsD|AwBnBeCtAqBr@{@dN{QlAeB`A_BbBoDZs@p@mBtAoEdCwIjDqMzCkKhB_Hn@aBd@}@jBaDXa@v@_AfDmC`A_Aj@s@d@a@bBuBh@y@l@gAnAiBhBqB~@w@t@c@XUjAq@`Ae@zAcAlAaAtAsAjCgDjAuA|BaCh@q@HID?BGj@q@b@_@l@m@f@}@~@kAhAeB|AmBr@y@n@g@j@i@DIp@g@t@a@XMv@W|A[l@Er@Kh@ClAM\\IhBg@\\Ov@g@v@{@b@a@d@m@d@{@z@mBFY\\yAJy@ZwAt@aG\\uBx@{Cb@kA|AkDjDwIfAyBlAeB`@a@|@m@bB}@XWb@Qj@[h@_@hAeAn@s@|B}C`BmB`CaCpDeDf@k@^]VYjHkHr@o@zEwEHMHGjAoAt@q@PG^]l@e@VURWf@c@|BwAdB{@fAe@lBo@rA_@`@EzA]|@MxAKzDKxAAnDGhJe@rAUx@UnAk@l@]nBcBjCuC`@}A|AqBACf@Pf@OjC{Cd\\c^|K_MlGyGxL_Nt@s@|PcRzBoCfAwAjBsCzAcCnA_C`AoBnBoEnAaD|@mCtM_`@tE{LFG^Af@\\j@h@LAFAh@cAx@oClAqFFw@Xs@|@y@j@Mr@KDa@?aABIOdA[t@E@MG[Dk@Xk@l@i@tBe@fCQlAm@fCSh@QZUPG@QC_A{@Qo@?u@BK`AgCxB}GtQkh@|@qCbDcMbAgDj@yA~FuMtAqD|@wCfAaFzByKn@uCp@wBf@qAhA{BrKkOlAqBv@cBv@kBb@{@jDcRlFe`@hAoHt@{C|@mC~@kBpAsBxAcB~JkJ~CyDtGsIpDaElCyBrGkEp@i@`AeAhAkBv@yBf@yB`@aDP}DHeAb@mLD{EMaOByCHuCPoD^cE`BeKlAuGp@kCbAeC^u@l@cArCkEpCaEpAyBl@eBz@uDh@wBPs@n@cBdAmB~EwGfAqBhEmL~@uCl@kCNeALgAfAkR\\_FhAmSt@mPbAcLd@mDPcBDo@HcCn@o]HwCJsFJyCLsAb@_Dj@mCrDuL`HaTv@kCzAuFx@kCbBcE~AkDz@wBX}@`AeEbBgIz@yDT{@t@eCjBwFd@kBXeBj@qC`A}DhDgJz@qCt@mBjAmCn@oApDqGtAqCTg@nAwDlBoGz@uBlAoBnA_Bx@yArH}Q~AqEzDgNfB}F~@oBdAuBhBcDrB}CnFuHpAsB`AsBv@sB~@uC|D_M`FiOv@gB|AkCjBkB~@u@bDyC|@{@j@u@l@eAb@gAj@iBvBiIx@aDFa@HeA@aBK}AMm@Oa@c@{@k@m@q@[m@IiAHaAJ_BAi@Ge@OuAq@qHuFq@m@uIcHiAqAkBaBmA}@uC}BcBmA_FwDmFoDgDmCk@a@gDsBwAeA{@c@uCkBUKOOKCCBwCgB_DaCw@s@kByAmAm@oAeAYe@Se@]wBCeAFgA^}Bh@_B?e@`@m@Hk@AG_@cAMWGGu@UI?SJa@JSVALD@PI\\_@DUIYKIcAo@[Mg@Ye@Ei@P]ZUt@FJDAHKFc@PWd@Qf@HhCbAPJt@l@TVTb@d@b@n@XXA|ASvDYb@M`D_B~@Ub@G\\Gt@[\\WZ_@^q@b@_ARk@T_@xB{E`@cAXaATaBHqA@kAMqAMs@[_A]_Aa@}AIq@G{@F}AHoAPsAl@eEXuAHgAHaBAgEN}Bd@_B`BaExA_Ff@mB~@_g@JcANaAd@{Ap@mAbA{AvGyIj@y@d@}@f@aAb@eAxB}Gz@_Cj@sA`@s@v@kArBqCvD}EtEuFrAoBf@_Ab@iAjCsJz@}BbAwAlD{Dt@eAb@w@Xo@v@}Bz@aDToAX_CHgABqA?cCEoBM}B?mEBaARuC`@{Bb@iBn@eBh@gA~BuD`AsB|@yCXqAXcBRyBh@mJXyCXwBh@yCdCuLt@iDx@}ClAiFz@}DP{@n@wErAqKPiAPu@Vm@R[nAcBr@w@vAsA`AgAn@cAh@mAb@uA\\iBT_CRoDHm@PaA^qAd@iAf@{@V]`A_Ax@]rAc@rAAbAF~@RfBp@~@Vl@DXGAGRYt@e@Z]b@}@zA}D\\eAHc@VuBJ_HPyBL{@Pw@d@{Ax@oAZa@`@]lCuBjC}B|AkA~BqBtBaBfAiAd@s@Xi@b@oAX}@PcATy@To@f@}@b@a@`@W~Aw@bBs@dEoBnAw@`BwAh@_@JCZAf@Pn@x@j@b@`@Nt@Jj@CdK{@j@KREHGF?QBZQFOhAq@f@e@z@cA~@uAl@q@v@w@tAgAdBiAd@g@bBwB\\]p@w@p@u@l@e@p@_@RIdB_@f@Sb@Y^a@b@w@vDaI\\_A\\iA~@mG^iAXc@n@u@j@y@P_@Lk@^cDLk@\\u@j@o@jAs@~CaBf@a@XYp@eAz@oBpAiCd@i@f@c@nHuGx@o@jBeBz@_Aj@u@r@iAn@oAz@{BbEmOj@kBlAcDjFyLhA_Dx@sCZsAhAsF|BuL|AkHvBwKdCoMnBiLn@}C^yA`BsFz@_CxAoEn@cCJe@d@gCXyCRyFHyEFoAXqCT{A|GgZtGe[bAcDr@cBbB_D~A}BjAoBhA{BvAoEv@uChB}H^sAd@{AdAsBL_@DYTIR]t@oAVi@hAcBpAeCNOTe@p@wAtAuDrBcHh@s@FiAnAyDb@cBRcAp@wEn@uFb@gCx@aCb@y@bAwAf@c@h@Wx@Oj@@b@F`C`@nAHzDd@rAHvAKdAUpAi@pDkBv@i@vAqAlB}BjAiBtCgF|@{ArCeFfA{AlCkCx@]dD{@pBc@~Bq@lCm@~@[J?fAYj@c@fAqA~E{GzBmC\\i@X[nBeCt@q@bAk@dAY`@I|AGxCBfBAV@pBCt@K~@Yf@ULMNEHKx@e@pKoIjBaBpAuAv@cA`AuA|DaGR_@L[DSf@_@|BqD|AsCl@uAx@uBbAoFt@{EdN{`AnIqk@`@uBf@oBv@qBbAqBl@_Ar@w@j@g@`BkAdHgE`@[p@m@`@e@l@_Al@kAr@yBj@iCvA{Hz@}Cf@oAXe@lAuA`DiCnAkAvAmAnAoAhC{BhCkBbAm@JCxB{Ab@UlAg@lA[r@MhCUvACpKe@|@MvBm@x@c@|AeArKqJ`IyH`AqApA}B~AaDzCoGbBgDrCgGtAmCvByDpNuT`DiFhJwNlEcHhDgFr@}@fAcArAy@ZMtAc@dBa@x@YfB}@t@k@d@g@rAqBdAgCPi@d@iBbCmKt@aCPi@bAuBdB_CvDmDvA{Ar@gAhAcCjIkWz@gD\\wBpAuKl@qENu@\\qATw@Zs@|@eB`@m@dFsG`AeB^w@Xw@lBwF~@yCXs@LSt@m@\\ALDv@r@TCRa@dAiDRCJF";
  const decodedPath = google.maps.geometry.encoding.decodePath(polyline);
  const flightPath = new google.maps.Polyline({
    path: decodedPath,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  flightPath.setMap(map);

  const markerLatLong = { lat: 49.36275, lng: -121.513249 };
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: markerLatLong,
    map,
    title: "Start",
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}