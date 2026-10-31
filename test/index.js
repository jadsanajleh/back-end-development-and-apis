function isPrime(num) {
  // الأعداد الأقل من أو تساوي 1 ليست أولية
  if (num <= 1) return false;
  
  // فحص ما إذا كان الرقم يقبل القسمة على أي رقم من 2 وحتى جذره التربيعي
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // الرقم ليس أولياً
    }
  }
  
  return true; // الرقم أولي
}

// تصدير الدالة لكي تختبرها المنصة
module.exports = { isPrime };