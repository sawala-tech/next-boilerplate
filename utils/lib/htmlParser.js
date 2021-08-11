// @ts-ignore
// @ts-nocheck

export function parse_html(ctx, s, x0, y0, align, font, fontsize, col) {
  // 2d canvas context, string, pos.x, pos.y, left/right/center, font, font height, color
  // Convert html code to a series of individual strings, each displayable by fillText().
  font = 'px ' + font
  var lines = []
  var line = [0]
  var part = '' // the text element preceding a '<'
  var cmd = ''
  var bold = false
  var italic = false
  var sup = false
  var sub = false
  var x = 0,
    y = 0
  var dx, start
  var legal = ['b', 'strong', 'i', 'em', 'sup', 'sub']

  function add_part() {
    var style = ''
    var fs = fontsize
    if (bold) style += 'bold '
    if (italic) style += 'italic '
    if (sup || sub) {
      fs = 0.8 * fontsize
      if (sup) y -= 0.3 * fontsize
      // y increases downward in 2D canvas
      else y += 0.3 * fontsize
    }
    ctx.font = style + fs + font
    dx = ctx.measureText(part).width
    line.push([x, y, ctx.font, part])
    part = ''
    x += dx
  }

  function end_line() {
    if (part !== '') add_part()
    line[0] = x
    lines.push(line)
    line = [0]
    x = y = 0
  }

  for (var i = 0; i < s.length; i++) {
    var c = s[i]
    if (c == '\n') {
      end_line()
    } else if (c != '<') {
      part += c // a part of the text
    } else {
      // encountered '<'
      //if (part !== '') add_part()
      start = i + 1
      i++
      cmd = s[i]
      var end = false
      if (cmd == '/') {
        cmd = ''
        end = true
      }
      var ok = true
      for (i = i + 1; i < s.length; i++) {
        if (s[i] == '<') {
          // This means that the intial '<' did not start a command
          i = i - 1 // back up
          part += '<' + cmd
          add_part()
          ok = false // signal that we encountered '<'
          break
        }
        if (s[i] == '>') break
        cmd += s[i]
      }
      if (!ok) continue
      if (cmd == 'br' || cmd == 'br/') {
        end_line()
      } else {
        if (legal.indexOf(cmd) >= 0 && part !== '') add_part()
        switch (cmd) {
          case 'b':
          case 'strong':
            bold = !end
            break
          case 'i':
          case 'em':
            italic = !end
            break
          case 'sup':
            sup = !end
            if (end) y = 0
            break
          case 'sub':
            sub = !end
            if (end) y = 0
            break
          default:
            part += '<' + cmd + '>'
        }
      }
    }
  }
  if (part.length > 0) line.push([x, y, fontsize + font, part])
  ctx.font = fontsize + font
  line[0] = x + ctx.measureText(part).width
  lines.push(line)

  function rgb_to_html(rgb) {
    // convert RGB 0-1 to html 0-255
    var r = Math.floor(255 * rgb[0])
    var g = Math.floor(255 * rgb[1])
    var b = Math.floor(255 * rgb[2])
    return 'rgb(' + r + ',' + g + ',' + b + ')'
  }

  var width, L
  var nline = 0
  // Each line in lines starts with the total width of the line, followed by
  // elements of the form {x, y, font, text}, where x and y start at zero.
  var maxwidth = -1
  for (L in lines) {
    if (lines[L][0] > maxwidth) maxwidth = lines[L][0]
  }
  for (L in lines) {
    nline = 1
    y0 += nline * 1.2 * fontsize
    nline++
    for (var p in lines[L]) {
      var k = lines[L][p]
      if (k[1] === undefined) {
        width = k
        continue
      }
      ctx.font = k[2]
      ctx.fillStyle = rgb_to_html(col)
      switch (align) {
        case 'left':
          x = x0 + k[0]
          y = y0 + k[1]
          break
        case 'center':
          x = x0 + k[0] - width / 2
          y = y0 + k[1]
          break
        case 'right':
          x = x0 + k[0] - maxwidth
          y = y0 + k[1]
          break
        default:
          throw new Error(align + ' is not a possible alignment option.')
      }
      ctx.fillText(k[3], x, y)
    }
  }
}
