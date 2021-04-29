





function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let array = S.split("")
    console.log(S)
return S
}


function solution(A) {
    let countE = 0
    let countB = 0
    let countC = 0
    let countD = 0
    let countF = 1
    let countG = 1
    let bigCount
    let winCount
  
    let X = A
    let B = [...A]
    let C = [...A]
    let D = [...A]
    let E = [...A]
    let F = [...A]
    let G = [...A]

    console.log(B)
    console.log(C)
  
  
  
  
      for (i = A.length ; i > -1; i--) {
  
       let y = i - 1 
       
       if (B[i] == B[y] && B[i] === 0) {
         B[y] = 1
         countB = countB + 1  
       }
       else if (B[i] == B[y] && B[i] === 1) {
         B[y] = 0
         countB = countB + 1  
       }
       console.log('state of B', B)
       console.log(countB, 'testB')
  
       
  
     }
     for (i=0; i < A.length +1; i++) {
       
       let y = i + 1
       if (C[i] === C[y] && C[y] === 0)  {
         C[y] = 1
         countC = countC + 1  
       }
       else if (C[i] === C[y] && C[y] === 1) {
         C[y] = 0
         countC = countC + 1  
       }
       console.log('state of c', C)
          console.log(countC, 'testC')
     }
    
      for (i=0; i < A.length +1; i++) {
       let x = i + 2
       let y = i + 1
       if (D[i] === D[y] && D[y] === 0 && D[y] !== D[x] ){
         D[i] = 1
        
         countD = countD + 1  
       }
        else if (D[i] !== D[y] && D[y] === 0 && D[i] === D[x] ){
         D[i] = 1
        
         countD = countD + 1  
       }
        else if (D[i] === D[y] && D[y] === 1 && D[y] !== D[x] ){
         D[i] = 0
        
         countD = countD + 1  
       }
             else if (D[i] !== D[y] && D[y] === 1 && D[y] === D[x] ){
         D[i] = 1
         
         countD = countD + 1  
       }
  
       console.log('state of D', D)
          console.log(countD, 'testD')
     }
  
  
      for (i = A.length ; i > -1; i--) {
  
       let y = i - 1 
       
       if (E[i] == E[y] && E[i] === 0) {
         E[y] = 1
         countE = countE + 1  
       }
       else if (E[i] == E[y] && E[i] === 1) {
         E[y] = 0
         countE = countE + 1  
       }
       console.log('state of E', E)
       console.log(countE, 'testE')
  
       
  
     }
  
     for (i=0; i < A.length +1; i++) {
       
       F[0] = 0
       let y = i + 1
       if (F[i] === F[y] && F[y] === 0)  {
         F[y] = 1
         countF = countF + 1  
       }
       else if (F[i] === F[y] && F[y] === 1) {
         F[y] = 0
         countF = countF + 1  
       }
       console.log('state of F', F)
          console.log(countF, 'testF')
     }
  
        for (i=0; i < A.length +1; i++) {
       
       G[0] = 1
       let y = i + 1
       if (G[i] === G[y] && G[y] === 0)  {
         G[y] = 1
         countG = countG + 1  
       }
       else if (G[i] === G[y] && G[y] === 1) {
         G[y] = 0
         countG = countG + 1  
       }
       console.log('state of G', G)
          console.log(countG, 'testG')
     }
    
  
    //    console.log('state of F', F)
    //       console.log(countD, 'testF')
    //  }
  
    //      for (i=0; i < A.length +1; i++) {
    //    let x = i + 2
    //    let y = i + 1
    //    G[0] = 0 
    //    if (F[i] === F[y] && F[y] === 0 && F[y] !== F[x] ){
    //      F[i] = 1
        
    //      countF = countF + 1  
    //    }
    //     else if (F[i] !== F[y] && F[y] === 0 && F[i] === F[x] ){
    //      F[i] = 1
        
    //      countF = countF + 1  
    //    }
    //     else if (F[i] === F[y] && F[y] === 1 && F[y] !== F[x] ){
    //      F[i] = 0
        
    //      countF = countF + 1  
    //    }
    //          else if (F[i] !== F[y] && F[y] === 1 && F[y] === F[x] ){
    //      F[i] = 1
         
    //      countF = countF + 1  
    //    }
  
    //    console.log('state of D', D)
    //       console.log(countD, 'testD')
  if (countB < countC) {
        bigCount = countB
       
     } else {
       bigCount = countC
     }
  
     if (countD < bigCount) {
       bigCount = countD
     }
     else if (countE < bigCount) {
       bigCount = countE
     }
     else if (countF < bigCount) {
       bigCount = countF
     }
     else if (countG < bigCount) {
       bigCount = countG
     }
     console.log("answer" ,bigCount)
     console.log(countB)
     console.log(countC)
     console.log(countD)
     console.log(countF)
     console.log(countG)
    return bigCount
  
  }
  
  solution(test)
  // )
  //     //  return countr
  //      console.log(A)
  //      console.log(X)
  
  //       console.log(A)