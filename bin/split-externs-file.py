import os
import re
import sys
import tempfile


if __name__ == '__main__':

    inputfilename = os.path.join('externs', 'olx.js')
    lines = open(inputfilename, 'rU').readlines()

    externsfilename = os.path.join('externs', 'olx-new.js')
    externsfile = open(externsfilename, 'wb')

    tmpfile = tempfile.TemporaryFile()

    in_comment_block = False
    typedef_detected = False

    buf = []

    for line in lines:
        m = re.match(r'^[\/ ]\*[\* \/]', line)
        if m:
            if in_comment_block is False:
                in_comment_block = True
                buf.append('\n')
                buf.append('\n')
            if re.match(r'^ \* @typedef', line):
                typedef_detected = True
            buf.append(line)
        elif in_comment_block:
            in_comment_block = False
            buf.append(line)
            if typedef_detected:
                typedef_detected = False
                tmpfile.writelines(buf)
            else:
                externsfile.writelines(buf)
            buf = []

    typedeffilename = os.path.join('src', 'ol', 'olx.js')
    typedeffile = open(typedeffilename, 'wb')

    symbols = set()

    tmpfile.seek(0)
    lines = tmpfile.readlines()

    for line in lines:
        m = re.search(r'[<\( ](ol\.[\w\.]+)', line)
        if m:
            symbol = m.group(1)
            symbol = symbol.rstrip('.')
            symbols.add(symbol)

    symbols = map(lambda s: 'goog.require(\'%s\');\n' % s, symbols)
    requires = sorted(symbols)

    typedeffile.writelines(requires)

    tmpfile.seek(0)
    lines = tmpfile.readlines()

    for line in lines:
        typedeffile.writelines(line)

    externsfile.close()
    tmpfile.close()
    typedeffile.close()
