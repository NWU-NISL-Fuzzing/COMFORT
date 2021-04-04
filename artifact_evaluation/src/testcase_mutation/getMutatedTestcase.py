import execjs


def mutate_testcase(file_path):
    """
    mutate testcase according ECMAScript-262 edition
    :param file_path: the file that contain the testcase and API nodes
    :return: the mutated tastcases
    """
    mutation = execjs.compile("""
        let {testcaseMutation} = require("/root/src/testcase_mutation/mutation")

        function mutation(filePath){
            return testcaseMutation(filePath);
        }
     """)
    return mutation.call("mutation", str(file_path))

def get_info(file_path):
    getter = execjs.compile("""
        let {get_senmantic_info} = require("/root/src/testcase_mutation/mutation")
        function get(filePath){
            return get_senmantic_info(filePath);
        }
     """)
    return getter.call("get", str(file_path))
