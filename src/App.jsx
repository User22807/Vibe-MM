import React from 'react';


const css=(source, scope)=>{
  const resolved=source.replace(/\{\{\s*([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)\s*\}\}/g,(_,path)=>{
    const parts=path.split('.'); let value=scope[parts.shift()];
    for(const p of parts) value=value==null?'':value[p];
    return value==null?'':String(value);
  });
  const out={};
  for(const declaration of resolved.split(';')){
    const i=declaration.indexOf(':'); if(i<0) continue;
    const key=declaration.slice(0,i).trim(); const value=declaration.slice(i+1).trim();
    if(!key) continue;
    const camel=key.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
    out[camel]=value;
  }
  return out;
};



const GLOBAL_CSS = `/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/assets/89a74dd3-1bba-4d64-8f3f-053d11f02015.woff2") format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/assets/76b22332-5444-498c-a63c-1db23c3b9418.woff2") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/assets/bae140cb-4f4b-47a0-836c-69a9aeaf0de2.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("/assets/415cc739-b6e1-4d52-b275-a46ab1c3d800.woff2") format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("/assets/d4491c0a-7cf3-46bf-b5b6-f30dbbb65f3f.woff2") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("/assets/07e6d090-02e1-4bfa-b565-28355aeee714.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("/assets/e836e737-2a1a-4018-a0a8-82e6d3a621c9.woff2") format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("/assets/245576e0-501c-440a-b3f6-c167c8fe7a91.woff2") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("/assets/34d0e96e-eb27-41ba-81ef-f4e1298e7e55.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("/assets/63dc2c59-5d72-41ff-9f00-9b85e1d3f180.woff2") format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("/assets/cb7353d3-0bfc-4eed-9900-fd2538b72522.woff2") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("/assets/9895cde9-9efa-4c9d-998e-05d65784bf3e.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url("/assets/574d1ac9-9150-4583-9fc6-ff92d84475bc.woff2") format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url("/assets/a58eb417-d00d-4de5-a9e0-9d91d24cef60.woff2") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url("/assets/a96ca7ca-669b-4d0a-a15c-7ed7e03542ad.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


html,body{margin:0;padding:0;background:#04070f;color:#dfe6f6}
a{color:#e35ff2;text-decoration:none} a:hover{color:#ffc65e;text-decoration:underline}
@keyframes vsBlink{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes vsFlash{0%{background:rgba(227,95,242,.20)}100%{background:transparent}}
::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-thumb{background:#223052;border-radius:4px}::-webkit-scrollbar-track{background:transparent}

.h3eb549cf:hover{color:#ffffff}
.hcf3da810:hover{background:#151b26}
.h7a920191:hover{color:#f06ee2}
.h1813ba3e:hover{border-color:#ffffff}
.hf6f5791f:hover{background:#0e2a5c}
.h9e06f470:hover{color:#e35ff2}
.h7f88fc9a:hover{color:#ff4fae}
.h4441371b:hover{background:#0d1730}`;

class App extends React.Component {
  constructor(props){ super(props); this.state = { page:'live', sortKey:'score', sortDir:-1, selectedId:null, clock:'', tick:0, tape:[], flashId:null, expandedId:null, viewF:'ALL', chainF:'ALL', classF:'ALL', watch:{}, soundOn:false, toast:null };
    try{ const w=JSON.parse(localStorage.getItem('vs_watchlist')||'null'); if(w) this.state.watch=w; }catch(e){}
    this.assets = this.seedAssets(); this.tapeSeq = 0;
    this.state.walletInput=''; this.state.walletLabel='';
    let saved=null; try{ saved=JSON.parse(localStorage.getItem('vs_wallet_registry')||'null'); }catch(e){}
    this.state.registry = saved || [
      {addr:'5xQm…c2Kd', chain:'SOL', label:'Kitsune bundle funder', tag:'BUNDLER', auto:true, first:'auto-flagged 2h ago', hits:3, note:'Funded 11 fresh wallets that bought $KITSUNE same block. Also seen on 2 prior launches.'},
      {addr:'0x8f3a…91a1', chain:'BNB', label:'Moonveil deployer cluster', tag:'LIQ WASHER', auto:true, first:'auto-flagged 5h ago', hits:4, note:'4 liquidity in/out cycles on $MOONVEIL; controls 46% of supply via 7 wallets.'},
      {addr:'7pWr…m9Ts', chain:'SOL', label:'Serial launch sniper ring', tag:'BUNDLER', auto:true, first:'auto-flagged 1d ago', hits:9, note:'Same-block entries on 9 launches in 30d; median exit 22m after entry.'},
      {addr:'0x2c11…4be0', chain:'BASE', label:'Wash loop pair A/B', tag:'WASH TRADER', auto:true, first:'auto-flagged 3d ago', hits:6, note:'Back-and-forth trading with 0x9d…77 — uniform sizes, minimal balance change.'},
      {addr:'9hLm…x2Fa', chain:'SOL', label:'My smart wallet #1', tag:'TRACKED', auto:false, first:'added manually', hits:0, note:'Historically profitable — entered $GLYPH 14m before alert.'}];
  }
  h(str){ let h=0; for(let i=0;i<str.length;i++){h=(h*31+str.charCodeAt(i))>>>0;} return h; }
  srand(seed){ let s=seed>>>0; return ()=>{ s=(s*1664525+1013904223)>>>0; return s/4294967296; }; }
  seedAssets(){
    const mk=(o)=>{ const r=this.srand(this.h(o.id));
      o.spark=[]; let v=50; for(let i=0;i<44;i++){ v=Math.max(8,Math.min(100,v+(r()-0.44)*14)); o.spark.push(v); }
      return o; };
    return [
      mk({id:'glyph',sym:'$GLYPH',name:'Glyph Protocol',chain:'SOL',cls:'MEME',stage:4,score:91,conf:0.91,age:5040,price:0.00742,chg:0.284,liq:412000,vol:1870000,adj:1690000,buyers:412,nf:318000,wash:0.06,canonical:false,
        reasons:[{code:'VOL_ANOM_5M',win:'5M',text:'Adjusted volume 9.1× session baseline',z:'6.2',ratio:'9.1'},{code:'BUYER_BREADTH',win:'5M',text:'Unique buyers 4.0× baseline; 71% first-time asset buyers',z:'5.1',ratio:'4.0'},{code:'LIQ_GROWTH',win:'15M',text:'Net liquidity +$118K across 3 pools, 14 new LPs',z:'3.8',ratio:'2.6'},{code:'ROTATION_IN',win:'1H',text:'Stablecoin deployment from 96 wallets exiting AI cohort',z:'3.1',ratio:'—'}],
        flags:[{sev:'MED',text:'Top-10 adjusted holders own 29% (ex-pools, ex-burn)'},{sev:'LOW',text:'Token age < 2h — experimental cohort baselines'}],
        reason:'Vol 9.1× + buyers 4.0× + liq +$118K + rotation-in'}),
      mk({id:'nvdax',sym:'NVDAx',name:'NVIDIA Stock Token',chain:'RHC',cls:'STOCK',stage:3,score:84,conf:0.87,age:19310000,price:212.44,chg:0.031,liq:2410000,vol:944000,adj:944000,buyers:151,nf:402000,wash:0.02,canonical:true,tick:'NVDA',
        reasons:[{code:'RFQ_VOL_ANOM',win:'15M',text:'Executed RFQ notional 5.1× session-adjusted baseline',z:'5.4',ratio:'5.1'},{code:'TAKER_BREADTH',win:'15M',text:'Unique takers 2.7× baseline across RFQ + AMM',z:'3.9',ratio:'2.7'},{code:'SECTOR_ROTATION',win:'1H',text:'Tech cohort → semiconductor rotation, 64 linked wallets',z:'3.3',ratio:'—'},{code:'ORACLE_CONFIRM',win:'5M',text:'Execution within 0.42% of Chainlink NVDA/USD, round fresh 4s',z:'—',ratio:'—'}],
        flags:[{sev:'MED',text:'61% of recent RFQ volume filled by one maker'},{sev:'LOW',text:'US market open — session-adjusted baselines active'}],
        oracle:{feed:'0x8c2f…a41e',fresh:'4s',dev:'0.42%',seq:'UP',mult:'1.0000',pend:'—',session:'OPEN',corp:'NONE'},
        reason:'RFQ vol 5.1× session-adj + takers 2.7× + semis rotation'}),
      mk({id:'solpup',sym:'$SOLPUP',name:'Solana Puppy',chain:'SOL',cls:'MEME',stage:3,score:82,conf:0.84,age:11160,price:0.000318,chg:0.147,liq:186000,vol:722000,adj:641000,buyers:238,nf:141000,wash:0.11,canonical:false,
        reasons:[{code:'VOL_ANOM_5M',win:'5M',text:'Adjusted volume 7.2× baseline',z:'5.4',ratio:'7.2'},{code:'BUYER_BREADTH',win:'5M',text:'Unique buyers 3.1× baseline',z:'4.2',ratio:'3.1'},{code:'XPOOL_CONFIRM',win:'5M',text:'Confirmed across Raydium + Meteora, price consensus 0.3%',z:'—',ratio:'—'}],
        flags:[{sev:'MED',text:'Top-10 adjusted holders own 31%'},{sev:'MED',text:'Liquidity moderately concentrated: 2 LPs hold 58%'}],
        reason:'Vol 7.2× + buyers 3.1× + 2-pool confirmation'}),
      mk({id:'amdx',sym:'AMDx',name:'AMD Stock Token',chain:'RHC',cls:'STOCK',stage:3,score:80,conf:0.82,age:19310000,price:184.02,chg:0.024,liq:1120000,vol:388000,adj:388000,buyers:87,nf:167000,wash:0.03,canonical:true,tick:'AMD',
        reasons:[{code:'RFQ_VOL_ANOM',win:'15M',text:'Executed notional 3.9× session-adjusted baseline',z:'4.1',ratio:'3.9'},{code:'SECTOR_ROTATION',win:'1H',text:'Same semiconductor rotation cluster as NVDAx',z:'3.0',ratio:'—'},{code:'ORACLE_CONFIRM',win:'5M',text:'Execution within 0.38% of Chainlink AMD/USD',z:'—',ratio:'—'}],
        flags:[{sev:'LOW',text:'Maker concentration 44% — within profile limit'}],
        oracle:{feed:'0x3b1d…77c2',fresh:'7s',dev:'0.38%',seq:'UP',mult:'1.0000',pend:'—',session:'OPEN',corp:'NONE'},
        reason:'RFQ vol 3.9× + semis rotation + oracle confirmed'}),
      mk({id:'bswirl',sym:'$BSWIRL',name:'BaseSwirl',chain:'BASE',cls:'TOKEN',stage:2,score:74,conf:0.76,age:262000,price:0.0447,chg:0.062,liq:341000,vol:264000,adj:239000,buyers:96,nf:58000,wash:0.09,canonical:false,
        reasons:[{code:'VOL_ANOM_15M',win:'15M',text:'Adjusted volume 3.4× baseline on Aerodrome',z:'3.6',ratio:'3.4'},{code:'HOLDER_GROWTH',win:'1H',text:'Holders +6.2% with funded new wallets',z:'2.9',ratio:'1.6'}],
        flags:[{sev:'LOW',text:'LP 71% locked 90d; deployer wallets quiet 3d'}],
        reason:'Vol 3.4× + holder growth, LP locked'}),
      mk({id:'qqqx',sym:'QQQx',name:'Nasdaq-100 ETF Token',chain:'RHC',cls:'ETF',stage:2,score:71,conf:0.74,age:19310000,price:512.87,chg:0.008,liq:3180000,vol:502000,adj:502000,buyers:64,nf:88000,wash:0.02,canonical:true,tick:'QQQ',
        reasons:[{code:'TAKER_BREADTH',win:'30M',text:'Unique takers 2.1× baseline; single-stock → ETF pattern',z:'2.8',ratio:'2.1'},{code:'ROTATION_IN',win:'1H',text:'Inflows from 12 single-stock token cohorts',z:'2.4',ratio:'—'}],
        flags:[{sev:'LOW',text:'Broad-market ETF — expect lower volatility profile'}],
        oracle:{feed:'0x91aa…03f7',fresh:'6s',dev:'0.11%',seq:'UP',mult:'1.0000',pend:'—',session:'OPEN',corp:'NONE'},
        reason:'Takers 2.1× + single-stock→ETF rotation'}),
      mk({id:'kitsune',sym:'$KITSUNE',name:'Kitsune Cash',chain:'SOL',cls:'MEME',stage:2,score:69,conf:0.66,age:7620,price:0.00194,chg:0.208,liq:94000,vol:488000,adj:302000,buyers:118,nf:64000,wash:0.34,canonical:false,
        reasons:[{code:'VOL_ANOM_5M',win:'5M',text:'Raw volume 8.8× baseline — 38% flagged non-organic',z:'4.8',ratio:'8.8'},{code:'BUYER_BREADTH',win:'5M',text:'Unique buyers 2.4× baseline after sybil adjustment',z:'2.7',ratio:'2.4'}],
        flags:[{sev:'HIGH',text:'Wash probability 0.34 — repeated back-and-forth from 9-wallet cluster'},{sev:'HIGH',text:'BUNDLE: 11 fresh wallets funded by one source bought same block at launch'},{sev:'MED',text:'Liquidity cycling: $41K added → withdrawn within 25m, twice in 3h'}],
        bundle:{prob:0.71,launchBuyers:14,sameBlock:11,funder:'5xQm…c2',supplyPct:18,liqCycles:2,liqCycleUsd:41000},
        reason:'Vol 8.8× raw BUT 38% flagged wash — adjusted metrics used'}),
      mk({id:'zkfox',sym:'$ZKFOX',name:'ZK Fox',chain:'BNB',cls:'TOKEN',stage:2,score:68,conf:0.71,age:428000,price:0.312,chg:0.041,liq:277000,vol:198000,adj:184000,buyers:74,nf:39000,wash:0.07,canonical:false,
        reasons:[{code:'VOL_ANOM_15M',win:'15M',text:'Adjusted volume 2.9× baseline on PancakeSwap',z:'3.1',ratio:'2.9'},{code:'SMART_INFLOW',win:'1H',text:'6 historically profitable wallets entered',z:'2.5',ratio:'—'}],
        flags:[{sev:'LOW',text:'Contract verified; no privileged mint'}],
        reason:'Vol 2.9× + smart-wallet inflow'}),
      mk({id:'tslax',sym:'TSLAx',name:'Tesla Stock Token',chain:'RHC',cls:'STOCK',stage:1,score:61,conf:0.69,age:19310000,price:341.60,chg:-0.006,liq:1980000,vol:171000,adj:171000,buyers:41,nf:-22000,wash:0.02,canonical:true,tick:'TSLA',
        reasons:[{code:'VOL_ANOM_30M',win:'30M',text:'Executed notional 1.9× session baseline',z:'2.1',ratio:'1.9'}],
        flags:[{sev:'LOW',text:'Single-family signal — watch stage only'}],
        oracle:{feed:'0x6dd0…b911',fresh:'5s',dev:'0.19%',seq:'UP',mult:'1.0000',pend:'—',session:'OPEN',corp:'NONE'},
        reason:'Vol 1.9× only — awaiting second family'}),
      mk({id:'moonveil',sym:'$MOONVEIL',name:'Moonveil',chain:'BNB',cls:'MEME',stage:1,score:58,conf:0.52,age:3300,price:0.0000842,chg:0.412,liq:31000,vol:214000,adj:74000,buyers:29,nf:11000,wash:0.58,canonical:false,
        reasons:[{code:'VOL_ANOM_5M',win:'5M',text:'Raw volume 11× baseline — 65% flagged non-organic',z:'3.9',ratio:'11.2'}],
        flags:[{sev:'HIGH',text:'Wash probability 0.58 — circular flows, uniform trade sizes'},{sev:'HIGH',text:'BUNDLE: deployer-linked wallets hold 46% of supply, bought block 0-2'},{sev:'HIGH',text:'Liquidity wash: $18K in/out 4× in 90m to simulate depth'}],
        bundle:{prob:0.89,launchBuyers:23,sameBlock:19,funder:'0x8f…a1',supplyPct:46,liqCycles:4,liqCycleUsd:18000},
        reason:'⚠ 65% of volume flagged wash — experimental only'}),
      mk({id:'basedrat',sym:'$BASEDRAT',name:'Based Rat',chain:'BASE',cls:'MEME',stage:1,score:57,conf:0.61,age:9900,price:0.000761,chg:0.088,liq:52000,vol:96000,adj:84000,buyers:44,nf:16000,wash:0.14,canonical:false,
        reasons:[{code:'BUYER_BREADTH',win:'5M',text:'Unique buyers 2.2× baseline',z:'2.3',ratio:'2.2'}],
        flags:[{sev:'MED',text:'Liquidity below standard profile — experimental cohort'}],
        reason:'Buyers 2.2× — liquidity thin, experimental'}),
      mk({id:'perch',sym:'$PERCH',name:'Perch Finance',chain:'SOL',cls:'TOKEN',stage:1,score:55,conf:0.64,age:1210000,price:0.0912,chg:0.019,liq:148000,vol:61000,adj:58000,buyers:31,nf:9000,wash:0.05,canonical:false,
        reasons:[{code:'LIQ_GROWTH',win:'1H',text:'Net liquidity +$21K, 4 new LPs',z:'2.2',ratio:'1.8'}],
        flags:[{sev:'LOW',text:'Low urgency — initial anomaly only'}],
        reason:'Liquidity building — initial anomaly'}) ];
  }
  componentDidMount(){
    const clockFn=()=>{ const d=new Date(); const p=(n)=>String(n).padStart(2,'0'); this.setState({clock:p(d.getUTCHours())+':'+p(d.getUTCMinutes())+':'+p(d.getUTCSeconds())}); };
    clockFn(); this.clockTimer=setInterval(clockFn,1000);
    this.simTimer=setInterval(()=>this.simTick(),2400/Math.max(1,this.props.simSpeed??2));
    for(let i=0;i<7;i++) this.pushTape(false);
  }
  componentWillUnmount(){ clearInterval(this.clockTimer); clearInterval(this.simTimer); clearTimeout(this.toastTimer); }
  beep(){ try{ const ctx=this.audioCtx||(this.audioCtx=new (window.AudioContext||window.webkitAudioContext)()); const o=ctx.createOscillator(),g=ctx.createGain(); o.connect(g); g.connect(ctx.destination); o.frequency.value=880; g.gain.setValueAtTime(0.08,ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.35); o.start(); o.stop(ctx.currentTime+0.36); }catch(e){} }
  simTick(){
    if(this.props.liveFeed===false) return;
    const r=Math.random;
    this.assets.forEach(a=>{ a.score=Math.max(40,Math.min(97,a.score+(r()-0.48)*0.9)); a.vol*=1+(r()-0.45)*0.03; a.adj*=1+(r()-0.45)*0.03; a.buyers=Math.max(5,Math.round(a.buyers*(1+(r()-0.46)*0.02))); a.chg+=(r()-0.5)*0.004; a.nf*=1+(r()-0.48)*0.04; a.age+=2;
      a.spark.push(Math.max(8,Math.min(100,a.spark[a.spark.length-1]+(r()-0.44)*10))); if(a.spark.length>44)a.spark.shift(); });
    this.pushTape(true);
    const flash=r()<0.3?this.assets[Math.floor(r()*this.assets.length)].id:null;
    this.setState(s=>({tick:s.tick+1,flashId:flash}));
    if(!this.state.toast&&r()<0.05){ const hot=this.assets.filter(x=>x.score>=84); if(hot.length){ const a=hot[Math.floor(r()*hot.length)];
      this.setState({toast:{title:(a.score>=90?'EXCEPTIONAL':'CONFIRMED')+' — '+a.sym+' / '+a.chain,body:'Score '+Math.round(a.score)+', conf '+a.conf.toFixed(2)+'. '+a.reason+'.'}});
      if(this.state.soundOn) this.beep();
      this.toastTimer=setTimeout(()=>this.setState({toast:null}),7000); } }
  }
  pushTape(update){
    const w=()=>{const c='123456789abcdefghjkmnpq';let s='';for(let i=0;i<4;i++)s+=c[Math.floor(Math.random()*c.length)];return s+'…'+c[Math.floor(Math.random()*c.length)]+c[Math.floor(Math.random()*c.length)];};
    const n=(a,b)=>(a+Math.random()*(b-a)).toFixed(0);
    const t=[
      {kind:'SWAP',kc:'#4d8dff',chain:'SOL',text:'$GLYPH buy '+n(800,9000)+' USDC @ 0.0074 · Raydium · '+w()},
      {kind:'RFQ FILL',kc:'#4fc3f7',chain:'RHC',text:'NVDAx $'+n(8,80)+',400 @ 212.'+n(10,90)+' · maker 0x9a…f2 · settled'},
      {kind:'SWAP',kc:'#4d8dff',chain:'BASE',text:'$BSWIRL buy '+n(300,4000)+' USDC · Aerodrome · '+w()},
      {kind:'LIQ+',kc:'#e35ff2',chain:'SOL',text:'$SOLPUP +$'+n(4,30)+'.2K to Meteora pool · LP '+w()},
      {kind:'LIQ WASH',kc:'#ff4fae',chain:'BNB',text:'$MOONVEIL liq cycle #'+n(3,6)+': $18K out 22m after add · flagged'},
      {kind:'BUNDLE',kc:'#ff4fae',chain:'SOL',text:'$KITSUNE cluster: '+n(8,12)+' wallets, one funder 5xQm…c2 · same block'},
      {kind:'REGISTRY',kc:'#f06ee2',chain:'SOL',text:'Known bundler 7pWr…m9Ts bought $DUSKRAT '+n(2,9)+'s after pool init · wash prob raised'},
      {kind:'TRACKED',kc:'#4d8dff',chain:'SOL',text:'Tracked wallet 9hLm…x2Fa added $'+n(2,18)+'K $GLYPH'},
      {kind:'ORACLE',kc:'#b48cff',chain:'RHC',text:'NVDA/USD round '+n(1800,1900)+' · 212.'+n(10,60)+' · fresh '+n(2,9)+'s'},
      {kind:'SWAP',kc:'#ff4fae',chain:'BNB',text:'$MOONVEIL sell '+n(200,3000)+' USDT · Pancake · flagged: cluster-7'},
      {kind:'POOL NEW',kc:'#e35ff2',chain:'SOL',text:'$DUSKRAT init $'+n(4,15)+'.1K · PumpSwap migration · security scan queued'},
      {kind:'TRANSFER',kc:'#8b96b8',chain:'BASE',text:'USDC bridge-in $'+n(20,300)+'K → fresh wallet '+w()},
      {kind:'RFQ FILL',kc:'#4fc3f7',chain:'RHC',text:'AMDx $'+n(4,40)+',100 @ 184.'+n(10,90)+' · maker 0x3c…77 · settled'},
      {kind:'VETO',kc:'#ff4fae',chain:'BNB',text:'$SAFEGEM2 hard veto: honeypot — sell path reverts'}];
    const e=t[Math.floor(Math.random()*t.length)];
    const d=new Date(); const p=(x)=>String(x).padStart(2,'0');
    e.ts=p(d.getUTCHours())+':'+p(d.getUTCMinutes())+':'+p(d.getUTCSeconds()); e.seq=this.tapeSeq++;
    const tape=[e,...this.state.tape].slice(0,9);
    if(update) this.setState({tape}); else this.state.tape=tape;
  }
  fmtUsd(v){ const a=Math.abs(v); const s=v<0?'-':''; if(a>=1e6)return s+'$'+(a/1e6).toFixed(2)+'M'; if(a>=1e3)return s+'$'+(a/1e3).toFixed(1)+'K'; return s+'$'+a.toFixed(0); }
  fmtAge(s){ if(s<3600)return Math.round(s/60)+'m'; if(s<86400)return (s/3600).toFixed(1)+'h'; return Math.round(s/86400)+'d'; }
  fmtPrice(p){ return p>=100?'$'+p.toFixed(2):p>=1?'$'+p.toFixed(3):p>=0.01?'$'+p.toFixed(4):'$'+p.toFixed(p<0.0001?7:6); }
  stageInfo(st){ return [null,{n:'WATCH',bg:'#1a2440',fg:'#a3aed0'},{n:'EMERGING',bg:'#101f42',fg:'#6ea0ff'},{n:'CONFIRMED',bg:'#0e2a5c',fg:'#4d8dff'},{n:'EXCEPTIONAL',bg:'#3a1140',fg:'#f06ee2'}][st]; }
  chainColor(c){ return {SOL:'#8f7bff',BASE:'#3d7bfd',RHC:'#4fc3f7',BNB:'#e8b930'}[c]||'#a3aed0'; }
  clsColor(c){ return {MEME:'#e35ff2',TOKEN:'#a3aed0',STOCK:'#4fc3f7',ETF:'#8fd3ff'}[c]; }
  scoreColor(s){ return s>=90?'#f06ee2':s>=80?'#4d8dff':s>=68?'#6ea0ff':'#a3aed0'; }
  washColor(wp){ return wp>=0.3?'#ff4fae':wp>=0.15?'#e35ff2':'#6b7699'; }
  renderVals(){
    const st=this.state, showAdj=this.props.showAdjusted!==false, live=this.props.liveFeed!==false;
    const nav=(p)=>()=>this.setState({page:p});
    const tabs=[['live','LIVE OPPORTUNITIES'],['detail','ASSET DETAIL'],['rotation','ROTATION'],['wallets','WALLETS'],['social','SOCIAL SCANNER'],['alerts','ALERT CARDS'],['eval','EVALUATION'],['health','SYSTEM HEALTH']].map(([k,label])=>({label,go:nav(k),fg:st.page===k?'#e35ff2':'#8b96b8',line:st.page===k?'#e35ff2':'transparent'}));
    const chip=(label,active,go)=>({label,go,bg:active?'#33124a':'#0a1226',fg:active?'#f06ee2':'#8b96b8',bd:active?'#f06ee2':'#1c2a4d'});
    const views=[['ALL','All'],['WATCHLIST','★ Watchlist'],['CONFIRMED','Confirmed+'],['STOCK','Stock tokens'],['EXPERIMENTAL','Experimental']].map(([k,label])=>chip(label,st.viewF===k,()=>this.setState({viewF:k})));
    const chainFilters=['ALL','SOL','BASE','RHC','BNB'].map(k=>chip(k,st.chainF===k,()=>this.setState({chainF:k})));
    const classFilters=['ALL','MEME','TOKEN','STOCK','ETF'].map(k=>chip(k,st.classF===k,()=>this.setState({classF:k})));
    const cols=[[null,''],['stage','STAGE'],['score','SCORE'],['conf','CONF'],['sym','ASSET'],['chain','CHAIN'],['cls','CLASS'],['age','AGE'],['price','PRICE'],['chg','Δ5M'],['liq','LIQ'],['adj',showAdj?'VOL 5M ADJ':'VOL 5M RAW'],['buyers','BUYERS 5M'],['nf','NET FLOW'],['wash','WASH'],[null,'TREND'],[null,'TOP REASON']];
    const headers=cols.map(([k,label])=>({label,arrow:st.sortKey===k?(st.sortDir<0?' ▼':' ▲'):'',fg:st.sortKey===k?'#e35ff2':'#6b7699',
      sort:k?()=>this.setState(s=>({sortKey:k,sortDir:s.sortKey===k?-s.sortDir:-1})):()=>{}}));
    const filtered=this.assets.filter(a=>{
      if(st.chainF!=='ALL'&&a.chain!==st.chainF)return false;
      if(st.classF!=='ALL'&&a.cls!==st.classF)return false;
      if(st.viewF==='WATCHLIST'&&!st.watch[a.id])return false;
      if(st.viewF==='CONFIRMED'&&a.stage<3)return false;
      if(st.viewF==='STOCK'&&a.cls!=='STOCK'&&a.cls!=='ETF')return false;
      if(st.viewF==='EXPERIMENTAL'&&a.liq>=60000)return false;
      return true; });
    const sorted=[...filtered].sort((a,b)=>{ const k=st.sortKey; const av=a[k],bv=b[k]; if(typeof av==='string')return String(av).localeCompare(String(bv))*st.sortDir; return (av-bv)*st.sortDir; });
    const sevMap={HIGH:{bg:'#45103a',fg:'#ff4fae'},MED:{bg:'#33124a',fg:'#e35ff2'},LOW:{bg:'#1a2440',fg:'#a3aed0'}};
    const rows=sorted.map(a=>{ const si=this.stageInfo(a.stage);
      const tr=a.spark.slice(-14); const tMax=Math.max(...tr),tMin=Math.min(...tr);
      const spMax=Math.max(...a.spark),spMin=Math.min(...a.spark);
      return { open:()=>this.setState(s=>({expandedId:s.expandedId===a.id?null:a.id})),
        goDetail:(e)=>{ if(e&&e.stopPropagation)e.stopPropagation(); this.setState({page:'detail',selectedId:a.id}); },
        star:(e)=>{ if(e&&e.stopPropagation)e.stopPropagation(); this.setState(s=>{ const watch={...s.watch,[a.id]:!s.watch[a.id]}; try{ localStorage.setItem('vs_watchlist',JSON.stringify(watch)); }catch(e){} return {watch}; }); },
        starGlyph:st.watch[a.id]?'★':'☆', starColor:st.watch[a.id]?'#f06ee2':'#3a4568',
        isBundle:!!a.bundle,
        expanded:st.expandedId===a.id,
        trend:tr.map(v=>({h:Math.round(15+(v-tMin)/(tMax-tMin+0.01)*85)+'%',c:v>=tr[0]?'#4d8dff':'#ff4fae'})),
        peekSpark:a.spark.map((v,i)=>({h:Math.round(8+(v-spMin)/(spMax-spMin+0.01)*92)+'%',c:i===a.spark.length-1?'#e35ff2':v>=(a.spark[i-1]??v)?'#2f66d0':'#8a2f7c'})),
        peekReasons:a.reasons.slice(0,3).map(x=>({code:x.code,text:x.text,z:x.z})),
        peekFlags:a.flags.slice(0,2).map(f=>({sev:f.sev,bg:sevMap[f.sev].bg,fg:sevMap[f.sev].fg,text:f.text})),
        anim:st.flashId===a.id?'vsFlash 1.2s ease-out':'none',
        stage:si.n,stageBg:si.bg,stageFg:si.fg, score:Math.round(a.score), scoreColor:this.scoreColor(a.score), conf:a.conf.toFixed(2),
        sym:a.sym,name:a.name, chain:a.chain,chainColor:this.chainColor(a.chain), cls:a.cls,clsColor:this.clsColor(a.cls),
        age:this.fmtAge(a.age), price:this.fmtPrice(a.price), chg:(a.chg>=0?'+':'')+(a.chg*100).toFixed(1)+'%', chgColor:a.chg>=0?'#4d8dff':'#ff4fae',
        liq:this.fmtUsd(a.liq), vol:this.fmtUsd(showAdj?a.adj:a.vol), volTag:showAdj&&a.adj<a.vol*0.95?'adj':'', buyers:a.buyers,
        netflow:this.fmtUsd(a.nf), nfColor:a.nf>=0?'#4d8dff':'#ff4fae', wash:Math.round(a.wash*100)+'%', washColor:this.washColor(a.wash), reason:a.reason }; });
    const bundled=this.assets.filter(a=>a.bundle);
    const sel=this.assets.find(a=>a.id===st.selectedId)||this.assets[0];
    const d=this.detailVals(sel,showAdj);
    const counts=[0,0,0,0,0]; this.assets.forEach(a=>counts[a.stage]++);
    const stats=[{label:'ACTIVE ALERTS',value:String(this.assets.length),color:'#ffffff'},{label:'CONFIRMED+',value:String(counts[3]+counts[4]),color:'#4d8dff'},{label:'EXCEPTIONAL',value:String(counts[4]),color:'#f06ee2'},{label:'AVG ORGANIC PROB',value:'0.81',color:'#dfe6f6'},{label:'PRECISION@20 · 24H',value:'0.62',color:'#e35ff2'}];
    const tape=st.tape.map((e,i)=>({...e,kindColor:e.kc,chainColor:this.chainColor(e.chain),anim:i===0?'vsFlash 1s ease-out':'none'}));
    const chains=[{name:'SOL',dot:'#4d8dff',lat:'0.4s'},{name:'BASE',dot:'#4d8dff',lat:'0.6s'},{name:'RHC',dot:'#4d8dff',lat:'0.7s'},{name:'BNB',dot:'#e35ff2',lat:'1.8s'}];
    return { clock:st.clock, chains, tabs,
      liveDotColor:live?'#4d8dff':'#e35ff2', liveDotAnim:live?'vsBlink 1.4s infinite':'none', liveLabel:live?'LIVE':'PAUSED',
      isLive:st.page==='live', isDetail:st.page==='detail', isRotation:st.page==='rotation', isEval:st.page==='eval', isHealth:st.page==='health',
      goLive:nav('live'), stats, headers, rows, tape, d, rowCount:rows.length,
      views, chainFilters, classFilters,
      isAlerts:st.page==='alerts', isSocial:st.page==='social', isWallets:st.page==='wallets',
      toggleSound:()=>this.setState(s=>({soundOn:!s.soundOn})),
      soundLabel:st.soundOn?'SOUND ON':'SOUND OFF', soundFg:st.soundOn?'#f06ee2':'#6b7699',
      toastVisible:!!st.toast, toastTitle:st.toast?st.toast.title:'', toastBody:st.toast?st.toast.body:'',
      dismissToast:()=>this.setState({toast:null}),
      chepeStats:[{k:'Hard vetoes today',v:'14'},{k:'Honeypots blocked',v:'6'},{k:'Fake stock tokens',v:'2'},{k:'Wash clusters flagged',v:'5'}],
      chepeLast:'Last veto — $SAFEGEM2 (BNB): honeypot, sell path reverts. Chepe says no.',
      ...this.chepePickVals(),
      ...this.walletsVals(), ...this.socialVals(), ...this.alertsVals(), ...this.rotationVals(), ...this.evalVals(), ...this.healthVals() };
  }
  saveRegistry(reg){ this.setState({registry:reg}); try{ localStorage.setItem('vs_wallet_registry',JSON.stringify(reg)); }catch(e){} }
  walletsVals(){
    const st=this.state;
    const tagStyle=(t)=>({BUNDLER:{bg:'#45103a',fg:'#ff4fae'},'LIQ WASHER':{bg:'#45103a',fg:'#ff4fae'},'WASH TRADER':{bg:'#33124a',fg:'#e35ff2'},TRACKED:{bg:'#0e2a5c',fg:'#4d8dff'}}[t]||{bg:'#1a2440',fg:'#a3aed0'});
    const registry=st.registry.map((w,i)=>({...w,...tagStyle(w.tag),
      srcLabel:w.auto?'AUTO':'MANUAL', srcC:w.auto?'#f06ee2':'#4d8dff',
      hitsTxt:w.hits?w.hits+' incidents':'—',
      chainColor:this.chainColor(w.chain),
      remove:()=>this.saveRegistry(st.registry.filter((_,j)=>j!==i))}));
    const flaggedCount=st.registry.filter(w=>w.auto).length;
    return { registry, walletInput:st.walletInput, walletLabel:st.walletLabel,
      onWalletInput:(e)=>this.setState({walletInput:e.target.value}),
      onWalletLabel:(e)=>this.setState({walletLabel:e.target.value}),
      addWallet:()=>{ const a=st.walletInput.trim(); if(!a)return;
        this.saveRegistry([{addr:a.length>12?a.slice(0,4)+'…'+a.slice(-4):a, chain:a.startsWith('0x')?'EVM':'SOL', label:st.walletLabel.trim()||'Tracked wallet', tag:'TRACKED', auto:false, first:'added just now', hits:0, note:'Manually tracked — activity will appear in the event tape and wallet-flow features.'},...st.registry]);
        this.setState({walletInput:'',walletLabel:''}); },
      walletStats:[
        {label:'REGISTRY SIZE',value:String(st.registry.length),color:'#ffffff'},
        {label:'AUTO-FLAGGED',value:String(flaggedCount),color:'#ff4fae'},
        {label:'MANUALLY TRACKED',value:String(st.registry.length-flaggedCount),color:'#4d8dff'},
        {label:'BLOCKED FROM ORGANIC VOL',value:'$212K / 24h',color:'#f06ee2'},
        {label:'REPEAT OFFENDERS (2+ TOKENS)',value:'3',color:'#ff4fae'}] };
  }
  bubbleVals(a){
    if(!a.bundle) return {hasBubbles:false,bubbles:[],bundleStats:[],bubbleLinks:[]};
    const r=this.srand(this.h(a.id+'bub'));
    const bubbles=[]; const cx=50,cy=50;
    // cluster of bundled wallets around funder + independent holders
    bubbles.push({x:'30%',y:'42%',s:'26px',c:'#ff4fae',op:'1',label:'FUNDER'});
    for(let i=0;i<a.bundle.sameBlock;i++){ const ang=r()*6.28, d=12+r()*14;
      bubbles.push({x:(30+Math.cos(ang)*d)+'%',y:(42+Math.sin(ang)*d*0.8)+'%',s:(8+r()*8)+'px',c:'#ff4fae',op:'0.75',label:''}); }
    for(let i=0;i<16;i++){ bubbles.push({x:(58+r()*36)+'%',y:(12+r()*76)+'%',s:(6+r()*13)+'px',c:'#4d8dff',op:'0.65',label:''}); }
    bubbles.push({x:'72%',y:'30%',s:'22px',c:'#8fd3ff',op:'0.9',label:'POOL'});
    const b=a.bundle;
    return { hasBubbles:true, bubbles,
      bundleStats:[
        {k:'Bundle probability',v:b.prob.toFixed(2),c:b.prob>=0.5?'#ff4fae':'#e35ff2'},
        {k:'Same-block launch buyers',v:b.sameBlock+' of '+b.launchBuyers,c:'#ff4fae'},
        {k:'Common funding source',v:b.funder,c:'#ffffff'},
        {k:'Cluster supply share',v:b.supplyPct+'%',c:b.supplyPct>=30?'#ff4fae':'#e35ff2'},
        {k:'Liquidity wash cycles',v:b.liqCycles+'× ('+this.fmtUsd(b.liqCycleUsd)+' each)',c:'#ff4fae'}] };
  }
  detailVals(a,showAdj){
    const si=this.stageInfo(a.stage); const raw=Math.round(a.score+ (a.wash*30+ (a.flags.some(f=>f.sev==='HIGH')?6:2)));
    const subNames=[['Volume anomaly','13%'],['Trade activity','8%'],['Buyer breadth','12%'],['Net demand','10%'],['Liquidity / executability','14%'],['Price confirmation','8%'],['Holder growth','7%'],['Wallet quality','8%'],['Capital rotation','8%'],['Cross-venue confirm','4%'],['Oracle confirmation','3%'],['Data quality','5%'],['Organic probability','—'],['Contract safety','—']];
    const r=this.srand(this.h(a.id+'s'));
    const subs=subNames.map(([k,w],i)=>{ let v=Math.max(15,Math.min(98,Math.round(a.score+(r()-0.5)*30)));
      if(k==='Oracle confirmation') v=a.cls==='STOCK'||a.cls==='ETF'?95:0;
      if(k==='Organic probability') v=Math.round((1-a.wash)*100);
      if(k==='Contract safety') v=a.canonical?96:Math.max(30,90-Math.round(a.wash*80));
      return {k,w,v,pct:v+'%',c:v>=75?'#4d8dff':v>=50?'#e35ff2':v>0?'#ff4fae':'#223052'}; });
    const spMax=Math.max(...a.spark), spMin=Math.min(...a.spark);
    const spark=a.spark.map((v,i)=>({h:Math.round(8+(v-spMin)/(spMax-spMin+0.01)*92)+'%',c:i===a.spark.length-1?'#e35ff2':v>=(a.spark[i-1]??v)?'#2f66d0':'#8a2f7c'}));
    const market=[
      {k:'MKT CAP',v:this.fmtUsd(a.liq*(a.cls==='STOCK'||a.cls==='ETF'?900:14)),c:'#dfe6f6'},{k:'LIQUIDITY',v:this.fmtUsd(a.liq),c:'#dfe6f6'},
      {k:showAdj?'VOL 5M ADJ':'VOL 5M RAW',v:this.fmtUsd(showAdj?a.adj:a.vol),c:'#dfe6f6'},{k:'NET BUY 5M',v:this.fmtUsd(a.nf),c:a.nf>=0?'#4d8dff':'#ff4fae'},
      {k:'BUYERS 5M',v:String(a.buyers),c:'#dfe6f6'},{k:'WASH PROB',v:Math.round(a.wash*100)+'%',c:this.washColor(a.wash)},
      {k:'IMPACT $10K',v:(a.liq>1e6?'0.1':a.liq>3e5?'0.9':a.liq>1e5?'2.4':'8.1')+'%',c:a.liq>1e5?'#dfe6f6':'#ff4fae'},{k:'ORGANIC PROB',v:(1-a.wash).toFixed(2),c:'#dfe6f6'}];
    const outcomes=[{k:'15M',v:'+3.1%',c:'#4d8dff'},{k:'1H',v:'PENDING',c:'#6b7699'},{k:'4H',v:'PENDING',c:'#6b7699'},{k:'12H',v:'PENDING',c:'#6b7699'},{k:'24H',v:'PENDING',c:'#6b7699'}];
    const sev={HIGH:{bg:'#45103a',fg:'#ff4fae'},MED:{bg:'#33124a',fg:'#e35ff2'},LOW:{bg:'#1a2440',fg:'#a3aed0'}};
    const oracle=a.oracle?[{k:'Underlying',v:a.tick,c:'#4fc3f7'},{k:'Feed',v:a.oracle.feed,c:'#dfe6f6'},{k:'Freshness',v:a.oracle.fresh,c:'#4d8dff'},{k:'Exec↔oracle dev',v:a.oracle.dev,c:'#4d8dff'},{k:'Sequencer',v:a.oracle.seq,c:'#4d8dff'},{k:'UI multiplier',v:a.oracle.mult,c:'#dfe6f6'},{k:'Pending mult',v:a.oracle.pend,c:'#6b7699'},{k:'Ref session',v:a.oracle.session,c:'#4d8dff'},{k:'Corp action',v:a.oracle.corp,c:'#6b7699'},{k:'Contract',v:'CANONICAL',c:'#4d8dff'}]:[];
    return { sym:a.sym,name:a.name,stage:si.n,stageBg:si.bg,stageFg:si.fg,cls:a.cls,clsColor:this.clsColor(a.cls),canonical:a.canonical,
      score:Math.round(a.score),scoreColor:this.scoreColor(a.score),conf:a.conf.toFixed(2),raw:raw,penalty:raw-Math.round(a.score),
      price:this.fmtPrice(a.price),chg:(a.chg>=0?'+':'')+(a.chg*100).toFixed(1)+'%',chgColor:a.chg>=0?'#4d8dff':'#ff4fae',
      spark,market,outcomes,subs, isStock:!!a.oracle, oracle, ...this.bubbleVals(a),
      reasons:a.reasons.map(x=>({code:x.code,win:x.win,text:x.text,z:x.z,ratio:x.ratio})),
      flags:a.flags.map(f=>({sev:f.sev,bg:sev[f.sev].bg,fg:sev[f.sev].fg,text:f.text})),
      stages:['WATCH','EMERGING','CONFIRMED','EXCEPTIONAL'].map((n,i)=>{ const idx=i+1, s2=this.stageInfo(idx), on=a.stage>=idx;
        return {n,bg:on?s2.bg:'transparent',fg:on?s2.fg:'#3a4568',bd:on?s2.fg:'#1c2a4d',t:on?['14:07','14:19','14:26','14:31'][i]:'—',hasNext:i<3,lineC:a.stage>idx?'#e35ff2':'#1c2a4d'}; }),
      hysteresis:'Hysteresis band ±3 pts — entered '+si.n+' at '+[0,55,68,80,90][a.stage]+', demotes below '+([0,55,68,80,90][a.stage]-3)+'. Stage never flips on 1–2 pt score noise.' };
  }
  rotationVals(){
    const co=[['Semiconductor stock tokens',2.41],['Solana new launches <24h',1.12],['ETF tokens',0.61],['Base DeFi',0.34],['Stablecoin idle → deployed',-1.87],['AI narrative tokens',-1.41],['BNB memecoins',-0.62],['Tech stock tokens (ex-semis)',-0.58]];
    const mx=2.5;
    const cohorts=co.map(([name,v])=>({name,val:(v>=0?'+':'−')+'$'+Math.abs(v).toFixed(2)+'M',color:v>=0?'#4d8dff':'#ff4fae',posW:v>0?Math.round(v/mx*100)+'%':'0%',negW:v<0?Math.round(-v/mx*100)+'%':'0%'}));
    const edges=[
      {src:'AI tokens (SOL)',dst:'$GLYPH',wallets:'96',usd:'$1.24M',smart:'22%',conf:'0.88'},
      {src:'Tech stock tokens',dst:'NVDAx',wallets:'64',usd:'$0.98M',smart:'31%',conf:'0.84'},
      {src:'Tech stock tokens',dst:'AMDx',wallets:'41',usd:'$0.44M',smart:'28%',conf:'0.79'},
      {src:'Single-stock tokens',dst:'QQQx',wallets:'38',usd:'$0.52M',smart:'19%',conf:'0.72'},
      {src:'Stablecoin reserves',dst:'SOL launches <24h',wallets:'212',usd:'$1.61M',smart:'11%',conf:'0.81'},
      {src:'BNB memecoins',dst:'Base DeFi',wallets:'27',usd:'$0.21M',smart:'9%',conf:'0.58'},
      {src:'NVDAx profits',dst:'$SOLPUP',wallets:'14',usd:'$0.11M',smart:'36%',conf:'0.61'}];
    const rotStats=[
      {label:'CRYPTO → RWA (1H)',value:'+$1.42M',color:'#4fc3f7',sub:'strongest: semis exposure'},
      {label:'RWA → CRYPTO (1H)',value:'+$0.31M',color:'#e35ff2',sub:'NVDAx profits → SOL memes'},
      {label:'STABLECOIN DEPLOYMENT',value:'$3.08M',color:'#4d8dff',sub:'212 wallets, median hold 6m'},
      {label:'BRIDGE → DEX (1H)',value:'$0.87M',color:'#dfe6f6',sub:'Base +$0.5M · RHC +$0.3M'}];
    const classFlows=[
      {name:'Crypto majors',val:'−$0.9M',color:'#ff4fae',pct:'36%'},
      {name:'Memecoins / launches',val:'+$1.5M',color:'#4d8dff',pct:'60%'},
      {name:'Stock tokens',val:'+$1.4M',color:'#4fc3f7',pct:'56%'},
      {name:'ETF tokens',val:'+$0.5M',color:'#8fd3ff',pct:'20%'}];
    const usdN=[1.24,0.98,0.44,0.52,1.61,0.21,0.11];
    const flows=edges.map((e,i)=>({...e,label:e.usd+' \u00b7 '+e.wallets+'w \u00b7 '+e.smart,th:Math.round(10+usdN[i]/1.61*22)+'px',color:i%2?'#e35ff2':'#4d8dff'}));
    return {cohorts,edges,flows,rotStats,classFlows};
  }
  evalVals(){
    const evalStats=[
      {label:'ALERTS — 30D',value:'1,284',color:'#ffffff',sub:'42.8 / day avg'},
      {label:'PRECISION@20 / DAY',value:'0.62',color:'#e35ff2',sub:'target ≥ 0.55'},
      {label:'MEDIAN 24H RETURN',value:'+4.7%',color:'#4d8dff',sub:'confirmed+ stages'},
      {label:'LIQ-COLLAPSE RATE',value:'2.1%',color:'#4d8dff',sub:'threshold < 5%'},
      {label:'MEDIAN LEAD TIME',value:'11m',color:'#dfe6f6',sub:'alert → local high'}];
    const si=this.stageInfo.bind(this);
    const rowsD=[[1,412,'0.31','+0.8%','+1.2%','+5.1%','4.8%'],[2,631,'0.48','+1.9%','+3.4%','+9.2%','2.4%'],[3,214,'0.66','+2.8%','+6.1%','+14.0%','0.9%'],[4,27,'0.78','+4.1%','+9.8%','+22.6%','0.0%']];
    const stageRows=rowsD.map(([stg,n,prec,r1,r24,mfe,rug])=>{ const s=si(stg); return {stage:s.n,bg:s.bg,fg:s.fg,n:String(n),prec,pc:parseFloat(prec)>=0.6?'#4d8dff':parseFloat(prec)>=0.45?'#e35ff2':'#a3aed0',r1,r1c:'#4d8dff',r24,r24c:'#4d8dff',mfe,rug,rugc:parseFloat(rug)>3?'#ff4fae':'#4d8dff'}; });
    const calib=[['50–60',52,48],['60–70',63,58],['70–80',74,71],['80–90',84,80],['90+',92,88]].map(([bucket,pred,real])=>({bucket,predW:pred+'%',realW:real+'%',txt:pred+'% → '+real+'%'}));
    const fpCauses=[{cause:'Wash volume passed organic filter',share:'26%'},{cause:'Liquidity pulled inside 1h',share:'21%'},{cause:'Single-maker RFQ dominance',share:'14%'},{cause:'Session-baseline misfit (weekend)',share:'12%'},{cause:'Stale oracle divergence',share:'8%'},{cause:'Other',share:'19%'}];
    return {evalStats,stageRows,calib,fpCauses};
  }
  healthVals(){
    const healthStats=[
      {label:'EVENT → FEATURE P50',value:'1.8s',color:'#4d8dff',sub:'SLO ≤ 5s'},
      {label:'FEATURE → ALERT P50',value:'3.2s',color:'#4d8dff',sub:'SLO ≤ 10s'},
      {label:'EVENTS / MIN',value:'14,208',color:'#ffffff',sub:'4 chains, 11 feeds'},
      {label:'DROPPED — 1H',value:'0',color:'#4d8dff',sub:'12 dupes deduplicated'},
      {label:'REORG CORRECTIONS',value:'2',color:'#e35ff2',sub:'BNB depth-1, resolved'}];
    const providers=[
      ['Helius LaserStream','SOL','OK','#4d8dff','0.41s','primary swap stream'],
      ['Yellowstone gRPC','SOL','OK','#4d8dff','0.38s','failover, warm'],
      ['QuickNode Streams','BASE','OK','#4d8dff','0.64s','logs + receipts'],
      ['QuickNode Streams','BNB','DEGRADED','#e35ff2','1.82s','rate-limited, backoff active'],
      ['Alchemy RPC/WS','RHC','OK','#4d8dff','0.71s','primary RHC feed'],
      ['Self-hosted Nitro node','RHC','SYNCING','#e35ff2','—','archive backfill 94%'],
      ['Chainlink feeds','RHC','OK','#4d8dff','—','31 feeds, all fresh'],
      ['Birdeye','SOL','OK','#4d8dff','—','enrichment only'],
      ['DEX Screener','MULTI','OK','#4d8dff','—','RHC unsupported → disabled'],
      ['GoPlus Security','EVM','OK','#4d8dff','—','BASE, BNB, RHC'],
      ['GeckoTerminal','MULTI','PARTIAL','#e35ff2','—','no RHC coverage detected']];
    const chainSync=[
      {chain:'SOLANA',color:'#8f7bff',head:'slot 328,441,207',fin:'confirmed',finC:'#4d8dff',extraK:'skip rate',extra:'0.2%',extraC:'#4d8dff',lag:'0.4s'},
      {chain:'BASE',color:'#3d7bfd',head:'block 32,118,554',fin:'safe',finC:'#4d8dff',extraK:'reorgs 24h',extra:'0',extraC:'#4d8dff',lag:'0.6s'},
      {chain:'ROBINHOOD',color:'#4fc3f7',head:'block 8,442,013',fin:'L2 final',finC:'#4d8dff',extraK:'sequencer',extra:'UP · settle 42s',extraC:'#4d8dff',lag:'0.7s'},
      {chain:'BNB',color:'#e8b930',head:'block 51,204,118',fin:'finalized',finC:'#4d8dff',extraK:'reorgs 24h',extra:'2 (d1)',extraC:'#e35ff2',lag:'1.8s'}];
    const pipeline=[
      {k:'Queue lag (bus)',v:'0.3s',c:'#4d8dff'},{k:'Duplicate events deduped',v:'12',c:'#dfe6f6'},{k:'Out-of-order reordered',v:'184',c:'#dfe6f6'},
      {k:'Dead-letter queue',v:'0',c:'#4d8dff'},{k:'Oracle staleness alerts',v:'0',c:'#4d8dff'},{k:'Provider disagreement >1%',v:'1 pair',c:'#e35ff2'},
      {k:'Gap backfills running',v:'1 (BNB)',c:'#e35ff2'},{k:'ClickHouse / PG / Redis',v:'OK / OK / OK',c:'#4d8dff'}];
    return {healthStats,providers:providers.map(([name,chain,status,dot,lat,note])=>({name,chain,chainColor:this.chainColor(chain),status,dot,lat,note})),chainSync,pipeline};
  }
  chepePickVals(){
    const day=new Date().toISOString().slice(0,10);
    const cands=this.assets.filter(a=>a.wash<0.15&&a.stage>=2);
    const a=cands[this.h('chepe'+day)%cands.length];
    const quips=['Clean wash score, real buyers. Chepe approves.','Breadth is growing and the LPs are staying. Good dog energy.','Oracle fresh, contract canonical. Chepe sniffed it thoroughly.','Liquidity keeps arriving and nobody is rugging. Rare.'];
    return { chepePickSym:a.sym, chepePickChain:a.chain, chepePickChainColor:this.chainColor(a.chain),
      chepePickScore:String(Math.round(a.score)),
      chepePickQuip:quips[this.h(a.id+day)%quips.length],
      openChepePick:()=>this.setState({page:'detail',selectedId:a.id}) };
  }
  socialVals(){
    const jit=(base,amp,seed)=>{ const r=this.srand(this.h(seed)+Math.floor(this.state.tick/3)); return Math.round(base+(r()-0.5)*amp); };
    const goTo=(id)=>()=>this.setState({page:'detail',selectedId:id});
    const kw=[
      {word:'"glyph"',m:jit(1840,120,'glyph'),base:'12.4×',z:'7.1',authors:jit(920,60,'ga'),bot:'9%',match:'MATCHED',mc:'#4d8dff',mBg:'#0e2a5c',token:'$GLYPH · SOL',note:'keyword spike led onchain volume by 11m',go:goTo('glyph'),click:true},
      {word:'"stock tokens"',m:jit(1210,80,'stok'),base:'4.8×',z:'4.9',authors:jit(740,40,'sa'),bot:'6%',match:'MATCHED',mc:'#4fc3f7',mBg:'#16406e',token:'NVDAx, AMDx · RHC',note:'semis narrative — aligns with RFQ rotation',go:goTo('nvdax'),click:true},
      {word:'"solpup"',m:jit(690,60,'solp'),base:'5.2×',z:'4.1',authors:jit(410,30,'spa'),bot:'14%',match:'MATCHED',mc:'#4d8dff',mBg:'#0e2a5c',token:'$SOLPUP · SOL',note:'aligned — confirmed expansion onchain',go:goTo('solpup'),click:true},
      {word:'"kitsune"',m:jit(880,90,'kits'),base:'8.9×',z:'4.6',authors:jit(190,20,'ka'),bot:'61%',match:'SHILL RISK',mc:'#ff4fae',mBg:'#45103a',token:'$KITSUNE · SOL',note:'high bot share mirrors 0.34 wash prob onchain',go:goTo('kitsune'),click:true},
      {word:'"duskrat"',m:jit(340,50,'dusk'),base:'NEW',z:'—',authors:jit(210,25,'da'),bot:'12%',match:'JUST LAUNCHED',mc:'#e35ff2',mBg:'#33124a',token:'pool init 5m ago · PumpSwap',note:'chatter started 22m BEFORE pool creation',go:null,click:false},
      {word:'"robinhood chain"',m:jit(520,40,'rhc'),base:'2.1×',z:'2.6',authors:jit(380,25,'ra'),bot:'4%',match:'CHAIN-LEVEL',mc:'#a3aed0',mBg:'#1a2440',token:'RHC cohort',note:'broad chain narrative, no single asset',go:null,click:false},
      {word:'"moonveil"',m:jit(410,60,'moon'),base:'6.4×',z:'3.2',authors:jit(90,15,'ma'),bot:'74%',match:'SHILL RISK',mc:'#ff4fae',mBg:'#45103a',token:'$MOONVEIL · BNB',note:'74% bot share + 0.58 wash prob — coordinated',go:goTo('moonveil'),click:true}];
    const keywords=kw.map(k=>({...k,m:String(k.m),authors:String(k.authors),cursor:k.click?'pointer':'default',go:k.go||(()=>{}),botC:parseInt(k.bot)>=40?'#ff4fae':parseInt(k.bot)>=15?'#e35ff2':'#6b7699'}));
    const early=[
      {term:'"vaporeum"',state:'PRE-LAUNCH',sc:'#e35ff2',first:'first seen 6h ago',m:'214 mentions · 38 authors',body:'No contract found on any monitored chain. 3 teaser accounts created same day, cross-posting identical art. Deployer-linked wallet funded on Base 2h ago — watching factory events.',risk:'Coordinated teaser pattern — could be pre-launch seeding or a rug setup.'},
      {term:'"helios perps"',state:'PRE-LAUNCH',sc:'#e35ff2',first:'first seen 2d ago',m:'1,120 mentions · 610 authors',body:'Protocol announcement with audited contracts, no token yet. Mentions of "points" and "airdrop" accelerating 3.4×/day. Governance contract deployed on Base yesterday.',risk:'Token-less protocols often precede a token event — organic author base.'},
      {term:'"$MERIDIAN"',state:'STEALTH DEPLOYED',sc:'#4fc3f7',first:'first seen 9h ago',m:'96 mentions · 41 authors',body:'Contract deployed on Solana 14h ago, zero liquidity added. Small accounts referencing the mint address directly. Deployer previously shipped 2 clean launches.',risk:'Matches "launched but quiet" pattern — auto-alert armed on first liquidity add.'}];
    const socialStats=[
      {label:'POSTS SCANNED / MIN',value:'8,420',color:'#ffffff'},{label:'TRACKED KEYWORDS',value:'312',color:'#dfe6f6'},
      {label:'MATCHED TO TOKENS',value:'184',color:'#4d8dff'},{label:'UNMATCHED / EARLY',value:'11',color:'#e35ff2'},
      {label:'MEDIAN SOCIAL LEAD',value:'9m',color:'#f06ee2'}];
    return {keywords,early,socialStats};
  }
  alertsVals(){
    const acards=[
      {stage:'EXCEPTIONAL',stageBg:'#3a1140',stageFg:'#f06ee2',sym:'$GLYPH',chain:'SOLANA',chainColor:'#8f7bff',
       title:'EXCEPTIONAL — $GLYPH / SOLANA — Score 91, conf 0.91',
       body:'Adjusted 5-minute volume is 9.1× baseline (robust z 6.2). Unique buyers up 4.0× — 71% first-time asset buyers. Net liquidity +$118K across 3 pools with 14 new LPs. Stablecoin rotation-in from 96 wallets exiting the AI cohort.',
       risks:'Top-10 adjusted holders own 29%; token under 2h old (experimental baselines).',
       buttons:['Open dashboard','Solscan','Mute 1h'],ts:'14:32:08',id:'alert a-7f21',slug:'glyph',
       fields:[{k:'SCORE',v:'91',c:'#f06ee2'},{k:'CONF',v:'0.91',c:'#ffffff'},{k:'VOL 5M ADJ',v:'$1.69M',c:'#4d8dff'},{k:'BUYERS 5M',v:'412',c:'#4d8dff'},{k:'LIQUIDITY',v:'$412K',c:'#ffffff'},{k:'WASH PROB',v:'6%',c:'#a3aed0'}]},
      {stage:'CONFIRMED',stageBg:'#0e2a5c',stageFg:'#4d8dff',sym:'NVDAx',chain:'ROBINHOOD CHAIN',chainColor:'#4fc3f7',
       title:'CONFIRMED ROTATION — NVDA STOCK TOKEN — Score 84, conf 0.87',
       body:'Executed RFQ volume is 5.1× its session-adjusted baseline; unique takers up 2.7×. Capital is rotating from the tech-token cohort into semiconductors. Executions within 0.42% of Chainlink; contract canonical, oracle fresh, no multiplier pending.',
       risks:'61% of recent RFQ volume filled by one maker.',
       buttons:['Open dashboard','Explorer','Mute 1h'],ts:'14:29:41',id:'alert a-7f1d',slug:'nvdax',
       fields:[{k:'SCORE',v:'84',c:'#4d8dff'},{k:'CONF',v:'0.87',c:'#ffffff'},{k:'RFQ VOL 15M',v:'$944K',c:'#4d8dff'},{k:'TAKERS',v:'151',c:'#4d8dff'},{k:'ORACLE DEV',v:'0.42%',c:'#4d8dff'},{k:'MAKER CONC',v:'61%',c:'#ff4fae'}]}];
    const pushBody='$GLYPH / SOLANA hit EXCEPTIONAL (91). Vol 9.1×, buyers 4.0×, liq +$118K. Click to open the live feed.';
    const jsonLines=['{','  "alert_id": "a-7f21",','  "stage": "exceptional",','  "chain": "solana",','  "token_address": "GLyPh…9xQz",','  "final_score": 91,','  "confidence": 0.91,','  "organic_activity_probability": 0.94,','  "signal_families": ["volume", "breadth",','    "liquidity", "rotation"],','  "reasons": [{ "code": "VOL_ANOM_5M",','    "robust_z": 6.2, "ratio": 9.1 }, …],','  "risk": { "wash_probability": 0.06,','    "hard_veto": false },','  "links": { "dashboard": "…", "solscan": "…" }','}'];
    return {acards,pushBody,jsonLines};
  }
  render(){ const v=this.renderVals(); return (
      <>
      <style>{GLOBAL_CSS}</style>
<div style={css("font-family:'Poppins',sans-serif;font-size:12px;background:linear-gradient(180deg,#03060f 0%,#081736 55%,#0c2b63 140%);min-height:100vh;display:flex;flex-direction:column", {v})}><div style={css("display:flex;align-items:center;gap:16px;height:46px;padding:0 14px;background:#0a1226;border-bottom:1px solid #1c2a4d;flex-shrink:0", {v})}><div style={css("display:flex;align-items:center;gap:10px", {v})}><img src="/assets/vibe-logo.png" alt="Vibe" style={css("height:30px;display:block;border-radius:6px", {v})} /><div style={css("flex-shrink:0;white-space:nowrap", {v})}><div style={css("font-weight:800;letter-spacing:0.2px;font-size:14px;color:#ffffff", {v})}>Screener</div><div style={css("font-size:8.5px;letter-spacing:1.8px;color:#8b96b8", {v})}>ONCHAIN MARKET MONITOR</div></div></div><div style={css("width:1px;height:24px;background:#1c2a4d", {v})}></div><div style={css("display:flex;gap:8px", {v})}>{(v.chains || []).map((c, i) => (<React.Fragment key={i}>
<div style={css("display:flex;align-items:center;gap:5px;padding:3px 8px;background:#101c38;border:1px solid #1c2a4d;border-radius:10px;white-space:nowrap;overflow:hidden", {v, c})}><div style={css("width:6px;height:6px;border-radius:50%;background:{{ c.dot }};flex-shrink:0", {v, c})}></div><span style={css("font-size:10px;font-weight:600;color:#b6c2de", {v, c})}>{c.name}</span><span style={css("font-size:9px;color:#6b7699", {v, c})}>{c.lat}</span></div>
      </React.Fragment>))}</div><div style={css("flex:1", {v})}></div><div style={css("padding:3px 9px;border:1px solid #6f4fd8;color:#b48cff;font-size:10px;font-weight:600;letter-spacing:1px;border-radius:10px;white-space:nowrap;flex-shrink:0", {v})}>REGIME: SELECTIVE ROTATION</div><div style={css("font-size:10px;color:#8b96b8;white-space:nowrap;flex-shrink:0", {v})}>ALERTS 24H <span style={css("color:#ffffff;font-weight:600", {v})}>47</span></div><div style={css("font-size:11px;color:#b6c2de;white-space:nowrap;flex-shrink:0", {v})}>{v.clock} UTC</div><div className="h3eb549cf" onClick={v.toggleSound} style={css("padding:3px 10px;border:1px solid #1c2a4d;border-radius:999px;font-size:9px;font-weight:700;letter-spacing:1px;cursor:pointer;color:{{ soundFg }}", {v})}>{v.soundLabel}</div><div style={css("display:flex;align-items:center;gap:5px", {v})}><div style={css("width:7px;height:7px;border-radius:50%;background:{{ liveDotColor }};animation:{{ liveDotAnim }}", {v})}></div><span style={css("font-size:10px;font-weight:700;letter-spacing:1px;color:{{ liveDotColor }}", {v})}>{v.liveLabel}</span></div></div><div style={css("display:flex;gap:2px;padding:0 14px;background:#0d1117;border-bottom:1px solid #1c2a4d;flex-shrink:0", {v})}>{(v.tabs || []).map((t, i) => (<React.Fragment key={i}>
<div className="h3eb549cf" onClick={t.go} style={css("padding:8px 16px;font-size:11px;font-weight:600;letter-spacing:1.2px;cursor:pointer;color:{{ t.fg }};border-bottom:2px solid {{ t.line }}", {v, t})}>{t.label}</div>
    </React.Fragment>))}<a className="h3eb549cf" href="Architecture Handoff.dc.html" style={css("padding:8px 16px;font-size:11px;font-weight:600;letter-spacing:1.2px;color:#8b96b8;border-bottom:2px solid transparent;text-decoration:none", {v})}>DOCS ↗</a></div>{v.isLive && (<>
<div data-screen-label="Live opportunities" style={css("flex:1;display:flex;flex-direction:column;min-height:0", {v})}><div style={css("display:flex;gap:10px;padding:10px 14px;flex-shrink:0", {v})}>{(v.stats || []).map((s, i) => (<React.Fragment key={i}>
<div style={css("flex:1;background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:8px 12px", {v, s})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8", {v, s})}>{s.label}</div><div style={css("font-size:17px;font-weight:600;margin-top:2px;color:{{ s.color }}", {v, s})}>{s.value}</div></div>
        </React.Fragment>))}</div><div style={css("display:flex;align-items:center;gap:6px;padding:0 14px 10px;flex-shrink:0;flex-wrap:wrap", {v})}><span style={css("font-size:9px;letter-spacing:1px;color:#6b7699;font-weight:600", {v})}>VIEW</span>{(v.views || []).map((v, i) => (<React.Fragment key={i}>
<div className="h3eb549cf" onClick={v.go} style={css("padding:4px 12px;border-radius:999px;font-size:10px;font-weight:600;cursor:pointer;background:{{ v.bg }};color:{{ v.fg }};border:1px solid {{ v.bd }}", {v, v})}>{v.label}</div>
        </React.Fragment>))}<div style={css("width:1px;height:18px;background:#1c2a4d;margin:0 4px", {v})}></div>{(v.chainFilters || []).map((v, i) => (<React.Fragment key={i}>
<div className="h3eb549cf" onClick={v.go} style={css("padding:4px 12px;border-radius:999px;font-size:10px;font-weight:600;cursor:pointer;background:{{ v.bg }};color:{{ v.fg }};border:1px solid {{ v.bd }}", {v, v})}>{v.label}</div>
        </React.Fragment>))}<div style={css("width:1px;height:18px;background:#1c2a4d;margin:0 4px", {v})}></div>{(v.classFilters || []).map((v, i) => (<React.Fragment key={i}>
<div className="h3eb549cf" onClick={v.go} style={css("padding:4px 12px;border-radius:999px;font-size:10px;font-weight:600;cursor:pointer;background:{{ v.bg }};color:{{ v.fg }};border:1px solid {{ v.bd }}", {v, v})}>{v.label}</div>
        </React.Fragment>))}<div style={css("flex:1", {v})}></div><span style={css("font-size:10px;color:#6b7699", {v})}>{v.rowCount} assets shown</span></div><div style={css("flex:1;margin:0 14px;background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;overflow:auto;min-height:0", {v})}><div style={css("min-width:1500px", {v})}><div style={css("display:grid;grid-template-columns:26px 84px 58px 52px 168px 56px 64px 60px 96px 68px 84px 100px 66px 92px 56px 74px minmax(190px,1fr);gap:0 10px;padding:7px 12px;border-bottom:1px solid #1c2a4d;position:sticky;top:0;background:#0d1730;z-index:2", {v})}>{(v.headers || []).map((h, i) => (<React.Fragment key={i}>
<div className="h3eb549cf" onClick={h.sort} style={css("font-size:9px;letter-spacing:1px;font-weight:600;cursor:pointer;color:{{ h.fg }};white-space:nowrap", {v, h})}>{h.label}{h.arrow}</div>
            </React.Fragment>))}</div>{(v.rows || []).map((r, i) => (<React.Fragment key={i}>
<div className="hcf3da810" onClick={r.open} style={css("display:grid;grid-template-columns:26px 84px 58px 52px 168px 56px 64px 60px 96px 68px 84px 100px 66px 92px 56px 74px minmax(190px,1fr);gap:0 10px;align-items:center;padding:6px 12px;border-bottom:1px solid #16223f;cursor:pointer;animation:{{ r.anim }}", {v, r})}><div className="h7a920191" onClick={r.star} style={css("font-size:13px;line-height:1;cursor:pointer;color:{{ r.starColor }}", {v, r})}>{r.starGlyph}</div><div><span style={css("font-size:9px;font-weight:700;letter-spacing:.6px;padding:2.5px 7px;border-radius:10px;background:{{ r.stageBg }};color:{{ r.stageFg }}", {v, r})}>{r.stage}</span></div><div style={css("font-size:15px;font-weight:700;color:{{ r.scoreColor }}", {v, r})}>{r.score}</div><div style={css("color:#8b96b8", {v, r})}>{r.conf}</div><div style={css("min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis", {v, r})}><span style={css("font-weight:700;color:#ffffff", {v, r})}>{r.sym}</span>{r.isBundle && (<>
<span style={css("font-size:8px;font-weight:800;padding:1.5px 6px;border-radius:999px;background:#45103a;color:#ff4fae;letter-spacing:.4px", {v, r})}>BUNDLE</span>
                </>)}<span style={css("font-size:10px;color:#6b7699", {v, r})}>{r.name}</span></div><div style={css("font-size:10px;font-weight:600;color:{{ r.chainColor }}", {v, r})}>{r.chain}</div><div><span style={css("font-size:9px;padding:2px 5px;border:1px solid {{ r.clsColor }};color:{{ r.clsColor }};border-radius:10px", {v, r})}>{r.cls}</span></div><div style={css("color:#8b96b8", {v, r})}>{r.age}</div><div style={css("color:#dfe6f6", {v, r})}>{r.price}</div><div style={css("font-weight:600;color:{{ r.chgColor }}", {v, r})}>{r.chg}</div><div>{r.liq}</div><div>{r.vol} <span style={css("font-size:9px;color:#6b7699", {v, r})}>{r.volTag}</span></div><div>{r.buyers}</div><div style={css("font-weight:600;color:{{ r.nfColor }}", {v, r})}>{r.netflow}</div><div style={css("font-weight:600;color:{{ r.washColor }}", {v, r})}>{r.wash}</div><div style={css("display:flex;align-items:flex-end;gap:1.5px;height:22px;padding-bottom:2px", {v, r})}>{(r.trend || []).map((tb, i) => (<React.Fragment key={i}>
<div style={css("width:3.5px;height:{{ tb.h }};background:{{ tb.c }};border-radius:1px", {v, r, tb})}></div>
                </React.Fragment>))}</div><div style={css("font-size:10.5px;color:#a3aed0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis", {v, r})}>{r.reason}</div></div>{r.expanded && (<>
<div style={css("display:flex;gap:16px;padding:12px 16px;background:#0d1730;border-bottom:1px solid #16223f", {v, r})}><div style={css("width:300px;flex-shrink:0", {v, r})}><div style={css("font-size:9px;letter-spacing:1px;color:#6b7699;font-weight:600;margin-bottom:6px", {v, r})}>PRICE — 1M BARS</div><div style={css("display:flex;align-items:flex-end;gap:2px;height:60px", {v, r})}>{(r.peekSpark || []).map((pb, i) => (<React.Fragment key={i}>
<div style={css("flex:1;background:{{ pb.c }};height:{{ pb.h }};border-radius:1px 1px 0 0", {v, r, pb})}></div>
                    </React.Fragment>))}</div></div><div style={css("flex:1;min-width:0", {v, r})}><div style={css("font-size:9px;letter-spacing:1px;color:#6b7699;font-weight:600;margin-bottom:6px", {v, r})}>TOP TRIGGERS</div>{(r.peekReasons || []).map((pr, i) => (<React.Fragment key={i}>
<div style={css("display:flex;gap:10px;align-items:baseline;padding:3px 0;font-size:10.5px", {v, r, pr})}><span style={css("width:140px;font-weight:700;color:#e35ff2;flex-shrink:0;font-size:9.5px", {v, r, pr})}>{pr.code}</span><span style={css("flex:1;color:#c6d1ea;white-space:nowrap;overflow:hidden;text-overflow:ellipsis", {v, r, pr})}>{pr.text}</span><span style={css("color:#8b96b8;font-size:10px;flex-shrink:0", {v, r, pr})}>z {pr.z}</span></div>
                  </React.Fragment>))}</div><div style={css("width:280px;flex-shrink:0", {v, r})}><div style={css("font-size:9px;letter-spacing:1px;color:#6b7699;font-weight:600;margin-bottom:6px", {v, r})}>RISK</div>{(r.peekFlags || []).map((pf, i) => (<React.Fragment key={i}>
<div style={css("display:flex;gap:7px;align-items:baseline;padding:3px 0", {v, r, pf})}><span style={css("font-size:8.5px;font-weight:700;padding:2px 8px;border-radius:999px;background:{{ pf.bg }};color:{{ pf.fg }};flex-shrink:0", {v, r, pf})}>{pf.sev}</span><span style={css("font-size:10.5px;color:#c6d1ea", {v, r, pf})}>{pf.text}</span></div>
                  </React.Fragment>))}<div onClick={r.goDetail} style={css("margin-top:9px;display:inline-block;padding:5px 16px;border-radius:999px;background:linear-gradient(135deg,#2b6bff,#e35ff2);color:#ffffff;font-size:10px;font-weight:700;cursor:pointer", {v, r})}>OPEN FULL DETAIL →</div></div></div>
            </>)}
          </React.Fragment>))}</div></div><div style={css("display:flex;gap:10px;height:170px;margin:10px 14px 12px;flex-shrink:0", {v})}><div style={css("flex:1;background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;display:flex;flex-direction:column;min-width:0", {v})}><div style={css("padding:6px 12px;border-bottom:1px solid #1c2a4d;font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600", {v})}>EVENT TAPE — RAW INGESTION (LAYER A)</div><div style={css("flex:1;overflow:hidden;padding:4px 12px", {v})}>{(v.tape || []).map((e, i) => (<React.Fragment key={i}>
<div style={css("display:flex;gap:12px;padding:2.5px 0;font-size:10.5px;animation:{{ e.anim }}", {v, e})}><span style={css("color:#6b7699", {v, e})}>{e.ts}</span><span style={css("width:74px;font-weight:700;color:{{ e.kindColor }}", {v, e})}>{e.kind}</span><span style={css("width:52px;color:{{ e.chainColor }}", {v, e})}>{e.chain}</span><span style={css("color:#c6d1ea", {v, e})}>{e.text}</span></div>
            </React.Fragment>))}</div></div><div style={css("width:330px;background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;display:flex;flex-shrink:0;overflow:hidden", {v})}><div style={css("flex:1;padding:10px 4px 10px 14px;min-width:0", {v})}><div className="h1813ba3e" onClick={v.openChepePick} style={css("display:flex;align-items:center;gap:5px;margin-bottom:5px;padding:4px 9px;border-radius:999px;background:linear-gradient(135deg,rgba(43,107,255,.25),rgba(227,95,242,.25));border:1px solid #e35ff2;cursor:pointer;white-space:nowrap;overflow:hidden", {v})}><span style={css("font-size:8px;font-weight:800;letter-spacing:.5px;color:#f06ee2;flex-shrink:0", {v})}>DAILY PICK</span><span style={css("font-weight:800;color:#ffffff;font-size:10.5px", {v})}>{v.chepePickSym}</span><span style={css("font-size:9px;color:#8b96b8", {v})}>· {v.chepePickScore}</span></div><div style={css("font-size:8.5px;color:#a3aed0;line-height:1.35;margin-bottom:5px;font-style:italic;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical", {v})}>"{v.chepePickQuip}" — not financial advice</div><div style={css("font-size:9px;letter-spacing:1.2px;color:#f06ee2;font-weight:700;margin-bottom:4px", {v})}>CHEPE'S VETO LOG</div>{(v.chepeStats || []).map((cs, i) => (<React.Fragment key={i}>
<div style={css("display:flex;justify-content:space-between;gap:8px;padding:1.5px 0;font-size:9.5px", {v, cs})}><span style={css("color:#8b96b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis", {v, cs})}>{cs.k}</span><span style={css("font-weight:700;color:#ffffff;flex-shrink:0", {v, cs})}>{cs.v}</span></div>
            </React.Fragment>))}</div><img src="/assets/chepe.png" alt="Chepe" style={css("width:108px;height:100%;object-fit:cover;object-position:center bottom;flex-shrink:0", {v})} /></div></div></div>
  </>)}{v.isAlerts && (<>
<div data-screen-label="Alert cards" style={css("flex:1;overflow:auto;padding:12px 14px;min-height:0", {v})}><div style={css("display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;align-items:start", {v})}><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;overflow:hidden", {v})}><div style={css("padding:8px 14px;border-bottom:1px solid #1c2a4d;font-size:9px;letter-spacing:1.2px;font-weight:700;color:#8b96b8", {v})}>TELEGRAM — @vibescreener_bot</div><div style={css("padding:12px;display:flex;flex-direction:column;gap:12px", {v})}>{(v.acards || []).map((a, i) => (<React.Fragment key={i}>
<div style={css("background:#101c38;border-radius:14px 14px 14px 4px;padding:12px 14px", {v, a})}><div style={css("display:flex;gap:8px;align-items:center;margin-bottom:7px;flex-wrap:wrap", {v, a})}><span style={css("font-size:8.5px;font-weight:800;letter-spacing:.6px;padding:3px 9px;border-radius:999px;background:{{ a.stageBg }};color:{{ a.stageFg }}", {v, a})}>{a.stage}</span><span style={css("font-weight:800;color:#ffffff;font-size:13px", {v, a})}>{a.sym}</span><span style={css("font-size:9.5px;font-weight:600;color:{{ a.chainColor }}", {v, a})}>{a.chain}</span></div><div style={css("font-size:11px;color:#c6d1ea;line-height:1.6", {v, a})}>{a.body}</div><div style={css("margin-top:7px;font-size:11px;color:#c6d1ea;line-height:1.5", {v, a})}><span style={css("color:#f06ee2;font-weight:700", {v, a})}>Risks:</span> {a.risks}</div><div style={css("display:flex;gap:7px;margin-top:10px;flex-wrap:wrap", {v, a})}>{(a.buttons || []).map((b, i) => (<React.Fragment key={i}>
<div className="hf6f5791f" style={css("padding:4px 12px;border-radius:999px;border:1px solid #2b6bff;color:#6ea0ff;font-size:9.5px;font-weight:700;cursor:pointer", {v, a, b})}>{b}</div>
                  </React.Fragment>))}</div><div style={css("font-size:9px;color:#6b7699;margin-top:8px", {v, a})}>{a.ts} UTC · {a.id}</div></div>
            </React.Fragment>))}</div></div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;overflow:hidden", {v})}><div style={css("padding:8px 14px;border-bottom:1px solid #1c2a4d;font-size:9px;letter-spacing:1.2px;font-weight:700;color:#8b96b8", {v})}>DISCORD — #screener-alerts</div><div style={css("padding:12px;display:flex;flex-direction:column;gap:12px", {v})}>{(v.acards || []).map((a, i) => (<React.Fragment key={i}>
<div style={css("display:flex;background:#101c38;border-radius:6px;overflow:hidden", {v, a})}><div style={css("width:4px;background:{{ a.stageFg }};flex-shrink:0", {v, a})}></div><div style={css("padding:11px 13px;min-width:0", {v, a})}><div style={css("font-size:9px;color:#8b96b8;margin-bottom:4px", {v, a})}>VibeScreener BOT · today at {a.ts}</div><div style={css("font-weight:800;color:#ffffff;font-size:12px;margin-bottom:5px", {v, a})}>{a.title}</div><div style={css("font-size:10.5px;color:#c6d1ea;line-height:1.55;margin-bottom:9px", {v, a})}>{a.body}</div><div style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:7px 10px", {v, a})}>{(a.fields || []).map((f, i) => (<React.Fragment key={i}>
<div><div style={css("font-size:8.5px;letter-spacing:.6px;color:#6b7699;font-weight:700", {v, a, f})}>{f.k}</div><div style={css("font-size:11px;font-weight:700;color:{{ f.c }}", {v, a, f})}>{f.v}</div></div>
                    </React.Fragment>))}</div><div style={css("font-size:9px;color:#6b7699;margin-top:9px", {v, a})}>{a.id} · vibe.trading/screener/{a.slug}</div></div></div>
            </React.Fragment>))}</div></div><div style={css("display:flex;flex-direction:column;gap:10px", {v})}><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;overflow:hidden", {v})}><div style={css("padding:8px 14px;border-bottom:1px solid #1c2a4d;font-size:9px;letter-spacing:1.2px;font-weight:700;color:#8b96b8", {v})}>BROWSER PUSH</div><div style={css("margin:14px;background:rgba(16,28,56,.95);border:1px solid #223052;border-radius:14px;padding:12px 14px;display:flex;gap:10px;box-shadow:0 10px 30px rgba(0,0,0,.45)", {v})}><img src="/assets/vibe-logo.png" alt="Vibe" style={css("width:34px;height:34px;object-fit:cover;object-position:left;border-radius:8px;flex-shrink:0", {v})} /><div style={css("min-width:0;flex:1", {v})}><div style={css("display:flex;justify-content:space-between;gap:8px", {v})}><span style={css("font-size:11px;font-weight:800;color:#ffffff", {v})}>VibeScreener — EXCEPTIONAL</span><span style={css("font-size:9px;color:#6b7699", {v})}>now</span></div><div style={css("font-size:10.5px;color:#c6d1ea;line-height:1.45;margin-top:2px", {v})}>{v.pushBody}</div></div></div></div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;overflow:hidden", {v})}><div style={css("padding:8px 14px;border-bottom:1px solid #1c2a4d;font-size:9px;letter-spacing:1.2px;font-weight:700;color:#8b96b8", {v})}>WEBHOOK PAYLOAD — ABBREVIATED</div><div style={css("padding:10px 14px", {v})}>{(v.jsonLines || []).map((l, i) => (<React.Fragment key={i}>
<div style={css("font-size:9.5px;line-height:1.6;color:#a3aed0;white-space:pre;font-family:monospace", {v, l})}>{l}</div>
              </React.Fragment>))}</div></div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px 14px;font-size:10px;color:#8b96b8;line-height:1.6", {v})}>Every channel renders from the same alert payload. Cards always state the metric, its baseline, and what could invalidate the signal — never a bare "volume up 300%".</div></div></div></div>
  </>)}{v.isDetail && (<>
<div data-screen-label="Asset detail" style={css("flex:1;overflow:auto;padding:12px 14px;min-height:0", {v})}><div style={css("display:flex;align-items:center;gap:14px;margin-bottom:12px", {v})}><div className="h9e06f470" onClick={v.goLive} style={css("cursor:pointer;color:#8b96b8;font-size:11px", {v})}>← FEED</div><div style={css("font-size:20px;font-weight:700;color:#ffffff", {v})}>{v.d.sym}</div><div style={css("color:#8b96b8", {v})}>{v.d.name}</div><span style={css("font-size:9px;font-weight:700;letter-spacing:.6px;padding:3px 8px;border-radius:10px;background:{{ d.stageBg }};color:{{ d.stageFg }}", {v})}>{v.d.stage}</span><span style={css("font-size:9px;padding:2px 6px;border:1px solid {{ d.clsColor }};color:{{ d.clsColor }};border-radius:10px", {v})}>{v.d.cls}</span>{v.d.canonical && (<>
<span style={css("font-size:9px;padding:2px 6px;background:#0e2a5c;color:#4d8dff;border-radius:10px;font-weight:700", {v})}>✓ CANONICAL CONTRACT</span>
        </>)}<div style={css("flex:1", {v})}></div><div style={css("text-align:right", {v})}><div style={css("font-size:9px;color:#8b96b8;letter-spacing:1px", {v})}>FINAL SCORE</div><div style={css("font-size:24px;font-weight:700;color:{{ d.scoreColor }}", {v})}>{v.d.score}</div></div><div style={css("text-align:right", {v})}><div style={css("font-size:9px;color:#8b96b8;letter-spacing:1px", {v})}>CONFIDENCE</div><div style={css("font-size:24px;font-weight:700;color:#dfe6f6", {v})}>{v.d.conf}</div></div></div><div style={css("display:flex;align-items:center;background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px 16px;margin-bottom:12px", {v})}>{(v.d.stages || []).map((sg, i) => (<React.Fragment key={i}>
<div style={css("display:flex;align-items:center", {v, sg})}><div style={css("display:flex;flex-direction:column;align-items:center;gap:4px", {v, sg})}><span style={css("font-size:9px;font-weight:800;letter-spacing:.6px;padding:4px 12px;border-radius:999px;background:{{ sg.bg }};color:{{ sg.fg }};border:1px solid {{ sg.bd }}", {v, sg})}>{sg.n}</span><span style={css("font-size:9px;color:#6b7699", {v, sg})}>{sg.t}</span></div>{sg.hasNext && (<>
<div style={css("width:54px;height:2px;background:{{ sg.lineC }};margin:0 6px 16px", {v, sg})}></div>
            </>)}</div>
        </React.Fragment>))}<div style={css("flex:1", {v})}></div><div style={css("font-size:10px;color:#8b96b8;text-align:right;line-height:1.5;max-width:380px", {v})}>{v.d.hysteresis}</div></div><div style={css("display:grid;grid-template-columns:1.5fr 1fr;gap:10px", {v})}><div style={css("display:flex;flex-direction:column;gap:10px", {v})}><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("display:flex;justify-content:space-between;margin-bottom:8px", {v})}><span style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600", {v})}>EXECUTION PRICE — 1M BARS</span><span style={css("font-size:10px;color:#8b96b8", {v})}>{v.d.price} <span style={css("color:{{ d.chgColor }}", {v})}>{v.d.chg} 5M</span></span></div><div style={css("display:flex;align-items:flex-end;gap:2px;height:110px", {v})}>{(v.d.spark || []).map((b, i) => (<React.Fragment key={i}>
<div style={css("flex:1;background:{{ b.c }};height:{{ b.h }};border-radius:1px 1px 0 0", {v, b})}></div>
              </React.Fragment>))}</div></div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:8px", {v})}>MARKET</div><div style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:10px", {v})}>{(v.d.market || []).map((m, i) => (<React.Fragment key={i}>
<div><div style={css("font-size:9px;color:#6b7699;letter-spacing:.6px", {v, m})}>{m.k}</div><div style={css("font-size:13px;font-weight:600;margin-top:2px;color:{{ m.c }}", {v, m})}>{m.v}</div></div>
              </React.Fragment>))}</div></div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:8px", {v})}>TRIGGER REASONS</div>{(v.d.reasons || []).map((rr, i) => (<React.Fragment key={i}>
<div style={css("display:flex;gap:12px;align-items:baseline;padding:5px 0;border-bottom:1px solid #16223f", {v, rr})}><span style={css("width:190px;font-size:10px;font-weight:700;color:#e35ff2;flex-shrink:0", {v, rr})}>{rr.code}</span><span style={css("width:46px;color:#8b96b8;font-size:10px", {v, rr})}>{rr.win}</span><span style={css("flex:1;font-size:11px;color:#c6d1ea", {v, rr})}>{rr.text}</span><span style={css("font-size:10px;color:#8b96b8", {v, rr})}>z <span style={css("color:#ffffff;font-weight:600", {v, rr})}>{rr.z}</span></span><span style={css("font-size:10px;color:#8b96b8", {v, rr})}>×<span style={css("color:#ffffff;font-weight:600", {v, rr})}>{rr.ratio}</span></span></div>
            </React.Fragment>))}</div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:8px", {v})}>OUTCOME TRACKING</div><div style={css("display:grid;grid-template-columns:repeat(5,1fr);gap:10px", {v})}>{(v.d.outcomes || []).map((o, i) => (<React.Fragment key={i}>
<div style={css("background:#101c38;border:1px solid #1c2a4d;border-radius:10px;padding:8px 10px;text-align:center", {v, o})}><div style={css("font-size:9px;color:#6b7699;letter-spacing:1px", {v, o})}>{o.k}</div><div style={css("font-size:14px;font-weight:700;margin-top:3px;color:{{ o.c }}", {v, o})}>{o.v}</div></div>
              </React.Fragment>))}</div></div></div><div style={css("display:flex;flex-direction:column;gap:10px", {v})}><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:8px", {v})}>SCORE DECOMPOSITION</div>{(v.d.subs || []).map((s, i) => (<React.Fragment key={i}>
<div style={css("display:flex;align-items:center;gap:8px;padding:2.5px 0", {v, s})}><span style={css("width:150px;font-size:10px;color:#a3aed0;flex-shrink:0", {v, s})}>{s.k}</span><span style={css("width:30px;font-size:9px;color:#6b7699", {v, s})}>{s.w}</span><div style={css("flex:1;height:7px;background:#16223f;border-radius:1px;overflow:hidden", {v, s})}><div style={css("height:100%;width:{{ s.pct }};background:{{ s.c }}", {v, s})}></div></div><span style={css("width:26px;text-align:right;font-size:10px;font-weight:600;color:#dfe6f6", {v, s})}>{s.v}</span></div>
            </React.Fragment>))}<div style={css("display:flex;justify-content:space-between;margin-top:8px;padding-top:8px;border-top:1px solid #1c2a4d;font-size:10px", {v})}><span style={css("color:#8b96b8", {v})}>RAW <span style={css("color:#ffffff;font-weight:700", {v})}>{v.d.raw}</span></span><span style={css("color:#8b96b8", {v})}>RISK PENALTY <span style={css("color:#ff4fae;font-weight:700", {v})}>−{v.d.penalty}</span></span><span style={css("color:#8b96b8", {v})}>FINAL <span style={css("color:{{ d.scoreColor }};font-weight:700", {v})}>{v.d.score}</span></span></div></div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:8px", {v})}>RISK FLAGS</div>{(v.d.flags || []).map((f, i) => (<React.Fragment key={i}>
<div style={css("display:flex;gap:8px;align-items:baseline;padding:4px 0", {v, f})}><span style={css("font-size:9px;font-weight:700;padding:2px 6px;border-radius:10px;background:{{ f.bg }};color:{{ f.fg }};flex-shrink:0", {v, f})}>{f.sev}</span><span style={css("font-size:11px;color:#c6d1ea", {v, f})}>{f.text}</span></div>
            </React.Fragment>))}</div>{v.d.hasBubbles && (<>
<div style={css("background:#0a1226;border:1px solid #45103a;border-radius:10px;padding:12px", {v})}><div style={css("display:flex;justify-content:space-between;align-items:center;margin-bottom:8px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#ff4fae;font-weight:700", {v})}>BUNDLE MAP — WALLET CLUSTERS · via Bubblemaps</div><a href="https://bubblemaps.io" target="_blank" style={css("font-size:9px;color:#6b7699", {v})}>open in Bubblemaps ↗</a></div><div style={css("position:relative;height:190px;background:#0d1730;border:1px solid #16223f;border-radius:10px;overflow:hidden", {v})}>{(v.d.bubbles || []).map((b, i) => (<React.Fragment key={i}>
<div style={css("position:absolute;left:{{ b.x }};top:{{ b.y }};width:{{ b.s }};height:{{ b.s }};border-radius:50%;background:{{ b.c }};opacity:{{ b.op }};transform:translate(-50%,-50%)", {v, b})}></div>
                </React.Fragment>))}<div style={css("position:absolute;left:30%;top:16%;transform:translateX(-50%);font-size:8px;font-weight:800;letter-spacing:.6px;color:#ff4fae", {v})}>BUNDLED CLUSTER</div><div style={css("position:absolute;left:76%;top:78%;transform:translateX(-50%);font-size:8px;font-weight:800;letter-spacing:.6px;color:#4d8dff", {v})}>INDEPENDENT HOLDERS</div></div><div style={css("margin-top:9px", {v})}>{(v.d.bundleStats || []).map((bs, i) => (<React.Fragment key={i}>
<div style={css("display:flex;justify-content:space-between;gap:10px;padding:3px 0;border-bottom:1px solid #16223f;font-size:10.5px", {v, bs})}><span style={css("color:#8b96b8", {v, bs})}>{bs.k}</span><span style={css("font-weight:700;color:{{ bs.c }};flex-shrink:0", {v, bs})}>{bs.v}</span></div>
                </React.Fragment>))}</div><div style={css("font-size:9.5px;color:#6b7699;margin-top:8px;line-height:1.55", {v})}>Red bubbles share a funding source and bought within the launch block window. Cluster supply share and liquidity in/out cycling both feed the wash-probability penalty above.</div></div>
          </>)}{v.d.isStock && (<>
<div style={css("background:#0a1226;border:1px solid #16406e;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#4fc3f7;font-weight:600;margin-bottom:8px", {v})}>STOCK TOKEN / ORACLE</div><div style={css("display:grid;grid-template-columns:1fr 1fr;gap:8px 14px", {v})}>{(v.d.oracle || []).map((o, i) => (<React.Fragment key={i}>
<div style={css("display:flex;justify-content:space-between;font-size:10.5px;border-bottom:1px solid #16223f;padding:3px 0", {v, o})}><span style={css("color:#6b7699", {v, o})}>{o.k}</span><span style={css("font-weight:600;color:{{ o.c }}", {v, o})}>{o.v}</span></div>
                </React.Fragment>))}</div></div>
          </>)}</div></div></div>
  </>)}{v.isRotation && (<>
<div data-screen-label="Rotation" style={css("flex:1;overflow:auto;padding:12px 14px;min-height:0", {v})}><div style={css("display:grid;grid-template-columns:1fr 1.4fr;gap:10px", {v})}><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:10px", {v})}>COHORT NET FLOW — 1H (USD)</div>{(v.cohorts || []).map((c, i) => (<React.Fragment key={i}>
<div style={css("display:flex;align-items:center;gap:10px;padding:4px 0", {v, c})}><span style={css("width:180px;font-size:10.5px;color:#c6d1ea;flex-shrink:0", {v, c})}>{c.name}</span><div style={css("flex:1;display:flex;height:12px", {v, c})}><div style={css("width:50%;display:flex;justify-content:flex-end", {v, c})}><div style={css("width:{{ c.negW }};background:#ff4fae;opacity:.85;border-radius:1px", {v, c})}></div></div><div style={css("width:1px;background:#1c2a4d", {v, c})}></div><div style={css("width:50%;display:flex", {v, c})}><div style={css("width:{{ c.posW }};background:#4d8dff;opacity:.85;border-radius:1px", {v, c})}></div></div></div><span style={css("width:70px;text-align:right;font-size:11px;font-weight:600;color:{{ c.color }}", {v, c})}>{c.val}</span></div>
          </React.Fragment>))}</div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:10px", {v})}>ROTATION FLOW — SOURCE → DESTINATION · BAR THICKNESS = USD FLOW</div>{(v.flows || []).map((e, i) => (<React.Fragment key={i}>
<div style={css("display:flex;align-items:center;padding:6px 0", {v, e})}><div style={css("width:158px;flex-shrink:0;text-align:right", {v, e})}><span style={css("display:inline-block;max-width:100%;box-sizing:border-box;padding:4px 11px;border-radius:999px;background:#101c38;border:1px solid #1c2a4d;color:#a3aed0;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis", {v, e})}>{e.src}</span></div><div style={css("flex:1;position:relative;height:{{ e.th }};margin:0 10px;min-width:0", {v, e})}><div style={css("position:absolute;inset:0;border-radius:999px;background:linear-gradient(90deg,rgba(43,107,255,.18),{{ e.color }});opacity:.9", {v, e})}></div><div style={css("position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#ffffff;white-space:nowrap;overflow:hidden;text-shadow:0 1px 3px rgba(0,0,0,.6)", {v, e})}>{e.label}</div></div><div style={css("width:158px;flex-shrink:0", {v, e})}><span style={css("display:inline-block;max-width:100%;box-sizing:border-box;padding:4px 11px;border-radius:999px;background:#101f42;border:1px solid #2b6bff;color:#ffffff;font-weight:700;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis", {v, e})}>{e.dst}</span></div></div>
          </React.Fragment>))}</div></div><div style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:10px", {v})}>{(v.rotStats || []).map((s, i) => (<React.Fragment key={i}>
<div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:10px 12px", {v, s})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8", {v, s})}>{s.label}</div><div style={css("font-size:17px;font-weight:700;margin-top:3px;color:{{ s.color }}", {v, s})}>{s.value}</div><div style={css("font-size:10px;color:#6b7699;margin-top:2px", {v, s})}>{s.sub}</div></div>
        </React.Fragment>))}</div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px;margin-top:10px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:10px", {v})}>ASSET-CLASS FLOW — CRYPTO ⇄ RWA</div><div style={css("display:flex;gap:10px", {v})}>{(v.classFlows || []).map((f, i) => (<React.Fragment key={i}>
<div style={css("flex:1;background:#101c38;border:1px solid #1c2a4d;border-radius:10px;padding:10px 12px", {v, f})}><div style={css("font-size:10px;color:#a3aed0", {v, f})}>{f.name}</div><div style={css("font-size:16px;font-weight:700;margin-top:3px;color:{{ f.color }}", {v, f})}>{f.val}</div><div style={css("height:5px;background:#16223f;border-radius:1px;margin-top:6px;overflow:hidden", {v, f})}><div style={css("height:100%;width:{{ f.pct }};background:{{ f.color }}", {v, f})}></div></div></div>
          </React.Fragment>))}</div></div></div>
  </>)}{v.isWallets && (<>
<div data-screen-label="Wallet registry" style={css("flex:1;overflow:auto;padding:12px 14px;min-height:0", {v})}><div style={css("display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:10px", {v})}>{(v.walletStats || []).map((s, i) => (<React.Fragment key={i}>
<div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:10px 12px", {v, s})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8", {v, s})}>{s.label}</div><div style={css("font-size:18px;font-weight:700;margin-top:3px;color:{{ s.color }}", {v, s})}>{s.value}</div></div>
        </React.Fragment>))}</div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px;margin-bottom:10px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:8px", {v})}>ADD WALLET TO TRACK</div><div style={css("display:flex;gap:8px;flex-wrap:wrap", {v})}><input value={v.walletInput} onChange={v.onWalletInput} placeholder="Wallet address (Solana or 0x\u2026)" style={css("flex:2;min-width:220px;background:#0d1730;border:1px solid #1c2a4d;border-radius:999px;padding:7px 14px;color:#ffffff;font-size:11px;font-family:inherit;outline:none", {v})} /><input value={v.walletLabel} onChange={v.onWalletLabel} placeholder="Label (optional)" style={css("flex:1;min-width:140px;background:#0d1730;border:1px solid #1c2a4d;border-radius:999px;padding:7px 14px;color:#ffffff;font-size:11px;font-family:inherit;outline:none", {v})} /><div onClick={v.addWallet} style={css("padding:7px 20px;border-radius:999px;background:linear-gradient(135deg,#2b6bff,#e35ff2);color:#ffffff;font-size:10.5px;font-weight:700;cursor:pointer", {v})}>+ TRACK</div></div><div style={css("font-size:9.5px;color:#6b7699;margin-top:7px", {v})}>Tracked wallets surface in the event tape, wallet-flow features, and alert reasons. Saved locally — survives reload.</div></div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:8px", {v})}>WALLET REGISTRY — BAD-ACTOR MEMORY + TRACKED WALLETS</div><div style={css("display:grid;grid-template-columns:120px 52px 1fr 96px 62px 80px 1.6fr 30px;gap:0 10px;padding:4px 0;border-bottom:1px solid #1c2a4d;font-size:9px;letter-spacing:.8px;color:#6b7699;font-weight:600", {v})}><div>ADDRESS</div><div>CHAIN</div><div>LABEL</div><div>TAG</div><div>SOURCE</div><div>INCIDENTS</div><div>NOTE</div><div></div></div>{(v.registry || []).map((w, i) => (<React.Fragment key={i}>
<div style={css("display:grid;grid-template-columns:120px 52px 1fr 96px 62px 80px 1.6fr 30px;gap:0 10px;align-items:center;padding:7px 0;border-bottom:1px solid #16223f;font-size:10.5px", {v, w})}><div style={css("font-weight:700;color:#ffffff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis", {v, w})}>{w.addr}</div><div style={css("font-weight:600;font-size:10px;color:{{ w.chainColor }}", {v, w})}>{w.chain}</div><div style={css("color:#c6d1ea;white-space:nowrap;overflow:hidden;text-overflow:ellipsis", {v, w})}>{w.label}</div><div><span style={css("font-size:8.5px;font-weight:800;padding:2.5px 8px;border-radius:999px;background:{{ w.bg }};color:{{ w.fg }};white-space:nowrap", {v, w})}>{w.tag}</span></div><div style={css("font-size:9px;font-weight:700;color:{{ w.srcC }}", {v, w})}>{w.srcLabel}</div><div style={css("color:#8b96b8", {v, w})}>{w.hitsTxt}</div><div style={css("font-size:10px;color:#8b96b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis", {v, w})}>{w.note}</div><div className="h7f88fc9a" onClick={w.remove} style={css("cursor:pointer;color:#6b7699;text-align:center", {v, w})}>✕</div></div>
        </React.Fragment>))}<div style={css("font-size:9.5px;color:#6b7699;margin-top:10px;line-height:1.6", {v})}>Wallets in bundle clusters or liquidity-wash cycles are added automatically and stay flagged permanently — their future buys are excluded from organic volume and buyer breadth on every token, and their appearance on a new launch raises its wash probability immediately. Repeat offenders escalate: 2+ incidents marks every launch they touch.</div></div></div>
  </>)}{v.isSocial && (<>
<div data-screen-label="Social scanner" style={css("flex:1;overflow:auto;padding:12px 14px;min-height:0", {v})}><div style={css("display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:10px", {v})}>{(v.socialStats || []).map((s, i) => (<React.Fragment key={i}>
<div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:10px 12px", {v, s})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8", {v, s})}>{s.label}</div><div style={css("font-size:18px;font-weight:700;margin-top:3px;color:{{ s.color }}", {v, s})}>{s.value}</div></div>
        </React.Fragment>))}</div><div style={css("display:grid;grid-template-columns:1.55fr 1fr;gap:10px;align-items:start", {v})}><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px;overflow-x:auto", {v})}><div style={css("min-width:740px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:10px", {v})}>X KEYWORD VELOCITY — 1H · RANKED BY ROBUST Z VS 24H BASELINE</div><div style={css("display:grid;grid-template-columns:1.1fr 70px 76px 40px 72px 46px 108px 1.4fr;gap:0 10px;padding:4px 0;border-bottom:1px solid #1c2a4d;font-size:9px;letter-spacing:.8px;color:#6b7699;font-weight:600", {v})}><div>KEYWORD</div><div>MENTIONS</div><div>VS BASE</div><div>Z</div><div>AUTHORS</div><div>BOT</div><div>ONCHAIN MATCH</div><div>READ</div></div>{(v.keywords || []).map((k, i) => (<React.Fragment key={i}>
<div className="h4441371b" onClick={k.go} style={css("display:grid;grid-template-columns:1.1fr 70px 76px 40px 72px 46px 108px 1.4fr;gap:0 10px;align-items:center;padding:7px 0;border-bottom:1px solid #16223f;font-size:10.5px;cursor:{{ k.cursor }}", {v, k})}><div style={css("font-weight:700;color:#ffffff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis", {v, k})}>{k.word}</div><div style={css("color:#c6d1ea", {v, k})}>{k.m}</div><div style={css("font-weight:600;color:#4d8dff", {v, k})}>{k.base}</div><div style={css("color:#8b96b8", {v, k})}>{k.z}</div><div style={css("color:#c6d1ea", {v, k})}>{k.authors}</div><div style={css("font-weight:600;color:{{ k.botC }}", {v, k})}>{k.bot}</div><div><span style={css("font-size:8.5px;font-weight:800;letter-spacing:.4px;padding:2.5px 8px;border-radius:999px;background:{{ k.mBg }};color:{{ k.mc }};white-space:nowrap", {v, k})}>{k.match}</span></div><div style={css("min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis", {v, k})}><span style={css("color:#dfe6f6;font-weight:600", {v, k})}>{k.token}</span><span style={css("font-size:9.5px;color:#6b7699", {v, k})}>· {k.note}</span></div></div>
            </React.Fragment>))}<div style={css("font-size:9.5px;color:#6b7699;margin-top:10px;line-height:1.6", {v})}>Matched rows link to the asset detail page. Bot share and author breadth feed the same organic-probability model as onchain wash detection — a keyword pumped by few accounts is treated like volume pumped by few wallets. Social signals never qualify an alert alone; they add confirmation or early-watch context.</div></div></div><div style={css("display:flex;flex-direction:column;gap:10px", {v})}><div style={css("background:#0a1226;border:1px solid #33124a;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#f06ee2;font-weight:800;margin-bottom:10px", {v})}>UNMATCHED CHATTER — POSSIBLY EARLY</div>{(v.early || []).map((e, i) => (<React.Fragment key={i}>
<div style={css("background:#101c38;border:1px solid #1c2a4d;border-radius:10px;padding:10px 12px;margin-bottom:10px", {v, e})}><div style={css("display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:5px", {v, e})}><span style={css("font-weight:800;color:#ffffff;font-size:12px", {v, e})}>{e.term}</span><span style={css("font-size:8.5px;font-weight:800;padding:2.5px 9px;border-radius:999px;border:1px solid {{ e.sc }};color:{{ e.sc }}", {v, e})}>{e.state}</span><span style={css("font-size:9px;color:#6b7699", {v, e})}>{e.first}</span></div><div style={css("font-size:9.5px;color:#8b96b8;margin-bottom:5px", {v, e})}>{e.m}</div><div style={css("font-size:10.5px;color:#c6d1ea;line-height:1.55", {v, e})}>{e.body}</div><div style={css("font-size:10px;color:#8b96b8;line-height:1.5;margin-top:5px", {v, e})}><span style={css("color:#f06ee2;font-weight:700", {v, e})}>Caveat:</span> {e.risk}</div></div>
            </React.Fragment>))}<div style={css("font-size:9.5px;color:#6b7699;line-height:1.6", {v})}>Pre-launch chatter is the highest-risk signal class — teaser campaigns are also how rugs recruit exit liquidity. These entries arm watchers (first pool, first liquidity, contract deploy) and never generate buy-stage alerts on their own.</div></div></div></div></div>
  </>)}{v.isEval && (<>
<div data-screen-label="Evaluation" style={css("flex:1;overflow:auto;padding:12px 14px;min-height:0", {v})}><div style={css("display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:10px", {v})}>{(v.evalStats || []).map((s, i) => (<React.Fragment key={i}>
<div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:10px 12px", {v, s})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8", {v, s})}>{s.label}</div><div style={css("font-size:18px;font-weight:700;margin-top:3px;color:{{ s.color }}", {v, s})}>{s.value}</div><div style={css("font-size:10px;color:#6b7699;margin-top:2px", {v, s})}>{s.sub}</div></div>
        </React.Fragment>))}</div><div style={css("display:grid;grid-template-columns:1.4fr 1fr;gap:10px", {v})}><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:10px", {v})}>OUTCOMES BY STAGE — TRAILING 30D</div><div style={css("display:grid;grid-template-columns:110px repeat(6,1fr);gap:0 8px;padding:4px 0;border-bottom:1px solid #1c2a4d;font-size:9px;letter-spacing:.8px;color:#6b7699;font-weight:600", {v})}><div>STAGE</div><div>ALERTS</div><div>PRECISION</div><div>MED 1H</div><div>MED 24H</div><div>MED MFE</div><div>RUG RATE</div></div>{(v.stageRows || []).map((s, i) => (<React.Fragment key={i}>
<div style={css("display:grid;grid-template-columns:110px repeat(6,1fr);gap:0 8px;align-items:center;padding:7px 0;border-bottom:1px solid #16223f;font-size:11px", {v, s})}><div><span style={css("font-size:9px;font-weight:700;padding:2px 7px;border-radius:10px;background:{{ s.bg }};color:{{ s.fg }}", {v, s})}>{s.stage}</span></div><div style={css("color:#c6d1ea", {v, s})}>{s.n}</div><div style={css("font-weight:700;color:{{ s.pc }}", {v, s})}>{s.prec}</div><div style={css("color:{{ s.r1c }}", {v, s})}>{s.r1}</div><div style={css("color:{{ s.r24c }}", {v, s})}>{s.r24}</div><div style={css("color:#4d8dff", {v, s})}>{s.mfe}</div><div style={css("color:{{ s.rugc }}", {v, s})}>{s.rug}</div></div>
          </React.Fragment>))}<div style={css("font-size:10px;color:#6b7699;margin-top:10px", {v})}>Precision = share of alerts reaching +8% MFE within 24h without a liquidity-collapse, oracle-failure, or untradeability event. Walk-forward evaluation; no signal implies guaranteed future performance.</div></div><div style={css("display:flex;flex-direction:column;gap:10px", {v})}><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:10px", {v})}>CALIBRATION — PREDICTED VS REALIZED</div>{(v.calib || []).map((c, i) => (<React.Fragment key={i}>
<div style={css("display:flex;align-items:center;gap:8px;padding:3px 0", {v, c})}><span style={css("width:64px;font-size:10px;color:#a3aed0", {v, c})}>{c.bucket}</span><div style={css("flex:1;height:8px;background:#16223f;border-radius:1px;position:relative;overflow:hidden", {v, c})}><div style={css("height:100%;width:{{ c.realW }};background:#4d8dff", {v, c})}></div><div style={css("position:absolute;top:0;bottom:0;left:{{ c.predW }};width:2px;background:#e35ff2", {v, c})}></div></div><span style={css("width:76px;text-align:right;font-size:10px;color:#8b96b8", {v, c})}>{c.txt}</span></div>
            </React.Fragment>))}<div style={css("font-size:9.5px;color:#6b7699;margin-top:8px", {v})}><span style={css("color:#e35ff2", {v})}>▎</span> predicted  <span style={css("color:#4d8dff", {v})}>▬</span> realized · Brier 0.171 · ECE 0.038</div></div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:8px", {v})}>TOP FALSE-POSITIVE CAUSES</div>{(v.fpCauses || []).map((f, i) => (<React.Fragment key={i}>
<div style={css("display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #16223f;font-size:11px", {v, f})}><span style={css("color:#c6d1ea", {v, f})}>{f.cause}</span><span style={css("font-weight:600;color:#ff4fae", {v, f})}>{f.share}</span></div>
            </React.Fragment>))}</div></div></div></div>
  </>)}{v.isHealth && (<>
<div data-screen-label="System health" style={css("flex:1;overflow:auto;padding:12px 14px;min-height:0", {v})}><div style={css("display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:10px", {v})}>{(v.healthStats || []).map((s, i) => (<React.Fragment key={i}>
<div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:10px 12px", {v, s})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8", {v, s})}>{s.label}</div><div style={css("font-size:18px;font-weight:700;margin-top:3px;color:{{ s.color }}", {v, s})}>{s.value}</div><div style={css("font-size:10px;color:#6b7699;margin-top:2px", {v, s})}>{s.sub}</div></div>
        </React.Fragment>))}</div><div style={css("display:grid;grid-template-columns:1.3fr 1fr;gap:10px", {v})}><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:10px", {v})}>PROVIDERS</div><div style={css("display:grid;grid-template-columns:1.4fr 70px 90px 70px 1fr;gap:0 10px;padding:4px 0;border-bottom:1px solid #1c2a4d;font-size:9px;letter-spacing:.8px;color:#6b7699;font-weight:600", {v})}><div>PROVIDER</div><div>CHAIN</div><div>STATUS</div><div>P50 LAT</div><div>NOTE</div></div>{(v.providers || []).map((p, i) => (<React.Fragment key={i}>
<div style={css("display:grid;grid-template-columns:1.4fr 70px 90px 70px 1fr;gap:0 10px;align-items:center;padding:5.5px 0;border-bottom:1px solid #16223f;font-size:10.5px", {v, p})}><div style={css("color:#dfe6f6", {v, p})}>{p.name}</div><div style={css("color:{{ p.chainColor }};font-weight:600;font-size:10px", {v, p})}>{p.chain}</div><div style={css("display:flex;align-items:center;gap:5px", {v, p})}><div style={css("width:6px;height:6px;border-radius:50%;background:{{ p.dot }}", {v, p})}></div><span style={css("font-size:10px;font-weight:600;color:{{ p.dot }}", {v, p})}>{p.status}</span></div><div style={css("color:#8b96b8", {v, p})}>{p.lat}</div><div style={css("font-size:10px;color:#6b7699", {v, p})}>{p.note}</div></div>
          </React.Fragment>))}</div><div style={css("display:flex;flex-direction:column;gap:10px", {v})}><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:10px", {v})}>CHAIN SYNC</div>{(v.chainSync || []).map((c, i) => (<React.Fragment key={i}>
<div style={css("background:#101c38;border:1px solid #1c2a4d;border-radius:10px;padding:8px 10px;margin-bottom:8px", {v, c})}><div style={css("display:flex;justify-content:space-between;align-items:center", {v, c})}><span style={css("font-weight:700;color:{{ c.color }}", {v, c})}>{c.chain}</span><span style={css("font-size:10px;color:#c6d1ea", {v, c})}>{c.head}</span></div><div style={css("display:flex;gap:14px;margin-top:5px;font-size:10px;color:#8b96b8", {v, c})}><span>finality <span style={css("color:{{ c.finC }};font-weight:600", {v, c})}>{c.fin}</span></span><span>{c.extraK} <span style={css("color:{{ c.extraC }};font-weight:600", {v, c})}>{c.extra}</span></span><span>lag <span style={css("color:#dfe6f6;font-weight:600", {v, c})}>{c.lag}</span></span></div></div>
            </React.Fragment>))}</div><div style={css("background:#0a1226;border:1px solid #1c2a4d;border-radius:10px;padding:12px", {v})}><div style={css("font-size:9px;letter-spacing:1.2px;color:#8b96b8;font-weight:600;margin-bottom:8px", {v})}>PIPELINE — LAST 5 MIN</div>{(v.pipeline || []).map((p, i) => (<React.Fragment key={i}>
<div style={css("display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #16223f;font-size:10.5px", {v, p})}><span style={css("color:#a3aed0", {v, p})}>{p.k}</span><span style={css("font-weight:600;color:{{ p.c }}", {v, p})}>{p.v}</span></div>
            </React.Fragment>))}</div></div></div></div>
  </>)}{v.toastVisible && (<>
<div style={css("position:fixed;right:18px;bottom:18px;z-index:60;width:340px;background:rgba(13,23,48,.97);border:1px solid #f06ee2;border-radius:14px;padding:12px 14px;box-shadow:0 12px 40px rgba(0,0,0,.55);animation:vsFlash 1s ease-out", {v})}><div style={css("display:flex;justify-content:space-between;align-items:center;margin-bottom:5px", {v})}><span style={css("font-size:9px;font-weight:800;letter-spacing:1px;color:#f06ee2", {v})}>{v.toastTitle}</span><span className="h3eb549cf" onClick={v.dismissToast} style={css("cursor:pointer;color:#6b7699;font-size:12px;padding:0 4px", {v})}>✕</span></div><div style={css("font-size:11px;color:#c6d1ea;line-height:1.5", {v})}>{v.toastBody}</div></div>
  </>)}</div>
      </>
    ); }

}

App.defaultProps={liveFeed:true,simSpeed:2,showAdjusted:true};
export default App;
