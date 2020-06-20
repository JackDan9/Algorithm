class Solution(object):
    def groupAnagrams(self, strs):
        if len(strs) == 0:
            return []
        if len(strs) == 1:
            return [strs]
        
        result_dict = {}

        for str_item in strs:
            check = "".join(sorted(str_item))
            if check not in result_dict:
                result_dict[check] = [str_item]
            else:
                result_dict[check].append(str_item)
        
        return list(result_dict.values())