import logging
import typing


def logger_config(
        prefix: str = 'NULL',
        file_level: str = 'INFO',
        console_level: str = 'INFO',
        log_file: str = 'test.log') -> typing.NoReturn:
    """Set up the log to print to both the log file and the console
    :param prefix: Sets the log prefix, which is the content in []
    :param file_level: The log level output to the log file
    :param console_level: The level of log output to the console
    :param log_file: The log level log file path to output to the console
    :return: No return value
    """
    # Get an instance of Logger
    logger = logging.getLogger()
    logger.setLevel('NOTSET')    # Set the minimum log level. Only logs above this level will be output

    # log format
    # BASIC_FORMAT = f'[{prefix}]%(asctime)s - %(levelname)s: %(message)s'
    # DATE_FORMAT = '%Y-%m-%d %H:%M:%S'
    BASIC_FORMAT = f'%(message)s'
    DATE_FORMAT = ''
    formatter = logging.Formatter(BASIC_FORMAT, DATE_FORMAT)

    # Sets the handler to output to the console
    chlr = logging.StreamHandler()
    chlr.setFormatter(formatter)
    chlr.setLevel(console_level)   # Set the console logging level
    # Sets the handler to output to the file
    fhlr = logging.FileHandler(filename=log_file, encoding='utf-8')    # Note that the encoding of the log file is set here
    fhlr.setFormatter(formatter)
    fhlr.setLevel(file_level)    # Sets the log file log level

    # Add two handlers to the logger
    logger.addHandler(chlr)
    logger.addHandler(fhlr)