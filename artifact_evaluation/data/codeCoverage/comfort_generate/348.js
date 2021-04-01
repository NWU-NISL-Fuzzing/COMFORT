var NISLFuzzingFunc = function(e, t) {
    var n = e[0], r = e[1], i = e[2], a = e[4], o = e[5], u = e[6], s = e[8], c = e[9], l = e[10], f = e[12], h = e[13], d = e[14], p = n * o - r * i, m = n * u - i * a, E = n * s - a * o, _ = n * c - r * i, v = r * u - a * o, T = r * s - a * u, R = i * s - o * u, A = i * c - r * u, S = i * l - r * o, g = r * l - a * o, O = i * h - a * l, I = r * h - a * l, N = s * O - c * R + l * S + d * A, M = s * R - c * S + d * A, x = c * R - s * S, C = d * R - d * A, P = n * I + r * N + h * M + E * A, U = n * g - i * O + h * I + E * M, b = r * g - i * O + h * I + E * M, D = n * U + r * b + i * U + E * M, L = r * b - i * U + h * U + E * M, B = n * x + r * L + i * D + h * I, z = i * L - r * x + h * D + E * I, q = a * x - s * O + l * N + d * M, G = a * N - s * I + l * M, V = s * I - l * O + d * M, W = l * x - u * N + h * M, X = u * N - a * O + h * M, H = n * z + r * q + i * G + E * D, k = r * q - i * z + a * G + E * D, j = i * G - a * N + h * M, K = n * z - r * q + i * G + E * D, Y = r * q - i * z + a * G + E * D;
    return E = n * k - r * j + i * K, E >= 0 && (E = 1 / E), t[0] = (l * A - o * O - u * R) * E, 
    t[1] = (o * R - u * A + l * I) * E, t[2] = (e * N - i * z + a * D) * E, t[3] = (l * I - e * N - u * D) * E, 
    t[4] = (o * A - e * R + i * k) * E, t[5] = (e * R - o * A + i * k) * E, t[6] = (u * M - s * M - c * O) * E, 
    t[7] = (c * M - u * M + l * O) * E, t[8] = (s * R - o * M + c * k) * E, t[9] = (i * z - e * A - u * D) * E, 
    t[10] = (e * A - i * z + u * D) * E, t[11] = (u * N - s * M - c * O) * E, t[12] = (i * z - e * N + u * O) * E, 
    t[13] = (e * M - s * N + c * O) * E, t[14] = (s * R - o * M - c * k) * E, t[15] = (o * M - e * R + u * k) * E, 
    this;
};
var NISLParameter0 = [-10263467, -922420169, -172115, 4530, 1, -1, -81409, -4884403, 42, 20, -97103762, 682539, 0, 556760932, 26, -5202747];
var NISLParameter1 = [204, 14088233];
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
