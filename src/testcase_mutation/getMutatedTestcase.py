import execjs


def mutate_testcase(file_path):
    """
    mutate testcase according ECMAScript-262 10 edition
    :param file_path: the file that contain the testcase and API nodes
    :return: the mutated tastcases
    """
    mutation = execjs.compile("""
        let {testcaseMutation} = require("./testcase_mutation/mutation")

        function mutation(filePath){
            return testcaseMutation(filePath);
        }
     """)
    return mutation.call("mutation", str(file_path))

