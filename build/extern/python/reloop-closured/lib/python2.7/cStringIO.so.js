(function(c){function e(a){var b,a=HEAP[a+8]==0?1:2;a==1?(_PyErr_SetString(HEAP[_PyExc_ValueError],n),b=0):a==2&&(b=1);return b}function a(a,b,c){var d=null,f,g;f=c;c=e(a)==0?1:2;if(c==1)g=-1;else if(c==2)if(c=HEAP[a+12]<0?3:4,c==3)throw ___assert_fail(s,u,162,F),"Reached an unreachable!";else if(c==4)if(c=HEAP[a+16]<0?5:6,c==5)throw ___assert_fail(I,u,163,F),"Reached an unreachable!";else if(c==6){g=HEAP[a+16]-HEAP[a+12];f<0?(d=6,c=8):
(d=6,c=7);a:do if(c==7){var h=g;f>h?(d=7,c=8):(d=7,c=10);break a}while(0);a:do if(c==8){var j=d==7?h:g;f=j;if(!(j<0))break a;f=0}while(0);HEAP[b]=HEAP[a+8]+HEAP[a+12];HEAP[a+12]=f+HEAP[a+12];g=f}return g}function b(a,b){var c,d,f;c=e(a)==0?1:2;if(c==1)d=-1;else if(c==2){c=HEAP[a+8]+HEAP[a+12];for(f=HEAP[a+8]+HEAP[a+16];;){if(c>=f)break;if(HEAP[c]==10)break;c+=1}(c<f?7:8)==7&&(c+=1);HEAP[b]=HEAP[a+8]+HEAP[a+12];f=0-HEAP[a+8]+c+(0-HEAP[a+12]);c=HEAP[a+12]>2147483647-f?9:10;if(c==9)throw ___assert_fail(D,
u,205,Z),"Reached an unreachable!";else if(c==10)if(c=HEAP[a+12]<0?11:12,c==11)throw ___assert_fail(s,u,206,Z),"Reached an unreachable!";else if(c==12)if(c=HEAP[a+16]<0?13:14,c==13)throw ___assert_fail(I,u,207,Z),"Reached an unreachable!";else c==14&&(HEAP[a+12]=f+HEAP[a+12],d=f)}return d}function d(a,c){var d=STACKTOP;STACKTOP+=8;_memset(d,0,8);var e,f,g,h=d+4;HEAP[d]=-1;e=c!=0?1:3;a:do if(e==1){if(_PyArg_ParseTuple(c,T,allocate([d,0,0,0],["i32*",0,0,0],ALLOC_STACK))!=0){e=3;break a}f=0;e=11;break a}while(0);
if(e==3)if(g=e=b(a,h),e=e<0?4:5,e==4)f=0;else if(e==5){e=HEAP[d]>=0?6:8;a:do if(e==6){if(!(HEAP[d]<g))break a;HEAP[d]=g-HEAP[d];g-=HEAP[d];HEAP[a+12]-=HEAP[d]}while(0);e=HEAP[a+12]<0?9:10;if(e==9)throw ___assert_fail(s,u,227,P),"Reached an unreachable!";else e==10&&(f=_PyString_FromStringAndSize(HEAP[h],g))}STACKTOP=d;return f}function f(a,b,c){var d,f,g,h;d=e(a)==0?1:2;a:do if(d==1)f=-1;else if(d==2){h=a;g=c+HEAP[h+12];d=HEAP[h+20]<=g?3:10;if(d==3){HEAP[h+20]*=2;d=HEAP[h+20]<=g?4:7;if(d==4)if(d=
g==2147483646?5:6,d==5)throw ___assert_fail(ga,u,388,Ha),"Reached an unreachable!";else d==6&&(HEAP[h+20]=g+1);g=d=_realloc(HEAP[h+8],HEAP[h+20]);d=d==0?8:9;if(d==8){_PyErr_SetString(HEAP[_PyExc_MemoryError],ba);_free(HEAP[h+8]);HEAP[h+8]=0;HEAP[h+12]=0;HEAP[h+20]=HEAP[h+12];f=-1;break a}else d==9&&(HEAP[h+8]=g)}d=HEAP[h+16]<HEAP[h+12]?11:12;d==11&&_llvm_memset_p0i8_i32(HEAP[h+8]+HEAP[h+16],0,HEAP[h+12]-HEAP[h+16],1,0);_llvm_memcpy_p0i8_p0i8_i32(HEAP[h+8]+HEAP[h+12],b,c,1,0);d=c+HEAP[h+12]==2147483647?
13:14;if(d==13)throw ___assert_fail(pa,u,417,Ha),"Reached an unreachable!";else d==14&&(HEAP[h+12]=c+HEAP[h+12],d=HEAP[h+16]<HEAP[h+12]?15:16,d==15&&(HEAP[h+16]=HEAP[h+12]),f=c)}while(0);return f}function g(a){var b,c,d;d=__PyObject_New(ma);b=d==0?1:2;if(b==1)c=0;else if(b==2)if(HEAP[d+12]=0,HEAP[d+16]=0,HEAP[d+24]=0,b=_malloc(a),HEAP[d+8]=b,b=HEAP[d+8]==0?3:6,b==3){_PyErr_SetString(HEAP[_PyExc_MemoryError],ba);HEAP[d+20]=0;HEAP[d]-=1;b=HEAP[d]==0?4:5;if(b==4)FUNCTION_TABLE[HEAP[HEAP[d+4]+24]](d);
c=0}else b==6&&(HEAP[d+20]=a,c=d);return c}function h(a){var b=STACKTOP;STACKTOP+=8;_memset(b,0,8);var c,d,e,f=b+4;c=_PyObject_AsReadBuffer(a,b,f)!=0?1:2;c==1?(_PyErr_Format(HEAP[_PyExc_TypeError],oa,allocate([HEAP[HEAP[a+4]+12],0,0,0],["i8*",0,0,0],ALLOC_STACK)),d=0):c==2&&(e=__PyObject_New(ea),c=e==0?3:4,c==3?d=0:c==4&&(HEAP[a]+=1,HEAP[e+8]=HEAP[b],HEAP[e+16]=HEAP[f],HEAP[e+20]=a,HEAP[e+12]=0,d=e));STACKTOP=b;return d}function j(){l=allocate([65,32,115,105,109,112,108,101,32,102,97,115,116,32,112,
97,114,116,105,97,108,32,83,116,114,105,110,103,73,79,32,114,101,112,108,97,99,101,109,101,110,116,46,10,10,84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,97,32,115,105,109,112,108,101,32,117,115,101,102,117,108,32,114,101,112,108,97,99,101,109,101,110,116,32,102,111,114,10,116,104,101,32,83,116,114,105,110,103,73,79,32,109,111,100,117,108,101,32,116,104,97,116,32,105,115,32,119,114,105,116,116,101,110,32,105,110,32,67,46,32,32,73,116,32,100,111,101,115,32,110,111,
116,32,112,114,111,118,105,100,101,32,116,104,101,10,102,117,108,108,32,103,101,110,101,114,97,108,105,116,121,32,111,102,32,83,116,114,105,110,103,73,79,44,32,98,117,116,32,105,116,32,112,114,111,118,105,100,101,115,32,101,110,111,117,103,104,32,102,111,114,32,109,111,115,116,10,97,112,112,108,105,99,97,116,105,111,110,115,32,97,110,100,32,105,115,32,101,115,112,101,99,105,97,108,108,121,32,117,115,101,102,117,108,32,105,110,32,99,111,110,106,117,110,99,116,105,111,110,32,119,105,116,104,32,116,
104,101,10,112,105,99,107,108,101,32,109,111,100,117,108,101,46,10,10,85,115,97,103,101,58,10,10,32,32,102,114,111,109,32,99,83,116,114,105,110,103,73,79,32,105,109,112,111,114,116,32,83,116,114,105,110,103,73,79,10,10,32,32,97,110,95,111,117,116,112,117,116,95,115,116,114,101,97,109,61,83,116,114,105,110,103,73,79,40,41,10,32,32,97,110,95,111,117,116,112,117,116,95,115,116,114,101,97,109,46,119,114,105,116,101,40,115,111,109,101,95,115,116,117,102,102,41,10,32,32,46,46,46,10,32,32,118,97,108,117,
101,61,97,110,95,111,117,116,112,117,116,95,115,116,114,101,97,109,46,103,101,116,118,97,108,117,101,40,41,10,10,32,32,97,110,95,105,110,112,117,116,95,115,116,114,101,97,109,61,83,116,114,105,110,103,73,79,40,97,95,115,116,114,105,110,103,41,10,32,32,115,112,97,109,61,97,110,95,105,110,112,117,116,95,115,116,114,101,97,109,46,114,101,97,100,108,105,110,101,40,41,10,32,32,115,112,97,109,61,97,110,95,105,110,112,117,116,95,115,116,114,101,97,109,46,114,101,97,100,40,53,41,10,32,32,97,110,95,105,110,
112,117,116,95,115,116,114,101,97,109,46,115,101,101,107,40,48,41,32,32,32,32,32,32,32,32,32,32,32,35,32,79,75,44,32,115,116,97,114,116,32,111,118,101,114,10,32,32,115,112,97,109,61,97,110,95,105,110,112,117,116,95,115,116,114,101,97,109,46,114,101,97,100,40,41,32,32,32,32,32,32,32,35,32,97,110,100,32,114,101,97,100,32,105,116,32,97,108,108,10,32,32,10,73,102,32,115,111,109,101,111,110,101,32,101,108,115,101,32,119,97,110,116,115,32,116,111,32,112,114,111,118,105,100,101,32,97,32,109,111,114,101,
32,99,111,109,112,108,101,116,101,32,105,109,112,108,101,109,101,110,116,97,116,105,111,110,44,10,103,111,32,102,111,114,32,105,116,46,32,58,45,41,32,32,10,10,99,83,116,114,105,110,103,73,79,46,99,44,118,32,49,46,50,57,32,49,57,57,57,47,48,54,47,49,53,32,49,52,58,49,48,58,50,55,32,106,105,109,32,69,120,112,10,0],"i8",ALLOC_NORMAL);m=allocate([102,108,117,115,104,40,41,58,32,100,111,101,115,32,110,111,116,104,105,110,103,46,0],"i8",ALLOC_NORMAL);n=allocate([73,47,79,32,111,112,101,114,97,116,105,111,
110,32,111,110,32,99,108,111,115,101,100,32,102,105,108,101,0],"i8",ALLOC_NORMAL);o=allocate([99,108,111,115,101,100,0],"i8",ALLOC_NORMAL);p=allocate([84,114,117,101,32,105,102,32,116,104,101,32,102,105,108,101,32,105,115,32,99,108,111,115,101,100,0],"i8",ALLOC_NORMAL);r=allocate(40,["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8",
"i8","i8","i8","i8","i8"],ALLOC_NORMAL);q=allocate([103,101,116,118,97,108,117,101,40,91,117,115,101,95,112,111,115,93,41,32,45,45,32,71,101,116,32,116,104,101,32,115,116,114,105,110,103,32,118,97,108,117,101,46,10,73,102,32,117,115,101,95,112,111,115,32,105,115,32,115,112,101,99,105,102,105,101,100,32,97,110,100,32,105,115,32,97,32,116,114,117,101,32,118,97,108,117,101,44,32,116,104,101,110,32,116,104,101,32,115,116,114,105,110,103,32,114,101,116,117,114,110,101,100,10,119,105,108,108,32,105,110,
99,108,117,100,101,32,111,110,108,121,32,116,104,101,32,116,101,120,116,32,117,112,32,116,111,32,116,104,101,32,99,117,114,114,101,110,116,32,102,105,108,101,32,112,111,115,105,116,105,111,110,46,10,0],"i8",ALLOC_NORMAL);s=allocate([40,40,73,79,111,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,112,111,115,32,62,61,32,48,0],"i8",ALLOC_NORMAL);u=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,99,83,116,114,105,110,103,73,79,46,99,0],"i8",ALLOC_NORMAL);v=allocate([73,
79,95,99,103,101,116,118,97,108,0],"i8",ALLOC_NORMAL);y=allocate([103,101,116,118,97,108,0],"i8",ALLOC_NORMAL);w=allocate([115,101,108,102,45,62,112,111,115,32,62,61,32,48,0],"i8",ALLOC_NORMAL);x=allocate([73,79,95,103,101,116,118,97,108,0],"i8",ALLOC_NORMAL);B=allocate([105,115,97,116,116,121,40,41,58,32,97,108,119,97,121,115,32,114,101,116,117,114,110,115,32,48,0],"i8",ALLOC_NORMAL);z=allocate([114,101,97,100,40,91,115,93,41,32,45,45,32,82,101,97,100,32,115,32,99,104,97,114,97,99,116,101,114,115,
44,32,111,114,32,116,104,101,32,114,101,115,116,32,111,102,32,116,104,101,32,115,116,114,105,110,103,0],"i8",ALLOC_NORMAL);F=allocate([73,79,95,99,114,101,97,100,0],"i8",ALLOC_NORMAL);I=allocate([40,40,73,79,111,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,115,116,114,105,110,103,95,115,105,122,101,32,62,61,32,48,0],"i8",ALLOC_NORMAL);N=allocate([124,110,58,114,101,97,100,0],"i8",ALLOC_NORMAL);G=allocate([114,101,97,100,108,105,110,101,40,41,32,45,45,32,82,101,97,100,32,111,110,101,32,108,
105,110,101,0],"i8",ALLOC_NORMAL);D=allocate([40,40,73,79,111,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,112,111,115,32,60,61,32,40,40,80,121,95,115,115,105,122,101,95,116,41,40,40,40,115,105,122,101,95,116,41,45,49,41,62,62,49,41,41,32,45,32,108,0],"i8",ALLOC_NORMAL);Z=allocate([73,79,95,99,114,101,97,100,108,105,110,101,0],"i8",ALLOC_NORMAL);T=allocate([124,105,58,114,101,97,100,108,105,110,101,0],"i8",ALLOC_NORMAL);P=allocate([73,79,95,114,101,97,100,108,105,110,101,0],"i8",ALLOC_NORMAL);
L=allocate([114,101,97,100,108,105,110,101,115,40,41,32,45,45,32,82,101,97,100,32,97,108,108,32,108,105,110,101,115,0],"i8",ALLOC_NORMAL);K=allocate([124,105,58,114,101,97,100,108,105,110,101,115,0],"i8",ALLOC_NORMAL);E=allocate([114,101,115,101,116,40,41,32,45,45,32,82,101,115,101,116,32,116,104,101,32,102,105,108,101,32,112,111,115,105,116,105,111,110,32,116,111,32,116,104,101,32,98,101,103,105,110,110,105,110,103,0],"i8",ALLOC_NORMAL);aa=allocate([116,101,108,108,40,41,32,45,45,32,103,101,116,
32,116,104,101,32,99,117,114,114,101,110,116,32,112,111,115,105,116,105,111,110,46,0],"i8",ALLOC_NORMAL);Q=allocate([73,79,95,116,101,108,108,0],"i8",ALLOC_NORMAL);$=allocate([116,114,117,110,99,97,116,101,40,41,58,32,116,114,117,110,99,97,116,101,32,116,104,101,32,102,105,108,101,32,97,116,32,116,104,101,32,99,117,114,114,101,110,116,32,112,111,115,105,116,105,111,110,46,0],"i8",ALLOC_NORMAL);S=allocate([124,110,58,116,114,117,110,99,97,116,101,0],"i8",ALLOC_NORMAL);t=allocate([115,101,101,107,40,
112,111,115,105,116,105,111,110,41,32,32,32,32,32,32,32,45,45,32,115,101,116,32,116,104,101,32,99,117,114,114,101,110,116,32,112,111,115,105,116,105,111,110,10,115,101,101,107,40,112,111,115,105,116,105,111,110,44,32,109,111,100,101,41,32,45,45,32,109,111,100,101,32,48,58,32,97,98,115,111,108,117,116,101,59,32,49,58,32,114,101,108,97,116,105,118,101,59,32,50,58,32,114,101,108,97,116,105,118,101,32,116,111,32,69,79,70,0],"i8",ALLOC_NORMAL);A=allocate([110,124,105,58,115,101,101,107,0],"i8",ALLOC_NORMAL);
ra=allocate([119,114,105,116,101,40,115,41,32,45,45,32,87,114,105,116,101,32,97,32,115,116,114,105,110,103,32,116,111,32,116,104,101,32,102,105,108,101,10,10,78,111,116,101,32,40,104,97,99,107,58,41,32,119,114,105,116,105,110,103,32,78,111,110,101,32,114,101,115,101,116,115,32,116,104,101,32,98,117,102,102,101,114,0],"i8",ALLOC_NORMAL);ga=allocate([110,101,119,108,32,43,32,49,32,60,32,50,49,52,55,52,56,51,54,52,55,0],"i8",ALLOC_NORMAL);Ha=allocate([79,95,99,119,114,105,116,101,0],"i8",ALLOC_NORMAL);
ba=allocate([111,117,116,32,111,102,32,109,101,109,111,114,121,0],"i8",ALLOC_NORMAL);pa=allocate([111,115,101,108,102,45,62,112,111,115,32,43,32,108,32,60,32,50,49,52,55,52,56,51,54,52,55,0],"i8",ALLOC_NORMAL);ya=allocate([116,35,58,119,114,105,116,101,0],"i8",ALLOC_NORMAL);va=allocate([99,108,111,115,101,40,41,58,32,101,120,112,108,105,99,105,116,108,121,32,114,101,108,101,97,115,101,32,114,101,115,111,117,114,99,101,115,32,104,101,108,100,46,0],"i8",ALLOC_NORMAL);Ua=allocate([119,114,105,116,101,
108,105,110,101,115,40,115,101,113,117,101,110,99,101,95,111,102,95,115,116,114,105,110,103,115,41,32,45,62,32,78,111,110,101,46,32,32,87,114,105,116,101,32,116,104,101,32,115,116,114,105,110,103,115,32,116,111,32,116,104,101,32,102,105,108,101,46,10,10,78,111,116,101,32,116,104,97,116,32,110,101,119,108,105,110,101,115,32,97,114,101,32,110,111,116,32,97,100,100,101,100,46,32,32,84,104,101,32,115,101,113,117,101,110,99,101,32,99,97,110,32,98,101,32,97,110,121,32,105,116,101,114,97,98,108,101,32,111,
98,106,101,99,116,10,112,114,111,100,117,99,105,110,103,32,115,116,114,105,110,103,115,46,32,84,104,105,115,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,99,97,108,108,105,110,103,32,119,114,105,116,101,40,41,32,102,111,114,32,101,97,99,104,32,115,116,114,105,110,103,46,0],"i8",ALLOC_NORMAL);$a=allocate([102,108,117,115,104,0],"i8",ALLOC_NORMAL);Va=allocate([103,101,116,118,97,108,117,101,0],"i8",ALLOC_NORMAL);db=allocate([105,115,97,116,116,121,0],"i8",ALLOC_NORMAL);Ta=allocate([114,
101,97,100,0],"i8",ALLOC_NORMAL);Ra=allocate([114,101,97,100,108,105,110,101,0],"i8",ALLOC_NORMAL);Ka=allocate([114,101,97,100,108,105,110,101,115,0],"i8",ALLOC_NORMAL);Za=allocate([114,101,115,101,116,0],"i8",ALLOC_NORMAL);Ia=allocate([115,101,101,107,0],"i8",ALLOC_NORMAL);la=allocate([116,101,108,108,0],"i8",ALLOC_NORMAL);Fa=allocate([116,114,117,110,99,97,116,101,0],"i8",ALLOC_NORMAL);Ja=allocate([99,108,111,115,101,0],"i8",ALLOC_NORMAL);Oa=allocate([119,114,105,116,101,0],"i8",ALLOC_NORMAL);Y=
allocate([119,114,105,116,101,108,105,110,101,115,0],"i8",ALLOC_NORMAL);Ba=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ma=allocate([115,111,102,116,115,
112,97,99,101,0],"i8",ALLOC_NORMAL);ca=allocate([102,108,97,103,32,105,110,100,105,99,97,116,105,110,103,32,116,104,97,116,32,97,32,115,112,97,99,101,32,110,101,101,100,115,32,116,111,32,98,101,32,112,114,105,110,116,101,100,59,32,117,115,101,100,32,98,121,32,112,114,105,110,116,0],"i8",ALLOC_NORMAL);ja=allocate([0,0,0,0,1,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8",
"i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);ia=allocate([83,105,109,112,108,101,32,116,121,112,101,32,102,111,114,32,111,117,116,112,117,116,32,116,111,32,115,116,114,105,110,103,115,46,0],"i8",ALLOC_NORMAL);ka=allocate([99,83,116,114,105,110,103,73,79,46,83,116,114,105,110,103,79,0],"i8",ALLOC_NORMAL);ma=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
131563,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",
0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8",
"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);na=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ea=allocate([83,105,109,112,108,101,32,116,121,112,101,32,102,111,114,32,116,114,101,97,116,105,110,103,32,115,116,114,105,110,103,115,
32,97,115,32,105,110,112,117,116,32,102,105,108,101,32,115,116,114,101,97,109,115,0],"i8",ALLOC_NORMAL);La=allocate([99,83,116,114,105,110,103,73,79,46,83,116,114,105,110,103,73,0],"i8",ALLOC_NORMAL);ea=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,131563,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",
0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,
"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8",
"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);oa=allocate([101,120,112,101,99,116,101,100,32,114,101,97,100,32,98,117,102,102,101,114,44,32,37,46,50,48,48,115,32,102,111,117,110,100,0],"i8",ALLOC_NORMAL);Sa=allocate([83,116,114,105,110,103,73,79,40,91,115,93,41,32,45,45,32,82,101,116,117,114,110,32,97,32,83,116,114,105,110,103,73,79,45,108,105,107,101,32,115,116,114,101,97,109,32,102,111,114,32,
114,101,97,100,105,110,103,32,111,114,32,119,114,105,116,105,110,103,0],"i8",ALLOC_NORMAL);za=allocate([83,116,114,105,110,103,73,79,0],"i8",ALLOC_NORMAL);J=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ga=allocate(32,["i32 (%struct.PyObject*, i8**, i32)*",
0,0,0,"i32 (%struct.PyObject*, i8**)*",0,0,0,"i32 (%struct.PyObject*, i8*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct._typeobject*",0,0,0,"%struct._typeobject*",0,0,0],ALLOC_NORMAL);Ca=allocate([99,83,116,114,105,110,103,73,79,0],"i8",ALLOC_NORMAL);da=allocate([99,83,116,114,105,110,103,73,79,46,99,83,116,114,105,110,103,73,79,95,67,65,80,73,0],"i8",ALLOC_NORMAL);H=allocate([99,83,116,114,105,
110,103,73,79,95,67,65,80,73,0],"i8",ALLOC_NORMAL);eb=allocate([73,110,112,117,116,84,121,112,101,0],"i8",ALLOC_NORMAL);wa=allocate([79,117,116,112,117,116,84,121,112,101,0],"i8",ALLOC_NORMAL);HEAP[r]=o;HEAP[r+4]=c+2;HEAP[r+12]=p;HEAP[Ba]=$a;HEAP[Ba+4]=c+4;HEAP[Ba+12]=m;HEAP[Ba+16]=Va;HEAP[Ba+20]=c+6;HEAP[Ba+28]=q;HEAP[Ba+32]=db;HEAP[Ba+36]=c+8;HEAP[Ba+44]=B;HEAP[Ba+48]=Ta;HEAP[Ba+52]=c+10;HEAP[Ba+60]=z;HEAP[Ba+64]=Ra;HEAP[Ba+68]=c+12;HEAP[Ba+76]=G;HEAP[Ba+80]=Ka;HEAP[Ba+84]=c+14;HEAP[Ba+92]=L;HEAP[Ba+
96]=Za;HEAP[Ba+100]=c+16;HEAP[Ba+108]=E;HEAP[Ba+112]=Ia;HEAP[Ba+116]=c+18;HEAP[Ba+124]=t;HEAP[Ba+128]=la;HEAP[Ba+132]=c+20;HEAP[Ba+140]=aa;HEAP[Ba+144]=Fa;HEAP[Ba+148]=c+22;HEAP[Ba+156]=$;HEAP[Ba+160]=Ja;HEAP[Ba+164]=c+24;HEAP[Ba+172]=va;HEAP[Ba+176]=Oa;HEAP[Ba+180]=c+26;HEAP[Ba+188]=ra;HEAP[Ba+192]=Y;HEAP[Ba+196]=c+28;HEAP[Ba+204]=Ua;HEAP[ja]=Ma;HEAP[ja+16]=ca;HEAP[ma+12]=ka;HEAP[ma+24]=c+30;HEAP[ma+88]=ia;HEAP[ma+108]=c+32;HEAP[ma+112]=c+34;HEAP[ma+116]=Ba;HEAP[ma+120]=ja;HEAP[ma+124]=r;HEAP[na]=
$a;HEAP[na+4]=c+4;HEAP[na+12]=m;HEAP[na+16]=Va;HEAP[na+20]=c+6;HEAP[na+28]=q;HEAP[na+32]=db;HEAP[na+36]=c+8;HEAP[na+44]=B;HEAP[na+48]=Ta;HEAP[na+52]=c+10;HEAP[na+60]=z;HEAP[na+64]=Ra;HEAP[na+68]=c+12;HEAP[na+76]=G;HEAP[na+80]=Ka;HEAP[na+84]=c+14;HEAP[na+92]=L;HEAP[na+96]=Za;HEAP[na+100]=c+16;HEAP[na+108]=E;HEAP[na+112]=Ia;HEAP[na+116]=c+18;HEAP[na+124]=t;HEAP[na+128]=la;HEAP[na+132]=c+20;HEAP[na+140]=aa;HEAP[na+144]=Fa;HEAP[na+148]=c+22;HEAP[na+156]=$;HEAP[na+160]=Ja;HEAP[na+164]=c+36;HEAP[na+172]=
va;HEAP[ea+12]=La;HEAP[ea+24]=c+38;HEAP[ea+88]=Ea;HEAP[ea+108]=c+32;HEAP[ea+112]=c+34;HEAP[ea+116]=na;HEAP[ea+124]=r;HEAP[J]=za;HEAP[J+4]=c+40;HEAP[J+12]=Sa;HEAP[Ga]=c+42;HEAP[Ga+4]=c+44;HEAP[Ga+8]=c+46;HEAP[Ga+12]=c+48;HEAP[Ga+16]=c+50;HEAP[Ga+20]=c+52;HEAP[Ga+24]=ea;HEAP[Ga+28]=ma}var k={arguments:[]};Runtime.QUANTUM_SIZE=4;var l,m,n,o,p,r,q,s,u,v,y,w,x,B,z,F,I,N,G,D,Z,T,P,L,K,E,aa,Q,$,S,t,A,ra,ga,Ha,ba,pa,ya,va,Ua,$a,Va,db,Ta,Ra,Ka,Za,Ia,la,Fa,Ja,Oa,Y,Ba,Ma,ca,ja,ia,ka,ma,na,Ea,La,ea,oa,Sa,za,
J,Ga,Ca,da,H,eb,wa;k._initcStringIO=function(){var a,b,c,d;b=_Py_InitModule4(Ca,J,l,0,1013);a=b==0?7:1;a:do if(a==1){c=_PyModule_GetDict(b);HEAP[ea+4]=_PyType_Type;HEAP[ma+4]=_PyType_Type;if(_PyType_Ready(ma)<0)break a;if(_PyType_Ready(ea)<0)break a;d=_PyCapsule_New(Ga,da,0);_PyDict_SetItemString(c,H,d);a=d!=0?4:6;b:do if(a==4){HEAP[d]-=1;if(HEAP[d]!=0){a=6;break b}FUNCTION_TABLE[HEAP[HEAP[d+4]+24]](d)}while(0);_PyDict_SetItemString(c,eb,ea);_PyDict_SetItemString(c,wa,ma)}while(0)};FUNCTION_TABLE=
FUNCTION_TABLE.concat([0,0,function(a){var b;b=__Py_ZeroStruct;(HEAP[a+8]==0?1:2)==1&&(b=__Py_TrueStruct);HEAP[b]+=1;return b},0,function(a){var b,a=e(a)==0?1:2;a==1?b=0:a==2&&(HEAP[__Py_NoneStruct]+=1,b=__Py_NoneStruct);return b},0,function(a,b){var c=STACKTOP;STACKTOP+=4;_memset(c,0,4);var d,f,g;HEAP[c]=__Py_NoneStruct;d=e(a)==0?1:2;if(d==1)f=0;else if(d==2)if(d=_PyArg_UnpackTuple(b,y,0,1,allocate([c,0,0,0],["%struct.PyObject**",0,0,0],ALLOC_STACK))==0?3:4,d==3)f=0;else if(d==4){d=_PyObject_IsTrue(HEAP[c])!=
0?5:7;a:do if(d==5){g=HEAP[a+12];if(!(HEAP[a+16]<g))break a;g=HEAP[a+16]}else d==7&&(g=HEAP[a+16]);while(0);d=HEAP[a+12]<0?9:10;if(d==9)throw ___assert_fail(w,u,141,x),"Reached an unreachable!";else d==10&&(f=_PyString_FromStringAndSize(HEAP[a+8],g))}STACKTOP=c;return f},0,function(a){var b,a=e(a)==0?1:2;a==1?b=0:a==2&&(HEAP[__Py_ZeroStruct]+=1,b=__Py_ZeroStruct);return b},0,function(b,c){var d=STACKTOP;STACKTOP+=8;_memset(d,0,8);var e,f,g=d+4;HEAP[d]=-1;HEAP[g]=0;e=_PyArg_ParseTuple(c,N,allocate([d,
0,0,0],["i32*",0,0,0],ALLOC_STACK))==0?1:2;e==1?f=0:e==2&&(e=a(b,g,HEAP[d]),HEAP[d]=e,e=HEAP[d]<0?3:4,e==3?f=0:e==4&&(f=_PyString_FromStringAndSize(HEAP[g],HEAP[d])));STACKTOP=d;return f},0,d,0,function(a,c){var d=STACKTOP;STACKTOP+=8;_memset(d,0,8);var e,f,g,h,j=d+4,k;k=HEAP[j]=0;e=_PyArg_ParseTuple(c,K,allocate([j,0,0,0],["i32*",0,0,0],ALLOC_STACK))==0?1:2;a:do if(e==1)f=0;else if(e==2)if(g=_PyList_New(0),e=g==0?3:4,e==3)f=0;else if(e==4){b:for(;;){f=e=b(a,d);if(e<0){e=15;break b}if(f==0){e=14;
break b}h=_PyString_FromStringAndSize(HEAP[d],f);if(h==0){e=15;break b}e=_PyList_Append(g,h)==-1;HEAP[h]-=1;var l=HEAP[h]==0;if(e){e=8;break b}e=l?11:12;if(e==11)FUNCTION_TABLE[HEAP[HEAP[h+4]+24]](h);k=f+k;if(!(HEAP[j]>0)){e=4;continue b}if(k>=HEAP[j]){e=14;break b}else e=4}b:do if(e==14){f=g;break a}else if(e==8){if(!l)break b;FUNCTION_TABLE[HEAP[HEAP[h+4]+24]](h)}while(0);HEAP[g]-=1;e=HEAP[g]==0?16:17;if(e==16)FUNCTION_TABLE[HEAP[HEAP[g+4]+24]](g);f=0}while(0);STACKTOP=d;return f},0,function(a){var b,
c;b=e(a)==0?1:2;b==1?c=0:b==2&&(HEAP[a+12]=0,HEAP[__Py_NoneStruct]+=1,c=__Py_NoneStruct);return c},0,function(a,b){var c=STACKTOP;STACKTOP+=8;_memset(c,0,8);var d,f=null,g,h=c+4;HEAP[h]=0;d=e(a)==0?1:2;if(d==1)g=0;else if(d==2)if(d=_PyArg_ParseTuple(b,A,allocate([c,0,0,0,h,0,0,0],["i32*",0,0,0,"i32*",0,0,0],ALLOC_STACK))==0?3:4,d==3)g=0;else if(d==4){d=HEAP[h]==2?5:6;if(d==5){var j=HEAP[c]+HEAP[a+16];HEAP[c]=j;f=5}else if(d==6)if(d=HEAP[h]==1?7:8,d==7){var k=HEAP[c]+HEAP[a+12];HEAP[c]=k;f=7}else if(d==
8)var l=HEAP[c],f=8;((f==8?l:f==7?k:j)<0?10:11)==10&&(HEAP[c]=0);HEAP[a+12]=HEAP[c];HEAP[__Py_NoneStruct]+=1;g=__Py_NoneStruct}STACKTOP=c;return g},0,function(a){var b,c;b=e(a)==0?1:2;if(b==1)c=0;else if(b==2)if(b=HEAP[a+12]<0?3:4,b==3)throw ___assert_fail(w,u,290,Q),"Reached an unreachable!";else b==4&&(c=_PyInt_FromSsize_t(HEAP[a+12]));return c},0,function(a,b){var c=STACKTOP;STACKTOP+=4;_memset(c,0,4);var d,f=null,g;HEAP[c]=-1;d=e(a)==0?1:2;if(d==1)g=0;else if(d==2)if(d=_PyArg_ParseTuple(b,S,allocate([c,
0,0,0],["i32*",0,0,0],ALLOC_STACK))==0?3:4,d==3)g=0;else if(d==4){d=_PyTuple_Size(b)==0?5:6;if(d==5){var h=HEAP[a+12];HEAP[c]=h;f=5}else if(d==6)var j=HEAP[c],f=6;d=(f==6?j:h)<0?8:9;d==8?(d=___errno_location(),HEAP[d]=22,_PyErr_SetFromErrno(HEAP[_PyExc_IOError]),g=0):d==9&&(d=HEAP[a+16]>HEAP[c]?10:11,d==10&&(HEAP[a+16]=HEAP[c]),HEAP[a+12]=HEAP[a+16],HEAP[__Py_NoneStruct]+=1,g=__Py_NoneStruct)}STACKTOP=c;return g},0,function(a){(HEAP[a+8]!=0?1:2)==1&&_free(HEAP[a+8]);HEAP[a+8]=0;HEAP[a+20]=0;HEAP[a+
16]=HEAP[a+20];HEAP[a+12]=HEAP[a+16];HEAP[__Py_NoneStruct]+=1;return __Py_NoneStruct},0,function(a,b){var c=STACKTOP;STACKTOP+=8;_memset(c,0,8);var d,e,g=c+4;d=_PyArg_ParseTuple(b,ya,allocate([c,0,0,0,g,0,0,0],["i8**",0,0,0,"i32*",0,0,0],ALLOC_STACK))==0?1:2;d==1?e=0:d==2&&(d=f(a,HEAP[c],HEAP[g])<0?3:4,d==3?e=0:d==4&&(HEAP[__Py_NoneStruct]+=1,e=__Py_NoneStruct));STACKTOP=c;return e},0,function(a,b){var c=STACKTOP;STACKTOP+=8;_memset(c,0,8);var d,e,g,h,j=c+4;g=_PyObject_GetIter(b);d=g==0?1:16;if(d==
1)e=0;else if(d==16){for(;;){h=d=_PyIter_Next(g);if(d==0){d=17;break}if(_PyString_AsStringAndSize(h,j,c)==-1){d=3;break}if(f(a,HEAP[j],HEAP[c])==-1){d=9;break}HEAP[h]-=1;if(HEAP[h]==0)FUNCTION_TABLE[HEAP[HEAP[h+4]+24]](h);d=16}if(d==17){HEAP[g]-=1;d=HEAP[g]==0?18:19;if(d==18)FUNCTION_TABLE[HEAP[HEAP[g+4]+24]](g);d=_PyErr_Occurred()!=0?20:21;d==20?e=0:d==21&&(HEAP[__Py_NoneStruct]+=1,e=__Py_NoneStruct)}else if(d==3){HEAP[g]-=1;d=HEAP[g]==0?4:5;if(d==4)FUNCTION_TABLE[HEAP[HEAP[g+4]+24]](g);HEAP[h]-=
1;d=HEAP[h]==0?6:7;if(d==6)FUNCTION_TABLE[HEAP[HEAP[h+4]+24]](h);e=0}else if(d==9){HEAP[g]-=1;d=HEAP[g]==0?10:11;if(d==10)FUNCTION_TABLE[HEAP[HEAP[g+4]+24]](g);HEAP[h]-=1;d=HEAP[h]==0?12:13;if(d==12)FUNCTION_TABLE[HEAP[HEAP[h+4]+24]](h);e=0}}STACKTOP=c;return e},0,function(a){(HEAP[a+8]!=0?1:2)==1&&_free(HEAP[a+8]);_PyObject_Free(a)},0,_PyObject_SelfIter,0,function(a){var b,c;c=d(a,0);a=c==0?1:2;if(a==1)b=0;else if(a==2)if(a=HEAP[c+8]==0?3:6,a==3){HEAP[c]-=1;a=HEAP[c]==0?4:5;if(a==4)FUNCTION_TABLE[HEAP[HEAP[c+
4]+24]](c);_PyErr_SetNone(HEAP[_PyExc_StopIteration]);b=0}else a==6&&(b=c);return b},0,function(a){var b,c;b=HEAP[a+20]!=0?1:3;a:do if(b==1){c=HEAP[a+20];HEAP[a+20]=0;HEAP[c]-=1;if(HEAP[c]!=0)break a;FUNCTION_TABLE[HEAP[HEAP[c+4]+24]](c)}while(0);HEAP[a+8]=0;HEAP[a+16]=0;HEAP[a+12]=HEAP[a+16];HEAP[__Py_NoneStruct]+=1;return __Py_NoneStruct},0,function(a){var b;b=HEAP[a+20]!=0?1:3;a:do if(b==1){var c=HEAP[a+20];HEAP[c]-=1;if(HEAP[c]!=0)break a;FUNCTION_TABLE[HEAP[HEAP[HEAP[a+20]+4]+24]](HEAP[a+20])}while(0);
_PyObject_Free(a)},0,function(a,b){var c=STACKTOP;STACKTOP+=4;_memset(c,0,4);var d,e;HEAP[c]=0;d=_PyArg_UnpackTuple(b,za,0,1,allocate([c,0,0,0],["%struct.PyObject**",0,0,0],ALLOC_STACK))==0?1:2;d==1?e=0:d==2&&(d=HEAP[c]!=0?3:4,d==3?e=h(HEAP[c]):d==4&&(e=g(128)));STACKTOP=c;return e},0,a,0,b,0,f,0,function(a){var b,c;b=e(a)==0?1:2;if(b==1)c=0;else if(b==2)if(b=HEAP[a+12]<0?3:4,b==3)throw ___assert_fail(s,u,122,v),"Reached an unreachable!";else b==4&&(c=_PyString_FromStringAndSize(HEAP[a+8],HEAP[a+
12]));return c},0,g,0,h,0]);k.run=j;j();return k});