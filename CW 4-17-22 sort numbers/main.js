function solution(nums){
    const empty = []
      if (nums != null) {
          return nums.sort((a, b) => a - b)
      } else {
        return empty;
      }
    }